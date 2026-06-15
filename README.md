# Conference feature guide — WWDC 2026 & Google I/O 2026

A small, data-driven, source-cited field guide to what's new for developers at
**WWDC 2026** (June 8) and **Google I/O 2026** (May 19–20). Minimalist static site,
**no server and no build step** — open `index.html` and it works. Designed to read on
screen or export cleanly to PDF.

## Design

Presentation is fully separated from data. The renderer names no feature — everything
comes from the data files, and each event is just another file.

| Layer | File | Responsibility |
|-------|------|----------------|
| Manifest | [`data/events.js`](data/events.js) | Lists the events. Drives the switcher. |
| Data | [`data/wwdc2026.js`](data/wwdc2026.js), [`data/googleio2026.js`](data/googleio2026.js) | Every feature, category, source, confidence level. **Edit these to change content.** |
| Markup | [`index.html`](index.html) | Static shell + a `<template>` for cards. |
| Style | [`assets/css/styles.css`](assets/css/styles.css) | Minimalist light theme + a print/PDF stylesheet. |
| Logic | [`assets/js/app.js`](assets/js/app.js) | Reads the data globals, renders, handles search/filters/switcher. |

Each data file is a thin JS wrapper around a JSON object (`window.GUIDE.data["…"] = { … }`).
This is what lets the page run from `file://` with no server — browsers block `fetch()`
of local files, but plain `<script>` tags load fine. Add an event by dropping a file in
`data/` and adding a line to both `events.js` and `index.html`. Add a feature by appending
an object to a file's `features[]`. No code changes.

### Data schema

```jsonc
// data/<event>.js
window.GUIDE = window.GUIDE || { events: [], data: {} };
window.GUIDE.data["<event-id>"] =
{
  "meta": { "title", "tagline", "keynoteDate", "lastUpdated", "disclaimer", "sourceNote" },
  "categories": [ { "id", "name", "icon", "blurb" } ],
  "features": [
    {
      "id":         "unique-slug",
      "category":   "matches a categories[].id",
      "title":      "Short name",
      "summary":    "One-line description (always shown)",
      "details":    "Longer prose (shown when expanded / in print)",  // optional
      "confidence": "high | medium",
      "tags":       ["Android 17", "AI"],
      "version":    "iOS 27 | Swift 6.4 | Android 17 | Gemini 3.5 | null",
      "official":   true,         // backed by a primary source
      "note":       "Caveat shown in a callout",                      // optional
      "sources":    [ { "title": "Apple Newsroom", "url": "https://…" } ]
    }
  ]
};
```

Each feature carries a **confidence** level and its **sources**, so the page stays honest
about what's confirmed (High = primary sources) vs. reported (Medium = press / split
verification).

## Run it

Just open [`index.html`](index.html) in any browser (double-click it). No server, no build.

## Export to PDF

Open the event you want and use the browser's **Print → Save as PDF** (⌘P / Ctrl+P).
The print stylesheet automatically:

- hides the search box, filters, and event switcher;
- expands every card's details, notes, and sources (you can't click in a PDF);
- prints each source's URL inline, so the document is self-contained;
- avoids page breaks inside cards.

Export each event separately (switch event, then print).

## Provenance

Content was compiled via multi-source web research with adversarial fact-checking — each
claim was verified by independent voters and refuted claims were excluded. Sources and
confidence are listed per feature in the UI. Treat Medium-confidence items accordingly.

## Optional: deploy to GitHub Pages

Not required (it's a plain static site), but the repo includes a no-build Pages workflow
at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Push to `main`, set
**Settings → Pages → Source: GitHub Actions**, and it publishes the repo root.
