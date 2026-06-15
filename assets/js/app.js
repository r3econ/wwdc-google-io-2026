/* ============================================================
   Conference field guide — presentation logic
   Loads /data/events.json, then the selected event's JSON, and
   renders it. Knows nothing about any specific feature; all
   content comes from the data files.
   ============================================================ */

const state = {
  events: [],
  activeEvent: null,
  data: null,
  activeCategory: "all",
  activeConfidence: "all",
  query: "",
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

document.addEventListener("DOMContentLoaded", init);

function init() {
  wireSearch();
  buildConfidenceFilters();
  state.events = window.GUIDE?.events ?? [];
  if (!state.events.length) {
    console.error("No event data found on window.GUIDE");
    $("#error").hidden = false;
    return;
  }
  buildEventSwitcher();
  const fromHash = state.events.find((e) => e.id === location.hash.slice(1));
  loadEvent(fromHash ?? state.events[0]);
}

/* ---------- Events ---------- */
function buildEventSwitcher() {
  const root = $("#events");
  root.innerHTML = "";
  if (state.events.length < 2) {
    root.style.display = "none";
    return;
  }
  state.events.forEach((ev) => {
    const btn = document.createElement("button");
    btn.className = "events__btn";
    btn.type = "button";
    btn.textContent = ev.label;
    btn.dataset.id = ev.id;
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => loadEvent(ev));
    root.appendChild(btn);
  });
}

function loadEvent(ev) {
  if (!ev) return;
  $$("#events .events__btn").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.id === ev.id))
  );
  state.activeEvent = ev.id;
  history.replaceState(null, "", `#${ev.id}`);

  // reset per-event filters
  state.activeCategory = "all";
  state.query = "";
  const searchEl = $("#search");
  if (searchEl) searchEl.value = "";

  const data = (window.GUIDE?.data ?? {})[ev.id];
  if (!data) {
    console.error("No data registered for event:", ev.id);
    $("#content").innerHTML = "";
    $("#error").hidden = false;
    return;
  }
  state.data = data;
  $("#error").hidden = true;
  hydrateMeta(state.data.meta);
  buildCategoryFilters(state.data.categories);
  render();
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* ---------- Meta ---------- */
function hydrateMeta(meta = {}) {
  bind("title", meta.title);
  bind("tagline", meta.tagline);
  bind("disclaimer", meta.disclaimer);
  bind("sourceNote", meta.sourceNote);
  const eyebrow = meta.eyebrow ?? (meta.keynoteDate ? `${formatDate(meta.keynoteDate)} · Keynote` : "");
  bind("eyebrow", eyebrow);
  bind("lastUpdatedLine", meta.lastUpdated ? `Last updated ${formatDate(meta.lastUpdated)}` : "");
  if (meta.title) document.title = `${meta.title} — feature guide`;
}

function bind(key, value) {
  if (value == null) return;
  $$(`[data-bind="${key}"]`).forEach((el) => (el.textContent = value));
}

/* ---------- Filters ---------- */
function buildCategoryFilters(categories = []) {
  const root = $("#category-filters");
  root.innerHTML = "";
  root.appendChild(makePill("All", "all", true));
  categories.forEach((c) => root.appendChild(makePill(`${c.icon ?? ""} ${c.name}`.trim(), c.id)));
  root.onclick = (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    setPressed(root, pill);
    state.activeCategory = pill.dataset.value;
    render();
  };
}

function buildConfidenceFilters() {
  const root = $("#confidence-filters");
  root.innerHTML = "";
  [
    ["All", "all"],
    ["High", "high"],
    ["Medium", "medium"],
  ].forEach(([label, val], i) => root.appendChild(makePill(label, val, i === 0)));
  root.onclick = (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    setPressed(root, pill);
    state.activeConfidence = pill.dataset.value;
    render();
  };
}

function makePill(label, value, pressed = false) {
  const btn = document.createElement("button");
  btn.className = "pill";
  btn.type = "button";
  btn.textContent = label;
  btn.dataset.value = value;
  btn.setAttribute("aria-pressed", String(pressed));
  return btn;
}

function setPressed(root, active) {
  $$(".pill", root).forEach((p) => p.setAttribute("aria-pressed", String(p === active)));
}

function wireSearch() {
  const input = $("#search");
  let t;
  input.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      state.query = input.value.trim().toLowerCase();
      render();
    }, 120);
  });
}

/* ---------- Rendering ---------- */
function render() {
  const { categories, features } = state.data;
  const filtered = features.filter(matchesFilters);

  const content = $("#content");
  content.innerHTML = "";

  const byCategory = new Map(categories.map((c) => [c.id, []]));
  filtered.forEach((f) => byCategory.get(f.category)?.push(f));

  let shown = 0;
  categories.forEach((cat) => {
    const items = byCategory.get(cat.id) ?? [];
    if (!items.length) return;
    shown += items.length;
    content.appendChild(renderSection(cat, items));
  });

  $("#empty").hidden = shown > 0;
  $("#result-count").textContent =
    shown === features.length ? `${shown} features` : `${shown} of ${features.length} features`;
}

function matchesFilters(f) {
  if (state.activeCategory !== "all" && f.category !== state.activeCategory) return false;
  if (state.activeConfidence !== "all" && f.confidence !== state.activeConfidence) return false;
  if (state.query) {
    const hay = [f.title, f.summary, f.details, f.version, ...(f.tags ?? [])]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!hay.includes(state.query)) return false;
  }
  return true;
}

function renderSection(cat, items) {
  const section = document.createElement("section");
  section.className = "section";

  const head = document.createElement("div");
  head.className = "section__head";
  head.innerHTML = `
    <span class="section__icon" aria-hidden="true">${cat.icon ?? ""}</span>
    <h2 class="section__title">${escapeHtml(cat.name)}</h2>
    <span class="section__count">${items.length}</span>`;
  section.appendChild(head);

  if (cat.blurb) {
    const blurb = document.createElement("p");
    blurb.className = "section__blurb";
    blurb.textContent = cat.blurb;
    section.appendChild(blurb);
  }

  const grid = document.createElement("div");
  grid.className = "grid";
  items.forEach((f) => grid.appendChild(renderCard(f)));
  section.appendChild(grid);
  return section;
}

function renderCard(f) {
  const tpl = $("#card-template").content.cloneNode(true);
  const card = $(".card", tpl);

  $(".card__title", card).textContent = f.title;

  const badge = $(".card__badge", card);
  badge.textContent = f.confidence === "high" ? "High" : "Medium";
  badge.dataset.confidence = f.confidence;

  $(".card__summary", card).textContent = f.summary ?? "";

  const details = $(".card__details", card);
  if (f.details) details.textContent = f.details;
  else details.remove();

  const note = $(".card__note", card);
  if (f.note) note.textContent = `⚠︎ ${f.note}`;
  else note.remove();

  // Tags (version first, highlighted)
  const tagWrap = $(".card__tags", card);
  if (f.version) tagWrap.appendChild(makeTag(f.version, true));
  (f.tags ?? []).filter((t) => t !== f.version).forEach((t) => tagWrap.appendChild(makeTag(t)));

  // Sources
  const sourcesWrap = $(".card__sources", card);
  (f.sources ?? []).forEach((s) => {
    const row = document.createElement("div");
    row.className = "card__source";
    row.dataset.official = String(!!f.official);
    row.innerHTML = `<a class="card__source-label" href="${encodeURI(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a>`;
    sourcesWrap.appendChild(row);
  });

  // Expand / collapse
  const toggle = $(".card__toggle", card);
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.textContent = open ? "Details & sources" : "Hide details";
    if (details.isConnected) details.hidden = open;
    if (note.isConnected) note.hidden = open;
    sourcesWrap.classList.toggle("is-open", !open);
  });

  return card;
}

function makeTag(text, isVersion = false) {
  const el = document.createElement("span");
  el.className = isVersion ? "tag tag--version" : "tag";
  el.textContent = text;
  return el;
}

/* ---------- Utils ---------- */
function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
