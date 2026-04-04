import React, { useState, useEffect } from "react";

/* ================= TRANSLATIONS ================= */

const translations = {
  en: {
    dashboard: "Dashboard",
    projects: "Projects",
    ai: "AI Tools",
    about: "About",
    workshops: "Workshops",
    contact: "Contact",
  },
  ar: {
    dashboard: "الرئيسية",
    projects: "المشاريع",
    ai: "أدوات الذكاء الاصطناعي",
    about: "حول",
    workshops: "الورش",
    contact: "تواصل",
  },
  ur: {
    dashboard: "ڈیش بورڈ",
    projects: "پروجیکٹس",
    ai: "AI ٹولز",
    about: "کے بارے میں",
    workshops: "ورکشاپس",
    contact: "رابطہ",
  }
};

/* ================= COMPONENT ================= */

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Idraaktech-ai</h1>

      {/* Language Switcher */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ar")}>AR</button>
        <button onClick={() => setLang("ur")}>UR</button>
      </div>

      {/* Navbar */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button onClick={() => setPage("dashboard")}>{t.dashboard}</button>
        <button onClick={() => setPage("projects")}>{t.projects}</button>
        <button onClick={() => setPage("ai")}>{t.ai}</button>
        <button onClick={() => setPage("about")}>{t.about}</button>
        <button onClick={() => setPage("workshops")}>{t.workshops}</button>
        <button onClick={() => setPage("contact")}>{t.contact}</button>
      </div>

      {/* Pages */}

      {page === "dashboard" && (
        <div>
          <h2>{t.dashboard}</h2>
          <p>Welcome to Idraaktech-ai platform.</p>
        </div>
      )}

      {page === "projects" && (
        <div>
          <h2>{t.projects}</h2>
          <p>Manage your projects here.</p>
        </div>
      )}

      {page === "ai" && (
        <div>
          <h2>{t.ai}</h2>
          <p>AI tools will be here.</p>
        </div>
      )}

      {page === "about" && (
        <div>
          <h2>{t.about}</h2>
          <p>About the platform and trainer.</p>
        </div>
      )}

      {page === "workshops" && (
        <div>
          <h2>{t.workshops}</h2>
          <p>Training workshops content.</p>
        </div>
      )}

      {page === "contact" && (
        <div>
          <h2>{t.contact}</h2>
          <p>Contact information.</p>
        </div>
      )}

    </div>
  );
}
