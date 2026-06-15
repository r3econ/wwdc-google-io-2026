window.GUIDE = window.GUIDE || { events: [], data: {} };
window.GUIDE.data["wwdc2026"] =
{
  "meta": {
    "title": "WWDC 2026",
    "tagline": "New in iOS 27 & Swift — a developer's field guide",
    "keynoteDate": "2026-06-08",
    "lastUpdated": "2026-06-15",
    "disclaimer": "Compiled from two rounds of multi-source research with adversarial fact-checking. Each item lists its sources and a confidence level. High = corroborated by Apple primary sources; Medium = tier-1 press, split verification, or uncertain framing. Refuted claims were excluded.",
    "sourceNote": "Apple primary sources preferred (developer.apple.com WWDC26 guides & session videos, Apple Newsroom, swift.org). Secondary sources are tier-1 press (MacRumors, TechCrunch, Engadget, InfoWorld). Still-open gaps: the full Xcode 27 'skills' catalog, the complete Swift 6.4 list, and several system apps (Maps, Health, CarPlay, Control Center)."
  },
  "categories": [
    { "id": "os",           "name": "iOS 27 — System & Design",      "icon": "📱", "blurb": "The OS itself: versioning and the Liquid Glass refresh." },
    { "id": "intelligence", "name": "Apple Intelligence (user-facing)","icon": "✨", "blurb": "Siri AI and the consumer features built on Apple's new Foundation Models." },
    { "id": "ai",           "name": "AI Frameworks (developer)",       "icon": "🧠", "blurb": "On-device Core AI and the multi-provider Foundation Models framework." },
    { "id": "swiftui",      "name": "SwiftUI",                          "icon": "🧩", "blurb": "Layout, containers, toolbars, state, documents, and AppKit interop." },
    { "id": "frameworks",   "name": "Frameworks & APIs",               "icon": "🛠️", "blurb": "App Intents, SwiftData, and WidgetKit." },
    { "id": "swift",        "name": "Swift Language",                   "icon": "🦅", "blurb": "Swift 6.3 (shipped March 2026) and the newly announced Swift 6.4." },
    { "id": "tooling",      "name": "Xcode & Tooling",                  "icon": "⚒️", "blurb": "Xcode 27 and the coding assistant." }
  ],
  "features": [
    {
      "id": "ios27-version",
      "category": "os",
      "title": "iOS 27",
      "summary": "The year-based naming continues (iOS 26 → iOS 27), free this fall, supporting iPhone 11 and newer.",
      "details": "WWDC 2026's keynote (June 8, 2026) introduced iOS 27 alongside macOS / iPadOS / watchOS / visionOS / tvOS 27. It ships as a free update this fall and supports iPhone 11 and newer plus the 2nd-gen iPhone SE — no devices dropped from the iOS 26 list.",
      "confidence": "high",
      "tags": ["iOS 27", "Release"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" },
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" },
        { "title": "TechCrunch — WWDC 2026 everything announced", "url": "https://techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/" }
      ]
    },
    {
      "id": "liquid-glass-slider",
      "category": "os",
      "title": "Liquid Glass, refined + transparency slider",
      "summary": "A layered Liquid Glass design plus a user-facing slider from fully opaque to completely clear.",
      "details": "iOS 27 refines the Liquid Glass design with a new layered approach (layers built even into icon artwork) and adds a user-adjustable transparency slider ranging from fully opaque to completely clear — letting users dial UI elements back or emphasize them. Widely read as a response to iOS 26's contrast/accessibility complaints.",
      "confidence": "high",
      "tags": ["iOS 27", "Design", "Liquid Glass", "Accessibility"],
      "version": "iOS 27",
      "official": false,
      "sources": [
        { "title": "MacRumors — Liquid Glass improvements", "url": "https://www.macrumors.com/2026/06/08/apple-announces-liquid-glass-improvements/" },
        { "title": "TechCrunch — WWDC 2026 recap", "url": "https://techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/" }
      ]
    },
    {
      "id": "siri-ai",
      "category": "intelligence",
      "title": "Siri AI",
      "summary": "Siri relaunches as 'Siri AI' — a conversational assistant with a dedicated app and iCloud-synced history.",
      "details": "Siri is relaunched as 'Siri AI,' a profoundly more personal, capable, and conversational assistant with a new dedicated app that syncs conversation history privately via iCloud across iPhone, iPad, Mac, Apple Watch, and Vision Pro. It adds personal-context understanding (e.g. surfacing a restaurant a friend messaged about, or a hotel confirmation buried in old email), onscreen awareness, broad world knowledge, and conversational follow-up — summoned by swiping down from the Dynamic Island.",
      "confidence": "high",
      "tags": ["iOS 27", "Siri", "Apple Intelligence"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom — Siri AI", "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" },
        { "title": "Apple Newsroom — next-gen Apple Intelligence", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" },
        { "title": "Apple Newsroom — AI in everyday experiences", "url": "https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/" }
      ]
    },
    {
      "id": "siri-ai-availability",
      "category": "intelligence",
      "title": "Siri AI availability & timeline",
      "summary": "In developer testing from June 8, 2026; public beta later in 2026 (English first), with regional limits.",
      "details": "New Siri AI features are available for developer testing starting June 8, 2026, and ship as a beta later in 2026 for users on a supported device set to English, with language support expanding over time. Secondary reporting notes it is initially unavailable in China and limited/unavailable on iOS/iPadOS/watchOS in the EU.",
      "confidence": "high",
      "tags": ["iOS 27", "Siri", "Availability"],
      "version": "iOS 27",
      "official": true,
      "note": "Consumer feature announced but not shipped at keynote; exact public-beta date and EU/China eligibility were not fully confirmed.",
      "sources": [
        { "title": "Apple Newsroom — Siri AI", "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" }
      ]
    },
    {
      "id": "afm-gemini",
      "category": "intelligence",
      "title": "Next-gen Apple Foundation Models (with Gemini)",
      "summary": "Apple Intelligence is powered by new Apple Foundation Models custom-built with Google's Gemini, on-device + Private Cloud Compute.",
      "details": "iOS 27 Apple Intelligence is powered by the next generation of Apple Foundation Models, custom-built in collaboration with Google and its Gemini models, running both on device and on servers via Private Cloud Compute. Per AppleInsider, the Gemini collaboration is training/distillation — no Gemini code or weights run at Apple Intelligence runtime.",
      "confidence": "high",
      "tags": ["iOS 27", "Apple Intelligence", "Gemini", "Private Cloud Compute"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom — AI in everyday experiences", "url": "https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/" }
      ]
    },
    {
      "id": "visual-intelligence-camera",
      "category": "intelligence",
      "title": "Visual Intelligence — Siri mode in Camera",
      "summary": "Point at a receipt to split a bill via Apple Cash; point at a barcode card to save it to Apple Wallet.",
      "details": "A new 'Siri mode' in the Camera app lets users get information and act on what's in front of them. Pointing at a receipt surfaces a 'split a bill' action paid via Apple Cash and identifies line items; pointing at any physical card with a barcode (or screenshotting a digital one) prompts saving it to Apple Wallet. The bill-split is reported as U.S.-only.",
      "confidence": "high",
      "tags": ["iOS 27", "Visual Intelligence", "Camera", "Wallet"],
      "version": "iOS 27",
      "official": true,
      "note": "Apple brands this 'Siri mode in the Camera app'; coverage sometimes conflates it with 'Visual Intelligence.'",
      "sources": [
        { "title": "Apple Newsroom — services & intelligence experiences", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-innovative-features-and-intelligence-experiences-across-services/" }
      ]
    },
    {
      "id": "photos-spatial-reframing",
      "category": "intelligence",
      "title": "Photos — Spatial Reframing",
      "summary": "Improve a photo's composition after it's been taken.",
      "details": "Photos adds Spatial Reframing, an Apple Intelligence feature that enables users to improve the composition of a photo after it's been captured.",
      "confidence": "high",
      "tags": ["iOS 27", "Photos", "Apple Intelligence"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom — next-gen Apple Intelligence", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" }
      ]
    },
    {
      "id": "messages-suggestions",
      "category": "intelligence",
      "title": "Messages — one-tap contextual suggestions",
      "summary": "Suggestions from conversation context, e.g. create a reminder or a note in one tap.",
      "details": "Messages offers one-tap suggestions based on the context of users' conversations — such as creating a reminder or a note directly from what's being discussed.",
      "confidence": "high",
      "tags": ["iOS 27", "Messages", "Apple Intelligence"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom — next-gen Apple Intelligence", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" }
      ]
    },
    {
      "id": "image-playground-photorealistic",
      "category": "intelligence",
      "title": "Image Playground — photorealistic generation",
      "summary": "Create high-quality images in a photorealistic style (via a Private Cloud Compute model).",
      "details": "Image Playground adds high-quality image creation in a photorealistic style. Secondary reporting notes it runs through a Private Cloud Compute model.",
      "confidence": "high",
      "tags": ["iOS 27", "Image Playground", "Apple Intelligence"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom — next-gen Apple Intelligence", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" }
      ]
    },
    {
      "id": "safari-notify-me",
      "category": "intelligence",
      "title": "Safari — 'Notify Me' page monitoring",
      "summary": "Monitor a web page for changes like restocks or price drops.",
      "details": "Safari adds a 'Notify Me' Apple Intelligence feature that monitors a web page for changes — for example a product restock or a price drop — and alerts the user.",
      "confidence": "high",
      "tags": ["iOS 27", "Safari", "Apple Intelligence"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Apple Newsroom — next-gen Apple Intelligence", "url": "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" }
      ]
    },
    {
      "id": "core-ai",
      "category": "ai",
      "title": "Core AI — on-device inference framework",
      "summary": "A new OS-level framework for Apple Silicon: memory-safe Swift API to load, specialize, and run models on-device.",
      "details": "Core AI is a new framework built directly into the OS and purpose-built for Apple Silicon. A modern, memory-safe Swift API (using non-escapable types; AIModel, InferenceFunction, NDArray) lets you load, specialize, and run AI models entirely on-device, with ahead-of-time compilation for fast load times — no server dependency and no token cost. It powers on-device Apple Intelligence.",
      "confidence": "high",
      "tags": ["AI", "Core AI", "On-device", "Swift API"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Core AI documentation", "url": "https://developer.apple.com/documentation/CoreAI" },
        { "title": "WWDC26 Session 324 — Meet Core AI", "url": "https://developer.apple.com/videos/play/wwdc2026/324/" },
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" }
      ]
    },
    {
      "id": "fm-providers",
      "category": "ai",
      "title": "Foundation Models — any provider + Dynamic Profiles",
      "summary": "A LanguageModel protocol lets you swap Apple's on-device models for Claude, Gemini, or others; Dynamic Profiles swap models/tools/instructions on the fly.",
      "details": "The Foundation Models framework now works with any language model conforming to a LanguageModel protocol — Apple Foundation Models, Claude, Gemini, or other providers (Anthropic and Google publishing Swift packages, swappable via SwiftPM with no downstream code changes). Dynamic Profiles let you swap models, tools, and instructions on the fly. Note: Claude/Gemini run cloud-side, not on-device.",
      "confidence": "high",
      "tags": ["AI", "Foundation Models", "Claude", "Gemini"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 241 — What's new in Foundation Models", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" }
      ]
    },
    {
      "id": "fm-multimodal",
      "category": "ai",
      "title": "Foundation Models — multimodal + on-device Vision",
      "summary": "Pass images alongside text; the on-device model gains Vision, plus callable OCR/barcode tools.",
      "details": "Multimodal prompts let you pass images alongside text for visual reasoning. The on-device model gains Vision capabilities, accepting image attachments of any size/aspect ratio (UIImage, NSImage, CGImage, Core Image types, CoreVideo pixel buffers, file URLs) via an Attachment API inside session.respond. Vision framework tools like OCR (OCRTool) and a barcode reader (BarcodeReaderTool) are available for the model to call directly, all on-device.",
      "confidence": "high",
      "tags": ["AI", "Foundation Models", "Multimodal", "Vision"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 241 — What's new in Foundation Models", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" }
      ]
    },
    {
      "id": "fm-pcc",
      "category": "ai",
      "title": "Foundation Models — Private Cloud Compute model + reasoning",
      "summary": "A PrivateCloudComputeLanguageModel with a 32K-token context window and .light / .deep reasoning levels.",
      "details": "Foundation Models adds a Private Cloud Compute language model (PrivateCloudComputeLanguageModel) with a 32,000-token context window and configurable reasoning levels (.light, .deep) set via a contextOptions parameter on session.respond.",
      "confidence": "high",
      "tags": ["AI", "Foundation Models", "Private Cloud Compute", "Reasoning"],
      "version": "iOS 27",
      "official": true,
      "note": "One verifier dissented (2-1); a possible third reasoning case (.moderate) was hinted but not confirmed in the session transcript.",
      "sources": [
        { "title": "WWDC26 Session 241 — What's new in Foundation Models", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" }
      ]
    },
    {
      "id": "fm-opensource",
      "category": "ai",
      "title": "Foundation Models — going open source",
      "summary": "The core framework plus a 'foundation-models-utilities' package open-sourced; landing later this summer.",
      "details": "Apple announced the Foundation Models framework is going open source — the core framework plus a new 'Foundation Models framework utilities' package (updated between OS releases with emerging/experimental building blocks like the Skills API and history-management modifiers) and additional packages. Release was timed for 'later this summer'; the apple/foundation-models-utilities repo (Apache-2.0) already exists.",
      "confidence": "high",
      "tags": ["AI", "Foundation Models", "Open source"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 241 — What's new in Foundation Models", "url": "https://developer.apple.com/videos/play/wwdc2026/241/" },
        { "title": "Platforms State of the Union recap (MacRumors)", "url": "https://www.macrumors.com/2026/06/09/apple-outlines-major-ai-and-developer-tool-updates/" }
      ]
    },
    {
      "id": "swiftui-toolbar",
      "category": "swiftui",
      "title": "Toolbar customization",
      "summary": "visibilityPriority, toolbarOverflowMenu, topBarPinnedTrailing, and toolbarMinimizeBehavior (collapse on scroll).",
      "details": "SwiftUI gains finer toolbar control: visibilityPriority, toolbarOverflowMenu, topBarPinnedTrailing, and toolbarMinimizeBehavior, which collapses the navigation bar on scroll.",
      "confidence": "high",
      "tags": ["SwiftUI", "Toolbar"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "WWDC26 Session 269 — What's new in SwiftUI", "url": "https://developer.apple.com/videos/play/wwdc2026/269/" }
      ]
    },
    {
      "id": "swiftui-reorderable",
      "category": "swiftui",
      "title": "Reorderable containers & universal swipe actions",
      "summary": ".reorderable() / .reorderContainer and swipe actions now work in any container, not just List.",
      "details": "Drag-to-reorder via .reorderable() / .reorderContainer, and swipe actions, now work in any container (List, LazyVGrid, sections) — no longer List-only.",
      "confidence": "high",
      "tags": ["SwiftUI", "Containers", "Gestures"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "WWDC26 Session 269 — What's new in SwiftUI", "url": "https://developer.apple.com/videos/play/wwdc2026/269/" }
      ]
    },
    {
      "id": "swiftui-fast-layout",
      "category": "swiftui",
      "title": "Layouts resize up to ~2× faster",
      "summary": "Short-circuited nested-stack measurement makes layout resizing up to twice as fast.",
      "details": "SwiftUI short-circuits nested-stack measurement so layouts now resize up to twice as fast — confirmed verbatim in the Platforms State of the Union.",
      "confidence": "high",
      "tags": ["SwiftUI", "Performance"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "Platforms State of the Union recap (MacRumors)", "url": "https://www.macrumors.com/2026/06/09/apple-outlines-major-ai-and-developer-tool-updates/" },
        { "title": "WWDC26 Session 269 — What's new in SwiftUI", "url": "https://developer.apple.com/videos/play/wwdc2026/269/" }
      ]
    },
    {
      "id": "swiftui-lazy-state",
      "category": "swiftui",
      "title": "Lazy @State initialization",
      "summary": "@State is now a macro that initializes once per view lifetime.",
      "details": "@State becomes a macro whose value initializes lazily — once per view lifetime — avoiding repeated initializer work on view re-creation.",
      "confidence": "high",
      "tags": ["SwiftUI", "State"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "WWDC26 Session 269 — What's new in SwiftUI", "url": "https://developer.apple.com/videos/play/wwdc2026/269/" }
      ]
    },
    {
      "id": "swiftui-documents",
      "category": "swiftui",
      "title": "High-performance document infrastructure",
      "summary": "Direct disk access, first-class URLs, snapshot diffing (WritableDocument/ReadableDocument), lazy subviews + prefetch.",
      "details": "New document infrastructure with direct disk access, first-class URL access, and snapshot-based diffing via WritableDocument / ReadableDocument, plus lazy-loaded subviews with content prefetching.",
      "confidence": "high",
      "tags": ["SwiftUI", "Documents", "Performance"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "Platforms State of the Union recap (MacRumors)", "url": "https://www.macrumors.com/2026/06/09/apple-outlines-major-ai-and-developer-tool-updates/" }
      ]
    },
    {
      "id": "swiftui-nsgesture",
      "category": "swiftui",
      "title": "NSGestureRecognizerRepresentable",
      "summary": "Wrap AppKit NSGestureRecognizer subclasses for direct use in SwiftUI via the .gesture modifier.",
      "details": "A SwiftUI protocol that wraps NSGestureRecognizer subclasses for direct use in SwiftUI views via makeNSGestureRecognizer(context:) and handleNSGestureRecognizerAction(_:context:), added with the .gesture modifier — the AppKit analogue to UIGestureRecognizerRepresentable.",
      "confidence": "medium",
      "tags": ["SwiftUI", "AppKit", "Gestures"],
      "version": "iOS 27",
      "official": true,
      "note": "Demonstrated at WWDC26, but the API may predate 2026 (the UIKit analogue shipped in 2024) — treat 'new in 2026' framing cautiously.",
      "sources": [
        { "title": "WWDC26 Session 272 — Use SwiftUI with AppKit and UIKit", "url": "https://developer.apple.com/videos/play/wwdc2026/272/" },
        { "title": "NSGestureRecognizerRepresentable docs", "url": "https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable" }
      ]
    },
    {
      "id": "appintents-schemas",
      "category": "frameworks",
      "title": "App Intents — schemas, View Annotations & testing",
      "summary": "Entity/intent schemas feed Spotlight's semantic index; View Annotations map views to entities; a new testing framework.",
      "details": "App Intents adds: entity schemas that contribute app content to Spotlight's semantic index (via .indexAppEntities on CSSearchableIndex); intent schemas for natural-language actions with no predefined phrases; a View Annotations API (.appEntityIdentifier) mapping views to entities so people can reference them conversationally; and an App Intents Testing framework that validates Siri/Shortcuts/Spotlight through real system pathways without UI automation.",
      "confidence": "high",
      "tags": ["App Intents", "Spotlight", "Siri", "Testing"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 343 — App Intents", "url": "https://developer.apple.com/videos/play/wwdc2026/343/" },
        { "title": "What's new in iOS 27 (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/ios/" }
      ]
    },
    {
      "id": "appintents-entitycollection",
      "category": "frameworks",
      "title": "App Intents — EntityCollection",
      "summary": "Pass arrays of entity identifiers (not resolved entities) to skip expensive resolution at scale.",
      "details": "EntityCollection<T> stores an array of entity identifiers instead of fully resolved entities, so the system passes just the identifiers to the intent's perform method — accessed via .identifiers. Apple's demo: tagging 1000 photos becomes 'almost instant.'",
      "confidence": "high",
      "tags": ["App Intents", "Performance"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 345 — Dive deeper into App Intents", "url": "https://developer.apple.com/videos/play/wwdc2026/345/" }
      ]
    },
    {
      "id": "appintents-longrunning",
      "category": "frameworks",
      "title": "App Intents — LongRunningIntent",
      "summary": "Run intents beyond the 30s limit with managed background lifecycle, auto Live Activity progress, and background GPU.",
      "details": "A LongRunningIntent protocol lets an intent run beyond the 30-second limit, manages the app's background task lifecycle, shows progress automatically as a Live Activity, and supports background GPU access on supported devices (via a GPU entitlement).",
      "confidence": "high",
      "tags": ["App Intents", "Background", "Live Activity"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 345 — Dive deeper into App Intents", "url": "https://developer.apple.com/videos/play/wwdc2026/345/" }
      ]
    },
    {
      "id": "appintents-syncable",
      "category": "frameworks",
      "title": "App Intents — SyncableEntity",
      "summary": "Declare entity IDs stable across devices so Siri conversations continue across devices.",
      "details": "A SyncableEntity protocol declares entity IDs as stable across devices, enabling Siri conversations to continue across devices with entity references. SyncableEntityIdentifier<Local, Stable> pairs a local and a stable ID when IDs aren't already stable; if an entity's id is already stable (e.g. a server UUID or CloudKit record ID), conform without the wrapper.",
      "confidence": "high",
      "tags": ["App Intents", "Siri", "Sync"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 345 — Dive deeper into App Intents", "url": "https://developer.apple.com/videos/play/wwdc2026/345/" }
      ]
    },
    {
      "id": "swiftdata-sectionby",
      "category": "frameworks",
      "title": "SwiftData — sectionBy: in @Query",
      "summary": "Group fetched results by a KeyPath; access grouped sections via the underscore-prefixed property.",
      "details": "@Query gains a sectionBy: parameter that groups fetched results by a KeyPath — e.g. @Query(sort: \\Trip.startDate, sectionBy: \\.destination) var trips: [Trip]. Sections are read via the underscore-prefixed property (_trips.sections), used with ForEach.",
      "confidence": "high",
      "tags": ["SwiftData", "Query"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 274 — What's new in SwiftData", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "swiftdata-codable",
      "category": "frameworks",
      "title": "SwiftData — @Attribute(.codable)",
      "summary": "Persist custom/third-party Codable types that aren't @Model by delegating serialization.",
      "details": "@Attribute(.codable) persists custom or third-party Codable types that aren't @Model, by delegating serialization to the type (e.g. @Attribute(.codable) var mapItemIdentifier: MKMapItem.Identifier?). Their contents are opaque to SwiftData — unusable in predicates or sorting — and schema-shape changes don't trigger automatic migration, so conformance must stay forward/backward-compatible.",
      "confidence": "high",
      "tags": ["SwiftData", "Codable", "Persistence"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 274 — What's new in SwiftData", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "swiftdata-resultsobserver",
      "category": "frameworks",
      "title": "SwiftData — ResultsObserver",
      "summary": "Fetch and observe the store outside SwiftUI using Swift Observation (a @Query-like API anywhere).",
      "details": "ResultsObserver is an observable class for non-SwiftUI contexts that fetches data and observes the store for changes using Swift Observation — like @Query, but usable anywhere in your app — via withContinuousObservation(options: [.didSet]).",
      "confidence": "high",
      "tags": ["SwiftData", "Observation"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 274 — What's new in SwiftData", "url": "https://developer.apple.com/videos/play/wwdc2026/274/" }
      ]
    },
    {
      "id": "widgetkit-extralarge",
      "category": "frameworks",
      "title": "WidgetKit — systemExtraLargePortrait",
      "summary": "The vertical extra-large widget family (from visionOS 26) comes to iOS, iPadOS & macOS 27.",
      "details": "WidgetKit adds the systemExtraLargePortrait family — first introduced in visionOS 26 — now available on iOS, iPadOS, and macOS 27 (added via supportedFamilies).",
      "confidence": "high",
      "tags": ["WidgetKit", "Widgets"],
      "version": "iOS 27",
      "official": true,
      "sources": [
        { "title": "WWDC26 Session 277 — WidgetKit foundations", "url": "https://developer.apple.com/videos/play/wwdc2026/277/" }
      ]
    },
    {
      "id": "swift-module-selectors",
      "category": "swift",
      "title": "Module selectors (Swift 6.3)",
      "summary": "Double-colon (::) syntax to disambiguate names by module, e.g. Rocket::SaturnV(), Swift::Task{}.",
      "details": "Swift 6.3 adds module selectors using double-colon (::) syntax to disambiguate names by module — for example Rocket::SaturnV() or Swift::Task{}.",
      "confidence": "high",
      "tags": ["Swift 6.3", "Language"],
      "version": "Swift 6.3",
      "official": true,
      "note": "Swift 6.3 shipped March 24, 2026 — ~3 months before WWDC. It was recapped, not first introduced, at the keynote.",
      "sources": [
        { "title": "Swift 6.3 released (swift.org)", "url": "https://www.swift.org/blog/swift-6.3-released/" },
        { "title": "WWDC26 Session 262 — What's new in Swift", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "swift-c-attribute",
      "category": "swift",
      "title": "@c attribute for C interop (Swift 6.3)",
      "summary": "Expose Swift functions and enums to C, with custom C names; combinable with @implementation.",
      "details": "Swift 6.3 adds a @c attribute that exposes Swift functions and enums to C code (with custom C declaration names, and combinable with @implementation to implement C-header-declared functions), formalizing the older @_cdecl. SE-0495 'C Compatible Functions and Enums' is implemented in 6.3.",
      "confidence": "high",
      "tags": ["Swift 6.3", "C interop"],
      "version": "Swift 6.3",
      "official": true,
      "note": "A competing claim that @c is a Swift 6.4 feature was refuted (0-3) — it is 6.3.",
      "sources": [
        { "title": "SE-0495 — C Compatible Functions and Enums", "url": "https://github.com/swiftlang/swift-evolution/blob/main/proposals/0495-cdecl.md" },
        { "title": "Swift 6.3 released (swift.org)", "url": "https://www.swift.org/blog/swift-6.3-released/" }
      ]
    },
    {
      "id": "swift-android-sdk",
      "category": "swift",
      "title": "Official Swift SDK for Android (Swift 6.3)",
      "summary": "Build native ARM Android programs in Swift, plus Swift Java / JNI interop for Kotlin & Java.",
      "details": "Swift 6.3 ships the first official Swift SDK for Android — build native ARM Android programs in Swift — plus Swift Java / Swift Java JNI Core for Kotlin/Java interop via JNI.",
      "confidence": "high",
      "tags": ["Swift 6.3", "Android", "Cross-platform"],
      "version": "Swift 6.3",
      "official": true,
      "sources": [
        { "title": "Swift SDK for Android — getting started", "url": "https://www.swift.org/documentation/articles/swift-sdk-for-android-getting-started.html" },
        { "title": "InfoWorld — Swift 6.3 C interop & Android SDK", "url": "https://www.infoworld.com/article/4150248/swift-6-3-boosts-c-interoperability-android-sdk.html" }
      ]
    },
    {
      "id": "swift-build-tooling",
      "category": "swift",
      "title": "Swift Build in SwiftPM + embedded out of beta (Swift 6.3)",
      "summary": "Preview of Swift Build integrated into SwiftPM; embedded Swift exits experimental status.",
      "details": "Swift 6.3 brings cross-platform build tooling improvements — a preview of Swift Build integrated into SwiftPM — and graduates embedded Swift environment support out of experimental status.",
      "confidence": "high",
      "tags": ["Swift 6.3", "SwiftPM", "Embedded"],
      "version": "Swift 6.3",
      "official": true,
      "sources": [
        { "title": "Swift 6.3 released (swift.org)", "url": "https://www.swift.org/blog/swift-6.3-released/" },
        { "title": "WWDC26 Session 262 — What's new in Swift", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "swift64-anyappleos",
      "category": "swift",
      "title": "anyAppleOS availability shorthand (Swift 6.4)",
      "summary": "One token covering iOS/macOS/watchOS/tvOS/visionOS in @available and #if.",
      "details": "Swift 6.4 adds an anyAppleOS availability shorthand covering iOS, macOS, watchOS, tvOS and visionOS at once in @available and #if checks.",
      "confidence": "high",
      "tags": ["Swift 6.4", "Availability"],
      "version": "Swift 6.4",
      "official": true,
      "sources": [
        { "title": "What's new in Swift (developer.apple.com)", "url": "https://developer.apple.com/swift/whats-new/" },
        { "title": "WWDC26 Session 262 — What's new in Swift", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "swift64-suppressible-warnings",
      "category": "swift",
      "title": "Suppressible warnings via @diagnose (Swift 6.4)",
      "summary": "Finer-grained control to suppress, enable, or promote warnings to errors.",
      "details": "Swift 6.4 adds a @diagnose attribute giving finer-grained control over compiler diagnostics — suppress, enable, or promote individual warnings to errors.",
      "confidence": "high",
      "tags": ["Swift 6.4", "Diagnostics"],
      "version": "Swift 6.4",
      "official": true,
      "sources": [
        { "title": "What's new in Swift (developer.apple.com)", "url": "https://developer.apple.com/swift/whats-new/" },
        { "title": "WWDC26 Session 262 — What's new in Swift", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "swift64-async-defer",
      "category": "swift",
      "title": "async in defer (Swift 6.4)",
      "summary": "Run async cleanup in defer, guaranteed whether a function returns or throws.",
      "details": "Swift 6.4 allows async work inside defer statements, so asynchronous cleanup is guaranteed whether a function returns normally or throws.",
      "confidence": "high",
      "tags": ["Swift 6.4", "Concurrency"],
      "version": "Swift 6.4",
      "official": true,
      "sources": [
        { "title": "What's new in Swift (developer.apple.com)", "url": "https://developer.apple.com/swift/whats-new/" },
        { "title": "WWDC26 Session 262 — What's new in Swift", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "swift64-diagnostics",
      "category": "swift",
      "title": "Better type-checker diagnostics (Swift 6.4)",
      "summary": "Improved diagnostics catch more concurrency mistakes with clearer guidance.",
      "details": "Swift 6.4 improves type-checker diagnostics to catch more concurrency mistakes and offer clearer guidance.",
      "confidence": "high",
      "tags": ["Swift 6.4", "Concurrency", "Diagnostics"],
      "version": "Swift 6.4",
      "official": true,
      "sources": [
        { "title": "What's new in Swift (developer.apple.com)", "url": "https://developer.apple.com/swift/whats-new/" },
        { "title": "WWDC26 Session 262 — What's new in Swift", "url": "https://developer.apple.com/videos/play/wwdc2026/262/" }
      ]
    },
    {
      "id": "xcode27-skills",
      "category": "tooling",
      "title": "Xcode 27 — coding-assistant skills",
      "summary": "A set of 'skills' (e.g. swiftui-specialist, swiftui-whats-new-27) guide adoption of new APIs, plus agentic improvements.",
      "details": "Xcode 27 adds a set of coding-assistant 'skills' (for example swiftui-specialist and swiftui-whats-new-27) that guide adoption of new SwiftUI APIs and conventions, alongside broader agentic/AI improvements.",
      "confidence": "high",
      "tags": ["Xcode 27", "Coding assistant", "AI"],
      "version": "iOS 27",
      "official": true,
      "note": "The full skills catalog (reportedly ~7 skills) and complete Xcode 27 feature set are still an open research gap. A claim that Xcode 27 is '30% smaller, Apple-silicon-only, with a Device Hub replacing the Simulator' was refuted (1-2).",
      "sources": [
        { "title": "What's new in SwiftUI (developer guide)", "url": "https://developer.apple.com/wwdc26/guides/swiftui/" },
        { "title": "MacRumors — Xcode & Foundation Models improvements", "url": "https://www.macrumors.com/2026/06/08/apple-unveils-xcode-and-models-improvements/" }
      ]
    }
  ]
}
;
