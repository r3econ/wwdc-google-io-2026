window.GUIDE = window.GUIDE || { events: [], data: {} };
window.GUIDE.data["srf-ideas"] =
{
  "meta": {
    "title": "SRF App Ideas",
    "tagline": "Turning WWDC '26 & Google I/O '26 into roadmap ideas for SRF News, Meteo & Sport",
    "eyebrow": "Proposals · grounded in the codebase",
    "lastUpdated": "2026-06-15",
    "disclaimer": "These are proposals, not announced features — each maps a verified WWDC 2026 / Google I/O 2026 capability onto the existing srf-apple (iOS 16, SwiftUI) and srf-android (minSdk 29 / compileSdk 36, Compose) codebases. Confidence here means fit: High = direct path on a shipped/announced API; Medium = more exploratory, device-limited, or needs product/editorial sign-off.",
    "sourceNote": "Sources link to the underlying WWDC/I/O announcement. AI-generated text (summaries, recaps, translations) for a public broadcaster needs editorial review and clear labelling. Adopting iOS 26/27 or Android 17 APIs means raising deployment targets (iOS app currently targets 16.0; Android compileSdk 36) and gating with @available / SDK_INT checks."
  },
  "categories": [
    { "id": "genai",     "name": "On-device & generative AI", "icon": "🧠", "blurb": "Summaries, recaps, advisories and translation via Foundation Models (iOS) and Gemini Nano (Android)." },
    { "id": "intents",   "name": "Siri & App Intents",        "icon": "✨", "blurb": "Make SRF content actionable and discoverable through Siri AI, Spotlight and Shortcuts." },
    { "id": "widgets",   "name": "Widgets & Live Activities", "icon": "📲", "blurb": "Extend the widget and Live Activity story already shipping in the apps." },
    { "id": "design",    "name": "Design system & UI",        "icon": "🎨", "blurb": "Liquid Glass, reorderable lists and new SwiftUI APIs in CoreDesign/CoreUI." },
    { "id": "data",      "name": "Data & persistence",        "icon": "🗃️", "blurb": "Bring SwiftData to iOS favourites/bookmarks to match Android's Room/DataStore." },
    { "id": "platform",  "name": "Platform, media & adaptive","icon": "🧱", "blurb": "Android 17 large-screen, Media3 playback, and API 37 readiness." },
    { "id": "devx",      "name": "Dev workflow & tooling",    "icon": "⚒️", "blurb": "Agent skills, multi-provider model choice, and Swift 6.4 across the monorepos." }
  ],
  "features": [
    {
      "id": "genai-news-summaries",
      "category": "genai",
      "title": "On-device article summaries (News)",
      "summary": "Add TL;DR + key-points to SRF News articles, generated on-device in German.",
      "details": "SRF News has rich article content but no summarisation today. Generate a short summary and bullet key-points in the article screen — on iOS via the Foundation Models framework (on-device, German), on Android via Gemini Nano 4 / ML Kit GenAI summarisation. Keep it on-device for privacy and zero cost; fall back to Private Cloud Compute (iOS) or a server model where the on-device model is unavailable.",
      "confidence": "high",
      "tags": ["Cross-platform", "New", "Foundation Models", "Gemini Nano"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Editorial: AI summaries must be reviewed/labelled for a public broadcaster. iOS needs @available(iOS 26+) gating (app targets 16). Android Nano 4 is preview and AICore-device-only.",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "genai-sport-recaps",
      "category": "genai",
      "title": "Auto match recaps (Sport)",
      "summary": "Generate 'what happened' recaps from EventAPI/SportAPI structured match data.",
      "details": "SRF Sport already has structured live data (SportAPI, EventAPI, live centers). Feed final/period data into an on-device model to draft a short recap or 'key moments' blurb for finished matches — Foundation Models on iOS, Gemini Nano on Android. Useful for the live center and match-detail screens.",
      "confidence": "medium",
      "tags": ["Cross-platform", "New", "Foundation Models", "Gemini Nano"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Quality depends on prompt + data completeness; needs editorial guardrails and a 'draft' label. Best as an editor-assist tool rather than fully automated publishing.",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "genai-meteo-advisory",
      "category": "genai",
      "title": "Plain-language weather advisories (Meteo)",
      "summary": "Turn structured forecast + warnings into a natural 'plan your day' summary.",
      "details": "SRF Meteo has structured MeteoAPI forecast and warning data plus user location. Generate a friendly, plain-language daily/weekly advisory ('rain clears by noon, take a jacket this evening') on-device — Foundation Models (iOS) / Gemini Nano (Android). Strong fit because the input is already structured and local.",
      "confidence": "high",
      "tags": ["Cross-platform", "New", "Foundation Models", "Gemini Nano"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Deterministic data → generated prose is low-risk, but keep warnings verbatim (don't paraphrase official weather warnings).",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" }
      ]
    },
    {
      "id": "genai-news-translation",
      "category": "genai",
      "title": "On-device article translation (News)",
      "summary": "Translate articles across the Swiss national languages on-device.",
      "details": "SRF serves a multilingual audience (DE/FR/IT/RM + EN). Offer on-device translation of article text — Foundation Models / Apple Translation on iOS, ML Kit / Gemini Nano on Android — so users can read any SRF News piece in their language without a network round-trip.",
      "confidence": "medium",
      "tags": ["Cross-platform", "New", "Translation", "Foundation Models"],
      "version": "iOS 27 / Android 17",
      "official": false,
      "note": "Romansh coverage is uncertain in general-purpose models; verify supported language pairs. Label machine translations.",
      "sources": [
        { "title": "WWDC26 — Foundation Models (Session 241)", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Gemini Nano 4 (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "intents-app-intents-schemas",
      "category": "intents",
      "title": "App Intents + Spotlight across all 3 apps (iOS)",
      "summary": "Expand App Intents beyond Meteo so News & Sport content feeds Spotlight and Shortcuts.",
      "details": "Only SRF Meteo ships an Intents extension today. Adopt the 2026 App Intents upgrades — entity/intent schemas that contribute content to Spotlight's semantic index, plus the App Intents testing framework — so users can ask for 'latest Sport news' or 'score for FCB' and act on it from Siri/Spotlight/Shortcuts. The protocol-first @Injected services make exposing intents per app straightforward.",
      "confidence": "high",
      "tags": ["iOS", "Improve", "App Intents", "Spotlight"],
      "version": "iOS 27",
      "official": false,
      "note": "Basic App Intents already work on iOS 16; the new Spotlight semantic schemas / View Annotations need iOS 27 gating. Android has no App Actions equivalent today — a parallel gap worth tracking.",
      "sources": [
        { "title": "WWDC26 — App Intents (Session 343)", "url": "https://developer.apple.com/videos/play/wwdc2026/343/" },
        { "title": "WWDC26 — Dive deeper into App Intents (Session 345)", "url": "https://developer.apple.com/videos/play/wwdc2026/345/" }
      ]
    },
    {
      "id": "intents-siri-personal-context",
      "category": "intents",
      "title": "Siri AI personal context donation (iOS)",
      "summary": "Donate entities (followed teams, saved articles, favourite locations) so Siri AI can surface them.",
      "details": "Siri AI gains personal-context understanding and onscreen awareness. Donate SRF entities — followed teams (Sport), bookmarks (News), favourite locations (Meteo) — via App Intents + the new View Annotations API so Siri AI can reference 'my team's next match' or 'the weather where I'm going'. Builds directly on the favourites/bookmarks the apps already manage.",
      "confidence": "medium",
      "tags": ["iOS", "New", "Siri AI", "App Intents"],
      "version": "iOS 27",
      "official": false,
      "note": "Siri AI is developer-testing/beta with regional limits (EU) at announcement — validate availability in Switzerland before committing UX.",
      "sources": [
        { "title": "Apple Newsroom — Siri AI", "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" },
        { "title": "WWDC26 — App Intents (Session 343)", "url": "https://developer.apple.com/videos/play/wwdc2026/343/" }
      ]
    },
    {
      "id": "widgets-live-activities-expand",
      "category": "widgets",
      "title": "Live Activities for Meteo & News (iOS)",
      "summary": "Reuse Sport's Live Activity patterns for storm/rain warnings and breaking news.",
      "details": "SRF Sport already has football Live Activities (lock screen, Dynamic Island, watch-stack). Extend the pattern: Meteo storm/heavy-rain warnings as a live countdown on the lock screen, and News breaking-story alerts in the Dynamic Island. The ActivityKit plumbing in SRF Sport Widget is a ready template.",
      "confidence": "high",
      "tags": ["iOS", "Improve", "Live Activities", "ActivityKit"],
      "version": "iOS 27",
      "official": false,
      "note": "Push-to-start / frequent updates need a Live Activity push channel — the apps already use Airship + the custom PushSDK, so the transport exists.",
      "sources": [
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" }
      ]
    },
    {
      "id": "widgets-extra-large-portrait",
      "category": "widgets",
      "title": "systemExtraLargePortrait widget (iOS)",
      "summary": "Adopt the new XL portrait widget family for iPad/large-screen Meteo & News.",
      "details": "WidgetKit's systemExtraLargePortrait family (from visionOS 26) is new on iOS/iPadOS 27. Use it for a richer Meteo dashboard (multi-day + radar thumbnail) and a News front-page widget on iPad — the apps already ship the smaller widget families, so this is an additive size class.",
      "confidence": "high",
      "tags": ["iOS", "New", "WidgetKit"],
      "version": "iOS 27",
      "official": false,
      "note": "Add to supportedFamilies and gate the new size to iOS 27; existing families keep working on older OS.",
      "sources": [
        { "title": "WWDC26 — WidgetKit foundations (Session 277)", "url": "https://developer.apple.com/videos/play/wwdc2026/277/" }
      ]
    },
    {
      "id": "widgets-interactive-glance",
      "category": "widgets",
      "title": "Interactive Glance widgets (Android Meteo)",
      "summary": "Make the Meteo Glance widgets interactive — toggle location, page through hours.",
      "details": "meteoapp's Glance widgets (Forecast, Rainfall, Hourly, Daily) are tap-to-open only. Add in-widget actions (actionRunCallback) to switch favourite location or page the next 6 hours without launching the app, refreshed via the existing UpdateAllWidgetsWorker. Pairs well with a richer layout on large home screens.",
      "confidence": "high",
      "tags": ["Android", "Improve", "Glance", "WorkManager"],
      "version": "Android 17",
      "official": false,
      "note": "Glance already supports interactivity; mainly a UX + WorkManager-scheduling effort, no new platform dependency.",
      "sources": [
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "design-liquid-glass",
      "category": "design",
      "title": "Adopt refined Liquid Glass + honour transparency (iOS)",
      "summary": "Update CoreDesign/CoreUI to the layered Liquid Glass look and respect the user transparency slider.",
      "details": "iOS 27 refines Liquid Glass (layered materials, icon-artwork layers) and adds a user transparency slider. Roll the refreshed materials into the shared CoreDesign/CoreUI components so all three apps get a consistent modern look, and make sure custom surfaces honour the system transparency/contrast setting (an accessibility win after iOS 26 contrast complaints).",
      "confidence": "high",
      "tags": ["iOS", "Improve", "Liquid Glass", "CoreDesign"],
      "version": "iOS 27",
      "official": false,
      "note": "Audit custom backgrounds/overlays in CoreUI that may fight the new materials; verify legibility at full transparency.",
      "sources": [
        { "title": "MacRumors — Liquid Glass improvements", "url": "https://www.macrumors.com/2026/06/08/apple-announces-liquid-glass-improvements/" }
      ]
    },
    {
      "id": "design-reorderable-favourites",
      "category": "design",
      "title": "Native reorderable favourites + swipe actions (iOS)",
      "summary": "Use SwiftUI's new reorderable containers & universal swipe actions for favourites lists.",
      "details": "Meteo (locations) and Sport (teams/leagues) both have favourites lists. iOS 27 SwiftUI adds .reorderable() containers and swipe actions in any container — replace any custom drag/reorder code with the native APIs. Android's newsapp/sportapp already use the Reorderable Compose library, so this brings iOS to parity.",
      "confidence": "high",
      "tags": ["iOS", "Improve", "SwiftUI"],
      "version": "iOS 27",
      "official": false,
      "note": "New SwiftUI APIs are iOS 27-only; keep a fallback path for the iOS 16 baseline or bump the minimum.",
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "WWDC26 — What's new in SwiftUI (Session 269)", "url": "https://developer.apple.com/videos/play/wwdc2026/269/" }
      ]
    },
    {
      "id": "design-toolbar-apis",
      "category": "design",
      "title": "New toolbar APIs (iOS)",
      "summary": "Collapse-on-scroll nav bars and overflow menus across reading/list screens.",
      "details": "Adopt toolbarMinimizeBehavior (collapse the nav bar on scroll) and the new toolbarOverflowMenu / visibilityPriority APIs in the News article reader and long Meteo/Sport lists for more reading space and cleaner toolbars — a low-risk, high-polish change in the shared CoreUI navigation components.",
      "confidence": "medium",
      "tags": ["iOS", "Improve", "SwiftUI"],
      "version": "iOS 27",
      "official": false,
      "note": "Purely additive polish; gate to iOS 27.",
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" }
      ]
    },
    {
      "id": "data-swiftdata-favourites",
      "category": "data",
      "title": "SwiftData for bookmarks & favourites (iOS)",
      "summary": "Move News bookmarks and Meteo/Sport favourites to SwiftData (iOS has no persistence framework today).",
      "details": "The iOS apps have no SwiftData/Core Data layer — favourites/bookmarks appear to live in lightweight stores. Adopt SwiftData for richer querying, indexing, and potential CloudKit sync across devices. Android already uses Room (Meteo) + DataStore, so this brings the iOS side up to a real local store.",
      "confidence": "medium",
      "tags": ["iOS", "New", "SwiftData"],
      "version": "iOS 27",
      "official": false,
      "note": "SwiftData needs iOS 17+ (app targets 16) — requires a deployment-target bump or gated rollout. Plan a migration from the current store.",
      "sources": [
        { "title": "WWDC26 — What's new in SwiftData (Session 274)", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "data-swiftdata-sections",
      "category": "data",
      "title": "Grouped favourites with sectionBy: / ResultsObserver (iOS)",
      "summary": "Use the 2026 SwiftData APIs to section favourites and observe outside SwiftUI.",
      "details": "Once on SwiftData, use the new @Query(sectionBy:) to group Sport favourites by league or Meteo locations by region, and ResultsObserver to feed widgets/Live Activities from the same store outside SwiftUI views — keeping widget and app data consistent.",
      "confidence": "medium",
      "tags": ["iOS", "New", "SwiftData"],
      "version": "iOS 27",
      "official": false,
      "note": "Depends on the SwiftData migration above; the new APIs are iOS 26/27-only.",
      "sources": [
        { "title": "WWDC26 — What's new in SwiftData (Session 274)", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "platform-large-screen",
      "category": "platform",
      "title": "Android 17 large-screen split views (Sport & News)",
      "summary": "Extend adaptive layouts beyond Meteo: list|detail on tablets, foldables and Googlebook.",
      "details": "Only meteoapp uses material3-adaptive today. Android 17 pushes desktop/large-screen apps (incl. the Googlebook laptop form factor) and mandatory large-screen resizability. Add split-view to Sport (live-results list | match detail) and News (article list | detail), reusing the WindowSizeClass approach already in Meteo.",
      "confidence": "high",
      "tags": ["Android", "Improve", "Android 17", "Adaptive"],
      "version": "Android 17",
      "official": false,
      "note": "API 37 makes large-screen resizability mandatory anyway — better to design for it than be force-resized.",
      "sources": [
        { "title": "io.google — Platforms keynote", "url": "https://io.google/2026/explore/pa-keynote-5" },
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "platform-media3-scrubbing",
      "category": "platform",
      "title": "Media3 scrubbing preview & AI effects (Android video)",
      "summary": "Adopt ExoPlayer Scrubbing Mode + Media3 AI Effects in the Pillarbox-based player.",
      "details": "srf-player wraps Pillarbox, which is Media3-based — so Android 17's ExoPlayer Scrubbing Mode (thumbnail/preview while seeking) and Media3 AI Effects are within reach for Sport livestream/VOD and News video. Better seek UX for long sports replays in particular.",
      "confidence": "medium",
      "tags": ["Android", "New", "Media3", "Pillarbox"],
      "version": "Android 17",
      "official": false,
      "note": "Depends on Pillarbox exposing the relevant Media3 APIs; coordinate with the SRG Pillarbox team.",
      "sources": [
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "platform-api37-readiness",
      "category": "platform",
      "title": "Android 17 / API 37 readiness (Android)",
      "summary": "Plan for certificate transparency, large-screen resizability, SMS OTP & audio changes.",
      "details": "When bumping compileSdk/targetSdk to 37, audit the new behaviour changes: certificate transparency by default (check pinning/proxy setups in srf-network), mandatory large-screen resizability, background-audio hardening (relevant to the Pillarbox audio session), and SMS OTP delays (login flows). A readiness pass rather than a feature, but a prerequisite for everything else Android-17.",
      "confidence": "high",
      "tags": ["Android", "Improve", "Android 17", "API 37"],
      "version": "Android 17",
      "official": false,
      "note": "Compliance work — schedule before targetSdk 37 so nothing breaks silently.",
      "sources": [
        { "title": "Android 17 behavior changes", "url": "https://developer.android.com/about/versions/17/behavior-changes-17" }
      ]
    },
    {
      "id": "devx-android-studio-skills",
      "category": "devx",
      "title": "Android Studio Agent Skills for SRF conventions",
      "summary": "Author SKILL.md skills encoding the monorepo's module + OpenAPI + Hilt conventions.",
      "details": "srf-android has strong conventions (convention plugins, version catalogs, OpenAPI codegen, Hilt, Compose patterns). Write Agent Skills (markdown SKILL.md) so Android Studio's Agent Mode follows them — e.g. 'add a new srf-module', 'generate an API client from a spec', 'create a Compose screen with the SRF theme'. Directly parallels the existing conventions docs.",
      "confidence": "high",
      "tags": ["Android", "New", "Android Studio", "Agent Skills"],
      "version": "Android 17",
      "official": false,
      "note": "Low-risk, high-leverage for the team; skills are just markdown checked into the repo.",
      "sources": [
        { "title": "What's new in Android developer tools", "url": "https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html" },
        { "title": "Build Android apps 3× faster using any agent", "url": "https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html" }
      ]
    },
    {
      "id": "devx-xcode-skills",
      "category": "devx",
      "title": "Xcode 27 coding-assistant skills for SRF (iOS)",
      "summary": "Encode the @Injected DI, LoadableObject, Sourcery & OpenAPI patterns as Xcode skills.",
      "details": "srf-apple already has an AGENTS.md describing its patterns (protocol-first @Injected DI, LoadableObject view models, Sourcery mocks, OpenAPI clients, no-GCD async/await rule). Capture those as Xcode 27 coding-assistant skills so the assistant scaffolds new services/screens the SRF way and helps adopt the new iOS 27 APIs above.",
      "confidence": "high",
      "tags": ["iOS", "New", "Xcode 27", "Coding assistant"],
      "version": "iOS 27",
      "official": false,
      "note": "Complements the existing AGENTS.md — same knowledge, surfaced inside the IDE.",
      "sources": [
        { "title": "MacRumors — Xcode & Foundation Models improvements", "url": "https://www.macrumors.com/2026/06/08/apple-unveils-xcode-and-models-improvements/" },
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" }
      ]
    },
    {
      "id": "devx-swift-64",
      "category": "devx",
      "title": "Swift 6.4 adoption across the iOS monorepo",
      "summary": "anyAppleOS availability shorthand, suppressible warnings, and async defer.",
      "details": "The iOS codebase mandates async/await and spans many SPM packages. Swift 6.4's anyAppleOS shorthand simplifies @available checks as targets are raised; @diagnose gives finer warning control across packages; and async defer tidies up cleanup in the actor/async services. Low-risk language-level wins as the toolchain updates.",
      "confidence": "medium",
      "tags": ["iOS", "Improve", "Swift 6.4"],
      "version": "Swift 6.4",
      "official": false,
      "note": "Needs the Swift 6.4 toolchain in CI; the repo is already on Swift 6.2 with strict concurrency, so the jump is small.",
      "sources": [
        { "title": "What's new in Swift (developer.apple.com)", "url": "https://developer.apple.com/swift/whats-new/" },
        { "title": "WWDC26 — What's new in Swift (Session 262)", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    }
  ]
};
