window.GUIDE = window.GUIDE || { events: [], data: {} };
window.GUIDE.data["playnext-ideas"] =
{
  "meta": {
    "title": "Play Next App Ideas",
    "tagline": "WWDC '26 & Google I/O '26 ideas for SRG's Play Next streaming apps (iOS, tvOS & Android/TV)",
    "eyebrow": "Proposals · grounded in the codebase",
    "lastUpdated": "2026-06-15",
    "disclaimer": "Proposals, not announced features — each maps a verified WWDC 2026 / Google I/O 2026 capability onto the Play Next codebases: playnext-apple (iOS 17 / tvOS 17, SwiftUI + @Observable) and playnext-android (Compose, app-mobile + app-tv, compileSdk 36). Confidence here means fit: High = direct path on a shipped/announced API; Medium = more exploratory, device-limited, or needs product/editorial sign-off.",
    "sourceNote": "Sources link to the underlying WWDC/I/O announcement. Play Next is multi-tenant (SRF/RTS/RSI/RTR) and multilingual (DE/FR/IT/RM), so AI-generated text/translation needs editorial review and labelling. The iOS baseline is iOS 17 (SwiftData, App Intents, Live Activities already usable; Foundation Models needs 26+, new SwiftUI/SwiftData/App-Intents APIs need 27). Android needs compileSdk 37 for API-37 features; Gemini Nano needs AICore-capable devices."
  },
  "categories": [
    { "id": "genai",    "name": "On-device & generative AI", "icon": "🧠", "blurb": "Smarter search, recommendations, summaries and subtitles via Foundation Models (iOS) and Gemini Nano (Android)." },
    { "id": "voice",    "name": "Siri & App Intents",        "icon": "✨", "blurb": "Make playback and content actionable through Siri AI, Spotlight and Shortcuts." },
    { "id": "widgets",  "name": "Widgets & Live Activities", "icon": "📲", "blurb": "Continue-watching widgets and live-broadcast activities the app doesn't have yet." },
    { "id": "design",   "name": "Design system & UI",        "icon": "🎨", "blurb": "Liquid Glass and new SwiftUI APIs in the PlayNext design system." },
    { "id": "data",     "name": "Data & persistence",        "icon": "🗃️", "blurb": "A real local store for My List / continue-watching via SwiftData." },
    { "id": "platform", "name": "Platform, media & adaptive","icon": "🧱", "blurb": "Android 17 large-screen/TV, Media3 playback, and API 37 readiness." },
    { "id": "devx",     "name": "Dev workflow & tooling",    "icon": "⚒️", "blurb": "Agent skills (the iOS app already uses them), multi-provider models, Swift 6.4." }
  ],
  "features": [
    {
      "id": "genai-search",
      "category": "genai",
      "title": "Conversational catalogue search",
      "summary": "Natural-language search ('documentaries about the Alps') over the FAPI catalogue, query-understood on-device.",
      "details": "Both apps have a server-backed Search screen today. Use an on-device model to interpret natural-language / conversational queries and map them to FAPI search params — Foundation Models on iOS, Gemini Nano on Android. Keeps typo-tolerance and intent parsing local; the backend still does the actual retrieval.",
      "confidence": "high",
      "tags": ["Cross-platform", "New", "Foundation Models", "Gemini Nano"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "iOS Foundation Models needs iOS 26+ (@available gating from the iOS 17 baseline); Android Nano 4 is preview + AICore-device-only — fall back to plain search elsewhere.",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "genai-rerank",
      "category": "genai",
      "title": "On-device recommendation re-ranking",
      "summary": "Personalise the order of server recommendations using local watch history — privacy-preserving.",
      "details": "Recommendations are server-driven (e.g. the iOS EpilogueRecommendationView, FAPI collections on Android). Re-rank the returned items on-device against local watch history / affinities so the home rails feel personal without sending behaviour to the backend — Foundation Models / Core AI on iOS, Gemini Nano on Android.",
      "confidence": "medium",
      "tags": ["Cross-platform", "New", "Core AI", "Gemini Nano"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Needs a local watch-history store (see the SwiftData idea). Validate against the editorial/curated ordering — don't override editorially pinned content.",
      "sources": [
        { "title": "WWDC26 — Meet Core AI (Session 324)", "url": "https://developer.apple.com/videos/play/wwdc2026/324/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "genai-summaries",
      "category": "genai",
      "title": "Show / episode summaries & 'what you missed'",
      "summary": "Generate short synopses or catch-up recaps on the Show/Detail screens.",
      "details": "On the Show/Detail screens, generate a concise synopsis or a 'what you missed' recap for serialised content from the existing metadata — Foundation Models (iOS) / Gemini Nano (Android). Useful for long-running series and daily news/sport formats.",
      "confidence": "medium",
      "tags": ["Cross-platform", "New", "Foundation Models", "Gemini Nano"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Editorial review + 'AI-generated' labelling required for a public broadcaster; best seeded from official descriptions to avoid hallucination.",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "genai-subtitles",
      "category": "genai",
      "title": "On-device subtitle translation",
      "summary": "Translate subtitles across the Swiss national languages on-device.",
      "details": "SRG content spans DE/FR/IT/RM. Offer on-device translation of subtitle tracks so a viewer can watch RTS content with German subtitles, etc. — Apple Translation / Foundation Models on iOS, ML Kit / Gemini Nano on Android — without a network round-trip.",
      "confidence": "medium",
      "tags": ["Cross-platform", "New", "Translation", "Foundation Models"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Romansh coverage is uncertain in general-purpose models; verify language pairs. Coordinate with Pillarbox for subtitle-track access. Label machine translations.",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "voice-app-intents",
      "category": "voice",
      "title": "App Intents: 'Play RTS 1' / resume a show (iOS)",
      "summary": "Expose play/resume/search as App Intents feeding Siri, Spotlight and the Action button.",
      "details": "The app has a deep-link Router but zero Siri/Shortcuts surface. Expose App Intents — play a live channel, resume the last show, search — and use the 2026 entity/intent schemas to contribute the catalogue to Spotlight's semantic index. The Router already resolves URNs, so intents can reuse that path. App Intents work from iOS 16; the new Spotlight schemas / View Annotations need iOS 27.",
      "confidence": "high",
      "tags": ["iOS", "New", "App Intents", "Spotlight"],
      "version": "iOS 27",
      "official": false,
      "note": "Great fit for tvOS + Action-button/Control-Center quick play. Android has no App Actions equivalent here — a parallel gap.",
      "sources": [
        { "title": "WWDC26 — App Intents (Session 343)", "url": "https://developer.apple.com/videos/play/wwdc2026/343/" },
        { "title": "WWDC26 — Dive deeper into App Intents (Session 345)", "url": "https://developer.apple.com/videos/play/wwdc2026/345/" }
      ]
    },
    {
      "id": "voice-siri-context",
      "category": "voice",
      "title": "Siri AI personal context (iOS)",
      "summary": "Donate My List / continue-watching entities so Siri AI can reference them.",
      "details": "Siri AI gains personal context and onscreen awareness. Donate Play Next entities — My List items, continue-watching, followed shows — via App Intents + View Annotations so users can say 'resume the show I was watching' or 'add this to my list'. Builds on the watchlist the app already manages.",
      "confidence": "medium",
      "tags": ["iOS", "New", "Siri AI", "App Intents"],
      "version": "iOS 27",
      "official": false,
      "note": "Siri AI is developer-testing/beta with EU limits at announcement — confirm Swiss availability before committing UX.",
      "sources": [
        { "title": "Apple Newsroom — Siri AI", "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" },
        { "title": "WWDC26 — App Intents (Session 343)", "url": "https://developer.apple.com/videos/play/wwdc2026/343/" }
      ]
    },
    {
      "id": "widgets-continue-watching",
      "category": "widgets",
      "title": "Continue-watching & live-now widgets (iOS)",
      "summary": "Add Home/Lock-Screen widgets — including the new XL portrait family — the app currently has none.",
      "details": "Play Next ships no WidgetKit widgets. Add continue-watching, My List, and 'live now' widgets backed by the existing FAPI data, and use the new systemExtraLargePortrait family for a rich iPad/large-screen widget. High impact, low friction for a streaming app.",
      "confidence": "high",
      "tags": ["iOS", "New", "WidgetKit"],
      "version": "iOS 27",
      "official": false,
      "note": "Base widgets work on iOS 17; gate the systemExtraLargePortrait size to iOS 27. Reuse the FrontendAPI client in the widget extension.",
      "sources": [
        { "title": "WWDC26 — WidgetKit foundations (Session 277)", "url": "https://developer.apple.com/videos/play/wwdc2026/277/" }
      ]
    },
    {
      "id": "widgets-live-activities",
      "category": "widgets",
      "title": "Live Activities for live broadcasts (iOS)",
      "summary": "Lock-screen / Dynamic Island activities for ongoing live streams and episode countdowns.",
      "details": "The Live/LiveChannels screens have start/show dates but no Live Activities. Add ActivityKit activities for an ongoing live broadcast (progress, 'on air now') and countdowns to a scheduled programme, updated via push. A natural companion to the live-streaming core.",
      "confidence": "high",
      "tags": ["iOS", "New", "Live Activities", "ActivityKit"],
      "version": "iOS 27",
      "official": false,
      "note": "Needs a Live Activity push channel; the app has no push integration yet, so that's a prerequisite (also unlocks live-event notifications).",
      "sources": [
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" }
      ]
    },
    {
      "id": "design-liquid-glass",
      "category": "design",
      "title": "Liquid Glass + transparency in the design system (iOS)",
      "summary": "Adopt the refined Liquid Glass materials across the 37-component design system and honour the transparency slider.",
      "details": "Roll the refined iOS 27 Liquid Glass materials into the PlayNext DesignSystem (Buttons, Teaser, Chips, Tabs, player overlays) so iOS and tvOS get a consistent modern look, and ensure player/teaser overlays honour the system transparency/contrast setting — important for legibility over video artwork.",
      "confidence": "high",
      "tags": ["iOS", "Improve", "Liquid Glass", "Design system"],
      "version": "iOS 27",
      "official": false,
      "note": "Audit teaser/player gradient overlays that may clash with the new materials; verify legibility at full transparency over bright artwork.",
      "sources": [
        { "title": "MacRumors — Liquid Glass improvements", "url": "https://www.macrumors.com/2026/06/08/apple-announces-liquid-glass-improvements/" }
      ]
    },
    {
      "id": "design-reorderable",
      "category": "design",
      "title": "Reorderable 'My List' + swipe actions (iOS)",
      "summary": "Use SwiftUI's new reorderable containers & universal swipe actions for the watchlist.",
      "details": "Let users reorder My List and swipe to remove/mark-watched using the iOS 27 SwiftUI .reorderable() containers and universal swipe actions — no custom drag code. Works in the grid/teaser layouts the DesignSystem already uses.",
      "confidence": "high",
      "tags": ["iOS", "New", "SwiftUI"],
      "version": "iOS 27",
      "official": false,
      "note": "New SwiftUI APIs are iOS 27-only; keep a fallback for the iOS 17 baseline.",
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "WWDC26 — What's new in SwiftUI (Session 269)", "url": "https://developer.apple.com/videos/play/wwdc2026/269/" }
      ]
    },
    {
      "id": "design-toolbar-state",
      "category": "design",
      "title": "Toolbar minimize + faster layout (iOS)",
      "summary": "Collapse-on-scroll toolbars on Detail/Show, plus lazy @State and ~2× faster resizing.",
      "details": "Adopt toolbarMinimizeBehavior on long Show/Detail/Collection screens for more artwork space, and pick up the free wins — lazy @State initialisation and the ~2× faster layout resizing — across the heavy teaser/collection scroll views.",
      "confidence": "medium",
      "tags": ["iOS", "Improve", "SwiftUI"],
      "version": "iOS 27",
      "official": false,
      "note": "Additive polish; gate the new APIs to iOS 27.",
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" }
      ]
    },
    {
      "id": "data-swiftdata",
      "category": "data",
      "title": "SwiftData for My List & continue-watching (iOS)",
      "summary": "Give iOS a real local store instead of UserDefaults + Keychain.",
      "details": "iOS persists only via UserDefaults + Keychain today, so My List / watch history are fragile. Adopt SwiftData for a proper local store with querying and optional CloudKit sync across iPhone/iPad/Apple TV. Android already uses DataStore; this brings iOS to a real model layer (and enables the on-device re-ranking idea).",
      "confidence": "medium",
      "tags": ["iOS", "New", "SwiftData"],
      "version": "iOS 17",
      "official": false,
      "note": "SwiftData is available from the app's iOS 17 baseline (no bump needed). Plan a migration from the current UserDefaults store; keep PII out.",
      "sources": [
        { "title": "WWDC26 — What's new in SwiftData (Session 274)", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "data-swiftdata-sections",
      "category": "data",
      "title": "Grouped lists with sectionBy: / ResultsObserver (iOS)",
      "summary": "Use the 2026 SwiftData APIs to section lists and feed widgets from the same store.",
      "details": "Once on SwiftData, use @Query(sectionBy:) to group My List by show/genre, and ResultsObserver to feed the new widgets/Live Activities from the same store outside SwiftUI — keeping app, widget and continue-watching state consistent.",
      "confidence": "medium",
      "tags": ["iOS", "New", "SwiftData"],
      "version": "iOS 27",
      "official": false,
      "note": "Depends on the SwiftData adoption above; the new sectionBy:/ResultsObserver APIs are iOS 26/27-only.",
      "sources": [
        { "title": "WWDC26 — What's new in SwiftData (Session 274)", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "platform-media3-scrubbing",
      "category": "platform",
      "title": "Media3 scrubbing preview & AI effects (Android)",
      "summary": "Adopt ExoPlayer Scrubbing Mode + Media3 AI Effects in the Pillarbox player on mobile & TV.",
      "details": "app-shared wraps Pillarbox (Media3-based), so Android 17's ExoPlayer Scrubbing Mode (thumbnail preview while seeking) and Media3 AI Effects are within reach — a big seek-UX win for long-form VOD and live replays on both phone and the Android TV app.",
      "confidence": "medium",
      "tags": ["Android", "New", "Media3", "Pillarbox"],
      "version": "Android 17",
      "official": false,
      "note": "Depends on Pillarbox 9.x exposing the relevant Media3 APIs — coordinate with the SRG Pillarbox team.",
      "sources": [
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "platform-adaptive",
      "category": "platform",
      "title": "Android 17 large-screen / adaptive panes (Android)",
      "summary": "Multi-pane list|detail on tablets, foldables and the Googlebook form factor.",
      "details": "Only a partial window-size-class setup exists today. Android 17 pushes desktop/large-screen apps and mandatory large-screen resizability — add adaptive multi-pane layouts (browse list | show detail | player) for tablets/foldables, sharing patterns with the existing app-tv layouts.",
      "confidence": "high",
      "tags": ["Android", "Improve", "Android 17", "Adaptive"],
      "version": "Android 17",
      "official": false,
      "note": "API 37 makes large-screen resizability mandatory — design for it rather than being force-resized.",
      "sources": [
        { "title": "io.google — Platforms keynote", "url": "https://io.google/2026/explore/pa-keynote-5" },
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "platform-api37",
      "category": "platform",
      "title": "Android 17 / API 37 readiness (Android)",
      "summary": "Certificate transparency, large-screen resizability, background-audio & SMS-OTP changes.",
      "details": "When moving compileSdk/targetSdk to 37, audit the new behaviour changes: certificate transparency by default (check the Retrofit/OkHttp + FAPI setup in fapi-data/network), mandatory large-screen resizability (mobile + TV), and background-audio hardening (relevant to the Pillarbox MediaSessionService / background playback). A readiness pass that unblocks the other Android-17 items.",
      "confidence": "high",
      "tags": ["Android", "Improve", "Android 17", "API 37"],
      "version": "Android 17",
      "official": false,
      "note": "Compliance work — schedule before targetSdk 37 so background audio / networking don't break silently.",
      "sources": [
        { "title": "Android 17 behavior changes", "url": "https://developer.android.com/about/versions/17/behavior-changes-17" }
      ]
    },
    {
      "id": "devx-xcode-skills",
      "category": "devx",
      "title": "Extend the Claude skills with Xcode 27 skills (iOS)",
      "summary": "The repo already uses agent skills — add Xcode 27 coding-assistant skills for PlayNext conventions.",
      "details": "playnext-apple already ships agent skills (.agents/skills/swiftui-pro, swift-concurrency-pro, skills-lock.json). Add Xcode 27 coding-assistant skills that encode PlayNext's own conventions — @Observable view models, Loadable<T>, the SwiftUI view template, platformValue(), the FrontendAPI/OpenAPI flow — so the in-IDE assistant scaffolds code the PlayNext way and helps adopt the new iOS 27 APIs above.",
      "confidence": "high",
      "tags": ["iOS", "New", "Xcode 27", "Coding assistant"],
      "version": "iOS 27",
      "official": false,
      "note": "Natural extension of the skills setup that's already in the repo.",
      "sources": [
        { "title": "MacRumors — Xcode & Foundation Models improvements", "url": "https://www.macrumors.com/2026/06/08/apple-unveils-xcode-and-models-improvements/" },
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" }
      ]
    },
    {
      "id": "devx-android-skills",
      "category": "devx",
      "title": "Android Studio Agent Skills for PlayNext (Android)",
      "summary": "SKILL.md skills for the convention plugins, module layout and OpenAPI flow.",
      "details": "playnext-android has rich conventions (build-logic convention plugins, design-system mobile/tv split, fapi-data OpenAPI generation, Navigation3). Write Android Studio Agent Skills (markdown SKILL.md) so Agent Mode follows them — 'add a feature module', 'add a Compose-TV screen with PlayNextPalette', 'regenerate the FAPI client'.",
      "confidence": "high",
      "tags": ["Android", "New", "Android Studio", "Agent Skills"],
      "version": "Android 17",
      "official": false,
      "note": "Low-risk, high-leverage; mirrors the skills the iOS repo already uses. Skills are markdown checked into the repo.",
      "sources": [
        { "title": "What's new in Android developer tools", "url": "https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html" },
        { "title": "Build Android apps 3× faster using any agent", "url": "https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html" }
      ]
    },
    {
      "id": "devx-swift64",
      "category": "devx",
      "title": "Swift 6.4 adoption (iOS)",
      "summary": "anyAppleOS shorthand, suppressible warnings, async defer across the SwiftUI/SPM code.",
      "details": "The app is already on Swift 6 with @Observable and strict concurrency. Swift 6.4's anyAppleOS simplifies the iOS/tvOS @available checks (the app is dual-platform), @diagnose tunes warnings, and async defer tidies cleanup in the async PlayerManager/repository code.",
      "confidence": "medium",
      "tags": ["iOS", "Improve", "Swift 6.4"],
      "version": "Swift 6.4",
      "official": false,
      "note": "Needs the Swift 6.4 toolchain in CI; the jump from Swift 6 is small.",
      "sources": [
        { "title": "What's new in Swift (developer.apple.com)", "url": "https://developer.apple.com/swift/whats-new/" },
        { "title": "WWDC26 — What's new in Swift (Session 262)", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "devx-models",
      "category": "devx",
      "title": "Multi-provider models in Android Studio (Android)",
      "summary": "Let the team pick Gemini, Claude or GPT (or local Gemma 4) in Agent Mode.",
      "details": "Android Studio's Agent Mode now supports multiple model providers plus local Gemma 4, with dedicated capacity on Google AI Pro/Ultra. Standardise a model choice for the team and pair it with the Agent Skills above (and Antigravity 2.0 for larger multi-step refactors).",
      "confidence": "medium",
      "tags": ["Android", "Improve", "Android Studio"],
      "version": "Android 17",
      "official": false,
      "note": "Team-workflow/tooling change rather than app code.",
      "sources": [
        { "title": "What's new in Android developer tools", "url": "https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html" },
        { "title": "Developer keynote — all the news", "url": "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/" }
      ]
    }
  ]
};
