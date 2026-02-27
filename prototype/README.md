# SurakshaAI (https://amd2026.netlify.app/)

**An AI Guardian Against Digital Fraud**

Built as a prototype for **AMD Slingshot India 2026** (Theme: AI + Cybersecurity & Privacy). SurakshaAI detects online job scams, task frauds, and phishing attempts on messaging platforms like WhatsApp and Telegram.

##  Features (Prototype)
*   **Screenshot Scanner:** Upload a suspicious chat screenshot to instantly analyze it.
*   **Real-time OCR:** Uses browser-based Tesseract.js to extract text securely without server uploads.
*   **Pattern Matching Engine:** Detects 50+ known Indian scam indicators (e.g., "refundable deposit", "Telegram tasks").
*   **Explainable Risk Scorecard:** Provides a 0-100 risk score and highlights exactly *why* a message was flagged.
*   **Privacy-First:** All processing happens locally on your device.

##  Upcoming Features (Roadmap)
*   **AMD Ryzen AI Integration:** Moving from keyword matching to on-device LLM inference via AMD's GAIA framework for deep context analysis.
*   **URL Safety Checker:** Paste a job link to scan for phishing domains.
*   **Browser Extension:** Real-time scanning on Naukri, LinkedIn, and Indeed.
*   **Multilingual Support:** Pattern detection for Hindi, Tamil, Telugu, and Bengali.

##  Tech Stack
*   **Frontend:** React 18, Vite
*   **Animations:** Framer Motion
*   **OCR:** Tesseract.js
*   **Styling:** Vanilla CSS (Glassmorphism & Neon Dark Mode)
*   **Icons:** Lucide React

##  How to Run Locally

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open the App:** Navigate to `http://localhost:5173` in your browser.

##  Team
* Pawan Patidar
* Sandeep Patidar
* Mayur Rudrawal
