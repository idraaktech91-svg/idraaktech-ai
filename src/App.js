import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaRobot, FaInfoCircle, FaChalkboardTeacher, FaEnvelope } from "react-icons/fa";

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

  const renderPage = () => {
    switch (page) {
      case "projects":
        return (
          <div>
            <h2>{t.projects}</h2>
            <p>Manage your projects here.</p>
          </div>
        );
      case "ai":
        return (
          <div>
            <h2>{t.ai}</h2>
            <p>AI tools will be here.</p>
          </div>
        );
      case "about":
        return (
          <div>
            <h2>{t.about}</h2>
            <p>About the platform and trainer.</p>
          </div>
        );
      case "workshops":
        return (
          <div>
            <h2>{t.workshops}</h2>
            <p>Training workshops content.</p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2>{t.contact}</h2>
            <p>Contact information.</p>
          </div>
        );
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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h1>Idraaktech-ai</h1>

      {/* Language Switcher */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ar")}>AR</button>
        <button onClick={() => setLang("ur")}>UR</button>
      </div>

      {/* Navbar */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>

        <button onClick={() => setPage("dashboard")}>
          <FaHome style={{ marginRight: "5px" }} />
          {t.dashboard}
        </button>

        <button onClick={() => setPage("projects")}>
          <FaProjectDiagram style={{ marginRight: "5px" }} />
          {t.projects}
        </button>

        <button onClick={() => setPage("ai")}>
          <FaRobot style={{ marginRight: "5px" }} />
          {t.ai}
        </button>

        <button onClick={() => setPage("about")}>
          <FaInfoCircle style={{ marginRight: "5px" }} />
          {t.about}
        </button>

        <button onClick={() => setPage("workshops")}>
          <FaChalkboardTeacher style={{ marginRight: "5px" }} />
          {t.workshops}
        </button>

        <button onClick={() => setPage("contact")}>
          <FaEnvelope style={{ marginRight: "5px" }} />
          {t.contact}
        </button>

      </div>

      {/* Content */}
      {renderPage()}

    </div>
  );
}
