<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Aditya%20Routh&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=38&desc=3D%20Portfolio%20%E2%80%94%20AI%2FML%20Engineer&descAlignY=58&descAlign=50" width="100%"/>

<h1>✦ Aditya Routh — 3D Portfolio</h1>

<p align="center">
  <em>An immersive, production-grade 3D developer portfolio powered by Three.js, React Three Fiber, and Next.js 15 — blending AI, deep learning, and cutting-edge web graphics into one seamless experience.</em>
</p>

<p align="center">
  <a href="https://github.com/ADITYA-ROUTH/3d-portfolio/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="MIT License"/>
  </a>
  <a href="https://github.com/ADITYA-ROUTH/3d-portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/ADITYA-ROUTH/3d-portfolio?style=for-the-badge&logo=github&color=f59e0b&logoColor=white" alt="GitHub Stars"/>
  </a>
  <a href="https://github.com/ADITYA-ROUTH/3d-portfolio/commits/main">
    <img src="https://img.shields.io/github/last-commit/ADITYA-ROUTH/3d-portfolio?style=for-the-badge&logo=git&color=6366f1&logoColor=white" alt="Last Commit"/>
  </a>
  <a href="https://github.com/ADITYA-ROUTH/3d-portfolio/issues">
    <img src="https://img.shields.io/github/issues/ADITYA-ROUTH/3d-portfolio?style=for-the-badge&logo=github&color=ef4444&logoColor=white" alt="Issues"/>
  </a>
  <a href="https://adityarouth.vercel.app">
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Deploy"/>
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Three.js-0.183-049EF4?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js"/>
  </a>
</p>

<p align="center">
  <a href="https://adityarouth.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20View%20Live%20Demo-adityarouth.vercel.app-6366f1?style=for-the-badge" alt="Live Demo"/>
  </a>
</p>

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🏗 Project Structure](#-project-structure)
- [⚡ Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [🎨 Screenshots](#-screenshots)
- [🔌 API Reference](#-api-reference)
- [🚀 Deployment](#-deployment)
- [🔮 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 🌌 About The Project

**Aditya Routh's 3D Portfolio** is a fully production-ready, immersive developer portfolio that goes far beyond a typical resume website. Built with a carefully chosen modern tech stack, it features:

- A **real-time 3D background scene** rendered by Three.js and React Three Fiber with custom GLSL shaders, particle systems, and dynamic geometry
- A **3D Skills Galaxy** — an interactive star-map where every technology skill is a hoverable, glowing node in space
- **3D Project Nodes** — projects are displayed as interactive 3D panels in space, fetching live data
- A **built-in AI Chatbot** trained on the developer's resume, powered by the Vercel AI SDK
- **GSAP-orchestrated scroll animations** that trigger cinematic section reveals as the user scrolls
- **Theme switching**, ambient **audio player**, full **SEO optimization**, schema structured data, Open Graph tags, sitemap, and robots.txt

This project demonstrates advanced engineering skill across full-stack development, 3D computer graphics, AI integration, and production deployment.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌌 **3D Hero Scene** | Persistent WebGL background with shader-driven animation, particles, floating geometry, and camera rig |
| 🔮 **Skills Galaxy** | Interactive 3D star-map of technologies — hover to reveal skill labels |
| 📦 **3D Project Showcase** | Projects rendered as 3D panels with full detail panels and live GitHub links |
| 🤖 **AI Resume Chatbot** | Context-aware AI assistant trained on résumé data via OpenRouter API |
| 🎨 **Theme Switcher** | Dark / light / custom theme modes with `next-themes` |
| 🎵 **Ambient Audio Player** | Background music player with play/pause and volume control |
| 📱 **Fully Responsive** | Adaptive layouts across desktop, tablet, and mobile |
| ⚡ **Optimized Performance** | Dynamic imports, SSR-safe components, `@vercel/speed-insights` |
| 📊 **Analytics** | Integrated Vercel Analytics for visitor tracking |
| 🔍 **Full SEO** | Metadata API, Open Graph, Twitter cards, JSON-LD schema, sitemap, robots.txt |
| 📧 **Contact Form** | Working contact form with client-side validation |
| 🚀 **Production Deployed** | Live on Vercel with CI/CD |

---

## 🛠 Tech Stack

<div align="center">

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript 5 |
| **3D Graphics** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Animation** | GSAP 3, `@gsap/react`, Framer Motion 12 |
| **AI / SDK** | Vercel AI SDK (`ai`, `@ai-sdk/openai`), OpenRouter API |
| **Styling** | Tailwind CSS 4, `tailwind-merge`, `clsx` |
| **Fonts & Icons** | Google Fonts (Outfit, Geist Mono), Lucide React |
| **Theming** | `next-themes` |
| **Monitoring** | `@vercel/analytics`, `@vercel/speed-insights` |
| **Deployment** | Vercel |
| **Dev Tools** | ESLint 9, TypeScript strict mode |

</div>

---

## 🏗 Project Structure

```
3d-portfolio/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── chat/                 # AI Chatbot API route (Vercel AI SDK)
│   ├── layout.tsx                # Root layout — metadata, fonts, providers
│   ├── page.tsx                  # Home page — orchestrates all sections
│   ├── opengraph-image.tsx       # Dynamic OG image generator
│   ├── robots.ts                 # robots.txt generator
│   └── sitemap.ts                # sitemap.xml generator
│
├── components/                   # All React UI components
│   ├── canvas/                   # Three.js / R3F 3D Components
│   │   ├── CameraRig.tsx         # Mouse-reactive camera movement
│   │   ├── FloatingText.tsx      # 3D floating text labels
│   │   ├── Particles.tsx         # GPU particle system
│   │   ├── ProjectNode.tsx       # Individual 3D project card node
│   │   ├── ProjectsShowcase.tsx  # 3D canvas for projects section
│   │   ├── RotatingGeometry.tsx  # Decorative spinning 3D geometry
│   │   ├── ShaderBackground.tsx  # Custom GLSL shader background
│   │   └── SkillsGalaxy.tsx      # 3D interactive skills star-map
│   │
│   ├── AboutSection.tsx          # About / biography section
│   ├── AudioPlayer.tsx           # Ambient background music player
│   ├── BackgroundGlow.tsx        # CSS radial gradient glow overlay
│   ├── Chatbot.tsx               # AI chatbot UI with streaming responses
│   ├── ContactSection.tsx        # Contact form + social links
│   ├── Hero.tsx                  # Landing hero text overlay
│   ├── Navbar.tsx                # Fixed navigation bar
│   ├── ProjectPanel.tsx          # Detailed project side panel
│   ├── ProjectsSection.tsx       # Projects section wrapper
│   ├── SceneFallback.tsx         # Loading skeleton for 3D scenes
│   ├── SkillsModal.tsx           # Skills detail modal popup
│   ├── SkillsSection.tsx         # Skills section wrapper
│   ├── ThemeProvider.tsx         # next-themes context provider
│   └── ThemeToggle.tsx           # Theme switcher button
│
├── lib/                          # Data & utility layer
│   ├── github.ts                 # GitHub API utility functions
│   ├── projectsData.ts           # Static project data & types
│   └── resumeData.ts             # Resume data for AI chatbot context
│
├── scenes/
│   └── HeroScene.tsx             # Main Three.js hero canvas scene
│
├── styles/
│   └── globals.css               # Global styles & CSS tokens
│
├── public/                       # Static assets
│   ├── fonts/                    # Local font files
│   ├── models/                   # 3D model assets (if any)
│   └── manifest.json             # PWA manifest
│
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
└── package.json                  # Project dependencies
```

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.17.0` — [Download here](https://nodejs.org/)
- **npm** `>= 9` (comes with Node.js)
- A **GPU-capable browser** (Chrome or Firefox recommended for WebGL)

### Installation

1. **Fork** this repository, then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/3d-portfolio.git
cd 3d-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# OpenRouter API Key for the AI Chatbot feature
# Get your key at: https://openrouter.ai/keys
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

> ⚠️ **Important:** Never commit your `.env.local` file. It is already listed in `.gitignore`.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** WebGL features work best in desktop Chromium-based browsers. Ensure hardware acceleration is enabled in your browser settings.

Other available scripts:

```bash
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🎨 Screenshots

> 📸 Screenshots coming soon — the live demo is the best way to experience the 3D features.

| Section | Preview |
|---|---|
| **Hero — 3D Scene** | [View Live →](https://adityarouth.vercel.app) |
| **Projects Showcase** | [View Live →](https://adityarouth.vercel.app/#projects) |
| **Skills Galaxy** | [View Live →](https://adityarouth.vercel.app/#skills) |
| **AI Chatbot** | [View Live →](https://adityarouth.vercel.app) |

---

## 🔌 API Reference

### `POST /api/chat`

Powers the built-in AI resume chatbot using the Vercel AI SDK with streaming responses.

**Request Body:**

```json
{
  "messages": [
    { "role": "user", "content": "Tell me about your experience" }
  ]
}
```

**Response:** A Server-Sent Events (SSE) stream following the Vercel AI SDK text stream protocol.

**Model:** Configured via `OPENROUTER_API_KEY` — uses an OpenRouter-hosted model (e.g., `mistral-7b`).

**System Prompt:** Injected from `lib/resumeData.ts` — customize this file to train the chatbot on your own resume.

---

### Key Utilities

#### `lib/projectsData.ts`
Exports a typed `projectsData` array. Add or modify your projects here — the entire Projects 3D showcase reads from this file.

```typescript
export interface Project {
  id: number;
  name: string;
  tagline: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  // ...more fields
}
```

#### `lib/resumeData.ts`
A markdown string that forms the system prompt for the AI chatbot. Edit this file to update what the chatbot knows about you.

#### `lib/github.ts`
Utility for fetching live GitHub repository data to display alongside project cards.

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

### Deploy with Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ADITYA-ROUTH/3d-portfolio)

1. Click the button above or import the repository in your [Vercel Dashboard](https://vercel.com/dashboard).
2. Add your environment variable: `OPENROUTER_API_KEY`
3. Click **Deploy** — Vercel auto-detects Next.js and configures everything.

### Manual Build

```bash
npm run build
npm run start
```

**Live Project:** [https://adityarouth.vercel.app](https://adityarouth.vercel.app)

---

## 🔮 Future Improvements

Here is a roadmap of planned enhancements:

- [ ] 🎭 **3D Avatar** — Integrate a rigged, animated 3D character model in the hero section
- [ ] 🌐 **Multi-language support** — i18n support for English, Hindi, and Bengali
- [ ] 📱 **WebXR / AR Mode** — View the portfolio in augmented reality on mobile browsers
- [ ] 🗄️ **CMS Integration** — Connect to a headless CMS (Sanity/Notion) so projects update without code changes
- [ ] 🔐 **Admin Dashboard** — A private route to manage project data and resume content
- [ ] 🧪 **Test Coverage** — Add unit and E2E tests with Vitest and Playwright
- [ ] 🎨 **More Themes** — Add cyberpunk, minimal-light, and neon theme variants
- [ ] 📊 **GitHub Stats Section** — Live GitHub contribution graph integration
- [ ] ♿ **Accessibility (a11y)** — Full WCAG 2.1 AA compliance audit and fixes
- [ ] 🎮 **Easter Egg** — Hidden Konami code interaction in the 3D scene

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome and greatly appreciated!

Please read our **[Contributing Guidelines](CONTRIBUTING.md)** before submitting a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See the [open issues](https://github.com/ADITYA-ROUTH/3d-portfolio/issues) for a full list of proposed features and known bugs.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Aditya Routh** — AI/ML Engineer & Full-Stack Developer

<p>
  <a href="https://github.com/ADITYA-ROUTH">
    <img src="https://img.shields.io/badge/GitHub-ADITYA--ROUTH-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/aditya-routh-231ab92a0">
    <img src="https://img.shields.io/badge/LinkedIn-Aditya%20Routh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:premrouth00@gmail.com">
    <img src="https://img.shields.io/badge/Email-premrouth00%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://adityarouth.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-adityarouth.vercel.app-6366f1?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
</p>

**Project Link:** [https://github.com/ADITYA-ROUTH/3d-portfolio](https://github.com/ADITYA-ROUTH/3d-portfolio)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

<p>
  <sub>Built with ❤️ by <a href="https://adityarouth.vercel.app">Aditya Routh</a> — If you found this useful, please consider giving it a ⭐</sub>
</p>

</div>
