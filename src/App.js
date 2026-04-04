import React, { useState } from "react";

import Projects from "./pages/Projects";
import AITools from "./pages/AITools";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";

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
  },
};

/* ================= COMPONENT ================= */

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  const renderPage = () => {
    switch (page) {
      case "projects":
        return <Projects t={t} />;
      case "ai":
        return <AITools t={t} />;
      case "about":
        return <About t={t} />;
      case "workshops":
        return <Workshops t={t} />;
      case "contact":
        return <Contact t={t} />;
      default:
        return (
          <div>
            <h2>{t.dashboard}</h2>
            <p>Welcome to Idraaktech-ai platform.</p>
          </div>
        );
    }
  };

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

      {/* Content */}
      {renderPage()}
    </div>
  );
}
