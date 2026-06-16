# 📊 FeedbackFlow — CSAT Campaign Builder & Simulator

Official Project Documentation & Technical Overview

FeedbackFlow is an interactive, production-ready Customer Satisfaction (CSAT) Campaign Builder. It enables product management and growth engineering cohorts to visually craft, customize, and live-preview modern micro-surveys natively optimized for mobile viewports.

## 🔗 Live Demo URL
👉 [https://csat-campaign-builder-y166.vercel.app/](https://csat-campaign-builder-y166.vercel.app/)

---

## 🛠️ Tech Stack

* **Core Library:** React 18
* **Build Toolchain:** Vite (with highly optimized Rollup compilation setups)
* **Styling Engine:** Tailwind CSS (Utility-first frameworks for completely fluid layouts)
* **State Management:** React Context API (Providing synchronous real-time synchronization between configuration tooling and simulated components)
* **Deployment Hosting:** Vercel Production Infrastructure (Configured with dynamic, case-sensitive cloud nodes)

---

## 📂 Folder Structure

The project follows a modular, scalable architecture keeping logical hooks, structural containers, and shared configuration completely decoupled:

```text
csat-project/
├── .github/                 # GitHub repository pipelines
├── node_modules/            # App dependencies layout
├── public/                  # Static standalone assets
└── src/
    ├── Components/          # Isolated Customizer Dashboard Panels
    │   ├── ContentTab.jsx   # Context controls for copies, text metrics, and tags
    │   ├── MobilePreview.jsx# Smartphone sandbox layout preview engine
    │   └── StylingTab.jsx   # Palette color matrices and geometry configurations
    ├── Context/             # Centralized Shared State Architecture
    │   └── CampaignContext.jsx # Global data distribution context provider
    ├── App.jsx              # Workspace viewport layout manager
    ├── index.css            # Global directives and tailwind styling anchors
    └── main.jsx             # Virtual DOM rendering orchestration element
├── .gitignore               # System tracking exclusions
├── eslint.config.js         # Lint code standard constraints
├── index.html               # Single page application landing gateway
├── package.json             # Execution commands and dependencies catalog
├── postcss.config.js        # Stylesheet compilation definitions
├── tailwind.config.js       # Design system baseline primitives
└── vite.config.js           # Transpilation and bundle parameters
🚀 Setup Instructions
Follow these quick setups to run an active development replica or compile production assets locally.

Prerequisites
Ensure you have Node.js installed (v16.x or higher recommended) along with the npm package manager utility.

1. Clone the Source Repository
Bash
git clone [https://github.com/anjalipathak-99/-CSAT-Campaign-Builder.git](https://github.com/anjalipathak-99/-CSAT-Campaign-Builder.git)
cd -CSAT-Campaign-Builder
2. Install Local Architecture Dependencies
Bash
npm install
3. Boot up the Dev Live Server
Bash
npm run dev
Once operational, navigate standard local web rendering layers at: http://localhost:5173

4. Bundle Build Assets
Bash
npm run build
Compiles, optimizes, and transforms structures into raw static file targets within the compiled /dist tree directory.

🌐 Deployment Details
This project is permanently linked into a Continuous Integration (CI/CD) automated deployment engine on Vercel.

Automated Triggers: Any updates pushed directly to the main tracking branch of the remote GitHub repository kick off automated test builds and updates to live Vercel servers instantly.

Environment Setup: Paths are accurately mapped using a custom cloud variable VITE_BASE_PATH configured to fallback seamlessly onto the application root domain.
