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
    welcome: "Welcome",
    stats: "Platform Statistics",
    myProjects: "My Projects",
  },
  ar: {
    dashboard: "الرئيسية",
    projects: "المشاريع",
    ai: "أدوات الذكاء الاصطناعي",
    about: "حول",
    workshops: "الورش",
    contact: "تواصل",
    welcome: "مرحباً",
    stats: "إحصائيات المنصة",
    myProjects: "مشاريعي",
  },
  ur: {
    dashboard: "ڈیش بورڈ",
    projects: "پروجیکٹس",
    ai: "AI ٹولز",
    about: "کے بارے میں",
    workshops: "ورکشاپس",
    contact: "رابطہ",
    welcome: "خوش آمدید",
    stats: "پلیٹ فارم کے اعداد و شمار",
    myProjects: "میرے پروجیکٹس",
  }
};

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  const menu = [
    { key: "dashboard", icon: <FaHome />, label: t.dashboard },
    { key: "projects", icon: <FaProjectDiagram />, label: t.projects },
    { key: "ai", icon: <FaRobot />, label: t.ai },
    { key: "about", icon: <FaInfoCircle />, label: t.about },
    { key: "workshops", icon: <FaChalkboardTeacher />, label: t.workshops },
    { key: "contact", icon: <FaEnvelope />, label: t.contact },
  ];

  const projectsData = [
    { title: "AI Chatbot", desc: "Smart chatbot using AI", status: "Active" },
    { title: "E-learning Platform", desc: "Online courses system", status: "Completed" },
    { title: "AI Image Generator", desc: "Generate images using AI", status: "In Progress" },
    { title: "Automation Tool", desc: "Task automation system", status: "Active" },
  ];

  const renderDashboard = () => (
    <div>
      <h2>{t.welcome} 👋</h2>
      <p>{t.stats}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "20px" }}>
        <div style={cardStyle}><h3>Projects</h3><p>12</p></div>
        <div style={cardStyle}><h3>AI Tools</h3><p>5</p></div>
        <div style={cardStyle}><h3>Workshops</h3><p>8</p></div>
        <div style={cardStyle}><h3>Users</h3><p>120+</p></div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div>
      <h2>{t.myProjects}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px", marginTop: "20px" }}>
        {projectsData.map((project, index) => (
          <div key={index} style={cardStyle}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span style={{
              padding: "5px 10px",
              borderRadius: "5px",
              background: "#2563eb",
              color: "white",
              fontSize: "12px"
            }}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    if (page === "dashboard") return renderDashboard();
    if (page === "projects") return renderProjects();

    return (
      <div style={{ background: "#1e1e2f", padding: "20px", borderRadius: "10px", color: "white" }}>
        <h2>{t[page]}</h2>
        <p>This is the {t[page]} page.</p>
      </div>
    );
  };

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

/* ================= CARD STYLE ================= */

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};
