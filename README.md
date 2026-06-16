# 📝 FeedbackFlow — CSAT Campaign Builder & Simulator

FeedbackFlow is an interactive, high-fidelity React application designed for configuring, branding, and previewing Customer Satisfaction (CSAT) in-app feedback widgets. Built to bridge the gap between design and development, it features an administrative dashboard alongside a live, simulated mobile device viewport that handles real-time configuration changes.

---

## 🚀 Live Link
* **Production Deployment:** [https://csat-campaign-project.netlify.app/](https://csat-campaign-project.netlify.app/)

---

## ✨ Key Features

### 1. Unified Global State Control
* Powered entirely by the React Context API (`CampaignContext`). 
* Eliminates prop-drilling by syncing inputs, state switches, and theme values across separate panels instantly.

### 2. Dual-Tab Configuration Dashboard
* **📝 Content & Layout Settings:** Control copy variations (Header Titles, Sub-headers), append interactive keyword feedback pills, and adjust fallback success panel messages.
* **🎨 Branding & Visual Styling:** Fine-tune the cosmetic presentation including background hex color scales, custom button/text color accents, and variable element border-radii (`border-radius`).

### 3. High-Fidelity Mobile Viewport Simulator
* Embedded physical smartphone viewport replica complete with an absolute status notch, upper speaker bar, and bottom home indicators.
* **Layout State Hot-Swapping:** Allows administrators to switch toggles between the active **1. Feedback Window** layout and the secondary **2. Success State** validation windows manually.
* **Rating System Engine:** Toggle between classic Star Ratings (★) and Numerical Point grids (1-5) depending on survey requirements.
* **Live Click Simulations:** Buttons, tags, and scales remain fully clickable inside the mobile frame to let users experience micro-interactions directly.

---

## 🛠️ Tech Stack

* **Core Framework:** React 18 (Functional Components & Hooks)
* **Styling Framework:** Tailwind CSS (Utilizing component grids, utility layers, and smooth hardware-accelerated animations)
* **State Management:** React Context API (`useContext`, `useState`)
* **Build Automation Tooling:** Vite
* **Hosting Platform:** Netlify

---

## 📁 Project Folder Structure

```text
├── public/
│   └── netlify.toml         # Production SPA fallback routing rules
├── src/
│   ├── Components/
│   │   ├── ContentTab.jsx   # Form controls for titles, copy, tags, and screens
│   │   ├── StylingTab.jsx   # Branding color pickers and range sliders
│   │   └── MobilePreview.jsx# Simulated physical phone widget view UI engine
│   ├── Context/
│   │   └── CampaignContext.jsx # Global context state provider and hook export
│   ├── App.jsx              # Main workspace frame and application assembly
│   └── main.jsx             # React DOM application mounting point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
💻 Local Workspace Installation
Follow these steps to configure and boot your development ecosystem locally:

1. Clone the project repository
Bash
git clone [https://github.com/your-username/csat-campaign-project.git](https://github.com/your-username/csat-campaign-project.git)
cd csat-campaign-project
2. Download dependent modules
Bash
npm install
3. Boot the local bundler server
Bash
npm run dev
Open your web browser and target your assigned port, typically: http://localhost:5173/

🌐 Netlify Production Build & Deploy Options
Single Page Application (SPA) Fallback Configuration
To prevent your web browser from throwing unhandled 404 Page Not Found network anomalies when reloading paths or interacting with routing configurations, a specialized redirect rule is placed inside your root static path (public/netlify.toml):

Ini, TOML
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
Compiling Build Outputs
To compile optimization bundles manually prior to shipping to your hosting provider, trigger the build pipeline:

Bash
# Compile and output production files to the /dist folder
npm run build

# Boot a localized mirror server to test production build efficiency
npm run preview
