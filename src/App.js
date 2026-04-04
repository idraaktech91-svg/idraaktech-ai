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

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  const renderPage = () => {
    return (
      <div style={{ background: "#1e1e2f", padding: "20px", borderRadius: "10px", color: "white" }}>
        <h2>{t[page] || t.dashboard}</h2>
        <p>Welcome to {t[page] || t.dashboard} section.</p>
      </div>
    );
  };

  const menu = [
    { key: "dashboard", icon: <FaHome />, label: t.dashboard },
    { key: "projects", icon: <FaProjectDiagram />, label: t.projects },
    { key: "ai", icon: <FaRobot />, label: t.ai },
    { key: "about", icon: <FaInfoCircle />, label: t.about },
    { key: "workshops", icon: <FaChalkboardTeacher />, label: t.workshops },
    { key: "contact", icon: <FaEnvelope />, label: t.contact },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>

      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#111827",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <h2>Idraaktech</h2>

        {menu.map((item) => (
          <div
            key={item.key}
            onClick={() => setPage(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "6px",
              background: page === item.key ? "#2563eb" : "transparent"
            }}
          >
            {item.icon}
            {item.label}
          </div>
        ))}

        {/* Language Switch */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ar")}>AR</button>
          <button onClick={() => setLang("ur")}>UR</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", background: "#f3f4f6" }}>
        {renderPage()}
      </div>

    </div>
  );
}
