window.GUIDE = window.GUIDE || { events: [], data: {} };
window.GUIDE.data["googleio2026"] =
{
  "meta": {
    "title": "Google I/O 2026",
    "tagline": "New in Android 17, Gemini & the agentic era — a developer's field guide",
    "keynoteDate": "2026-05-19",
    "lastUpdated": "2026-06-15",
    "disclaimer": "Compiled from multi-source research with adversarial fact-checking — all 25 verified claims were backed by primary Google sources (3-0 votes, none refuted). Performance and benchmark figures are Google's own, reported as announced, not independently verified.",
    "sourceNote": "Primary sources only (blog.google, io.google, android-developers.googleblog.com, developer.android.com, developers.googleblog.com, deepmind.google). Still-open gaps: Wear OS, Android XR, ChromeOS/Web, Android TV & Auto, Jetpack Compose / Kotlin / Flutter specifics, and the Imagen/Veo/Lyria & Project Astra media-model story."
  },
  "categories": [
    { "id": "models",   "name": "Gemini Models",     "icon": "🧠", "blurb": "The Gemini 3.5 series, multimodal Gemini Omni, and on-device Nano 4." },
    { "id": "agents",   "name": "Agentic AI",         "icon": "✨", "blurb": "Cloud agents, the redesigned Gemini app, and agentic Search." },
    { "id": "android",  "name": "Android 17",          "icon": "🤖", "blurb": "The new OS (API 37): performance, large-screen/desktop, privacy." },
    { "id": "devtools", "name": "Developer Tools",      "icon": "⚒️", "blurb": "Android Studio and the Antigravity agent platform." }
  ],
  "features": [
    {
      "id": "gemini-3-5",
      "category": "models",
      "title": "Gemini 3.5 series",
      "summary": "A new agentic model series — 3.5 Flash generally available at I/O; 3.5 Pro rolling out June 2026.",
      "details": "Gemini 3.5 is a new model series 'combining frontier intelligence with action,' framed as the shift from assistive AI to agents. Gemini 3.5 Flash is generally available via Google Antigravity, the Gemini API in Google AI Studio, and Android Studio — pitched as 'comparable to the best models' and '4× faster than other frontier models' on output tokens/sec. Pichai said 3.5 Pro was already in internal use with a rollout planned for the following month (June 2026).",
      "confidence": "high",
      "tags": ["Gemini", "AI", "Agents"],
      "version": "Gemini 3.5",
      "official": true,
      "note": "3.5 Pro was only in internal testing at I/O (June rollout planned); benchmark/speed figures are Google's own.",
      "sources": [
        { "title": "Google blog — Gemini 3.5", "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/" },
        { "title": "Sundar Pichai — I/O 2026 keynote", "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/" },
        { "title": "Developer keynote — all the news", "url": "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/" }
      ]
    },
    {
      "id": "gemini-3-5-default",
      "category": "models",
      "title": "Gemini 3.5 Flash — the new default",
      "summary": "3.5 Flash becomes the default model for the Gemini app and AI Mode in Search, globally.",
      "details": "Gemini 3.5 Flash became the default model for the Gemini app and AI Mode in Search globally — Google's 'strongest agentic and coding model yet,' citing benchmarks like Terminal-Bench 2.1 76.2%, GDPval-AA 1656 Elo, and MCP Atlas 83.6%. A US-only optional 'Thinking with 3 Pro' toggle layers on top of the Flash default.",
      "confidence": "high",
      "tags": ["Gemini", "Search", "Coding"],
      "version": "Gemini 3.5",
      "official": true,
      "sources": [
        { "title": "Google blog — Gemini 3.5", "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/" },
        { "title": "Search at I/O 2026", "url": "https://blog.google/products-and-platforms/products/search/search-io-2026/" }
      ]
    },
    {
      "id": "gemini-omni",
      "category": "models",
      "title": "Gemini Omni (ships as Omni Flash)",
      "summary": "A multimodal 'create anything from any input' model — starting with video, with conversational editing.",
      "details": "Gemini Omni creates anything from any input — starting with video — accepting image/audio/video/text and generating high-quality video with natural conversational editing that keeps characters consistent, physics plausible, and the scene aware of what came before. Output carries an imperceptible SynthID watermark. It ships as 'Gemini Omni Flash,' available same-day in the Gemini app, Google Flow, YouTube Shorts Remix, and the YouTube Create app (18+).",
      "confidence": "high",
      "tags": ["Gemini", "Multimodal", "Video", "SynthID"],
      "version": "Gemini Omni",
      "official": true,
      "sources": [
        { "title": "DeepMind — Gemini Omni", "url": "https://deepmind.google/models/gemini-omni/" },
        { "title": "Google blog — Gemini Omni videos", "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/" },
        { "title": "Sundar Pichai — I/O 2026 keynote", "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/" }
      ]
    },
    {
      "id": "gemini-nano-4",
      "category": "models",
      "title": "Gemini Nano 4 (on-device, preview)",
      "summary": "Android's next on-device model via AICore, in preview, for tasks like extraction and summarization.",
      "details": "Google previewed Gemini Nano 4, the latest on-device AI model for Android (via AICore), for tasks like data extraction and summarization. Reported as available in early access through the AICore Developer Preview.",
      "confidence": "high",
      "tags": ["Gemini Nano", "On-device", "AICore"],
      "version": "Android 17",
      "official": true,
      "sources": [
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "gemini-spark",
      "category": "agents",
      "title": "Gemini Spark — 24/7 cloud agent",
      "summary": "A personal AI agent that runs in the background on Google Cloud VMs, integrated with Workspace and MCP.",
      "details": "Gemini Spark is a 24/7 cloud-based personal AI agent running on Gemini 3.5 and the Antigravity harness on dedicated Google Cloud VMs. It's deeply integrated with Workspace tools (Gmail, Docs, Slides) and, in the coming weeks, third-party tools via MCP. Rollout began to trusted testers that week, with a beta for US Google AI Ultra subscribers the following week.",
      "confidence": "high",
      "tags": ["Agents", "Gemini", "Workspace", "MCP"],
      "version": null,
      "official": true,
      "sources": [
        { "title": "Sundar Pichai — I/O 2026 keynote", "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/" },
        { "title": "The next evolution of the Gemini app", "url": "https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/" }
      ]
    },
    {
      "id": "gemini-app-redesign",
      "category": "agents",
      "title": "Gemini app — 'Neural Expressive' redesign",
      "summary": "A ground-up redesign with fluid animations, integrated Gemini Live, and a 'Daily Brief' agent.",
      "details": "The Gemini app was fully redesigned with a new 'Neural Expressive' design language — fluid animations, vibrant colors, new typography, and haptic feedback — rolling out globally across web, Android, and iOS. Gemini Live is integrated directly into the app, and a new 'Daily Brief' agent gives a personalized morning summary.",
      "confidence": "high",
      "tags": ["Gemini app", "Design", "Gemini Live"],
      "version": null,
      "official": true,
      "note": "'Neural Expressive' is the Gemini app's design language — not a confirmed Android-system Material 3 update.",
      "sources": [
        { "title": "The next evolution of the Gemini app", "url": "https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/" }
      ]
    },
    {
      "id": "search-information-agents",
      "category": "agents",
      "title": "Information Agents in Search",
      "summary": "Background agents that monitor web content and real-time data 24/7 for changes you care about.",
      "details": "Information Agents in Search operate in the background, 24/7, monitoring blogs, news sites, and social posts plus fresh data (real-time finance, shopping, sports) for changes related to your specific question. They launch first for Google AI Pro & Ultra subscribers in summer 2026.",
      "confidence": "high",
      "tags": ["Search", "Agents"],
      "version": null,
      "official": true,
      "sources": [
        { "title": "Search at I/O 2026", "url": "https://blog.google/products-and-platforms/products/search/search-io-2026/" }
      ]
    },
    {
      "id": "android-17",
      "category": "android",
      "title": "Android 17",
      "summary": "The new OS: performance, new media & camera capabilities, desktop/large-screen, and agentic automation.",
      "details": "Android 17 brings performance improvements (lock-free MessageQueue, generational GC in ART), new media and camera capabilities (CodecDB chipset-specific encoding, Media3 AI Effects, ExoPlayer Scrubbing Mode, a CameraXViewfinder Composable, 14-bit RAW capture), new functionality for desktop and large-screened apps (the Googlebook laptop form factor, a Desktop Android Emulator), and agentic automation to help users get more done.",
      "confidence": "high",
      "tags": ["Android 17", "Performance", "Media", "Large screen"],
      "version": "Android 17",
      "official": true,
      "sources": [
        { "title": "io.google — Platforms keynote", "url": "https://io.google/2026/explore/pa-keynote-5" },
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" }
      ]
    },
    {
      "id": "android-17-api37",
      "category": "android",
      "title": "Android 17 — API 37 behaviors & privacy",
      "summary": "Mandatory large-screen resizability, certificate transparency by default, SMS OTP protection, and more.",
      "details": "Android 17 targets API level 37 and adds mandatory large-screen resizability and certificate transparency by default, plus a contact picker, an eyedropper API, background audio hardening, and SMS OTP protection (SMS messages aren't available to apps until three hours after receipt).",
      "confidence": "high",
      "tags": ["Android 17", "API 37", "Privacy", "Security"],
      "version": "Android 17",
      "official": true,
      "sources": [
        { "title": "17 things for Android developers (Android Developers Blog)", "url": "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html" },
        { "title": "Android 17 behavior changes", "url": "https://developer.android.com/about/versions/17/behavior-changes-17" }
      ]
    },
    {
      "id": "antigravity-2",
      "category": "devtools",
      "title": "Antigravity 2.0 + CLI + SDK",
      "summary": "An upgraded agent-first dev platform that orchestrates multiple agents, now with a CLI and a deployable SDK.",
      "details": "Antigravity 2.0 is an upgraded agent-first development platform — a standalone desktop app that can orchestrate multiple agents to execute tasks in parallel — alongside a new Antigravity CLI and an Antigravity SDK that lets you fully customize an agent and deploy it on your own infrastructure.",
      "confidence": "high",
      "tags": ["Antigravity", "Agents", "CLI", "SDK"],
      "version": null,
      "official": true,
      "sources": [
        { "title": "Developer keynote — all the news", "url": "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/" },
        { "title": "I/O 2026 developer highlights", "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/" }
      ]
    },
    {
      "id": "android-studio-models",
      "category": "devtools",
      "title": "Android Studio — multi-provider models",
      "summary": "Agent Mode supports Gemini, Claude, and GPT (plus local Gemma 4); AI Pro/Ultra unlocks dedicated capacity.",
      "details": "Android Studio's Agent Mode now lets you choose among top remote models from Google, Anthropic, and OpenAI — or run locally with Gemma 4, Google's most capable local model. Developers on a Google AI Pro or Ultra plan get dedicated capacity and higher rate limits for Gemini in Android Studio, auto-detected on login.",
      "confidence": "high",
      "tags": ["Android Studio", "Gemini", "Claude", "Gemma 4"],
      "version": null,
      "official": true,
      "sources": [
        { "title": "What's new in Android developer tools", "url": "https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html" },
        { "title": "Gemma 4 — local agentic intelligence", "url": "https://android-developers.googleblog.com/2026/04/gemma-4-new-standard-for-local-agentic-intelligence.html" }
      ]
    },
    {
      "id": "android-studio-agent-skills",
      "category": "devtools",
      "title": "Android Studio — Agent Skills",
      "summary": "Modular markdown (SKILL.md) instruction sets for tasks like XML→Compose migration, Navigation 3, and Firebase.",
      "details": "Agent Skills are modular, markdown-based (SKILL.md) instruction sets that ground LLMs in specialized workflows. Official skills cover XML-to-Compose migration, edge-to-edge layouts, Navigation 3, Android XR (a Display Glasses app via Jetpack Compose Glimmer), and Firebase — letting you enable Auth and Firestore directly within Agent Mode.",
      "confidence": "high",
      "tags": ["Android Studio", "Agent Skills", "Compose", "Firebase"],
      "version": null,
      "official": true,
      "sources": [
        { "title": "What's new in Android developer tools", "url": "https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html" },
        { "title": "Build Android apps 3× faster using any agent", "url": "https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html" }
      ]
    }
  ]
}
;
