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
    send: "Send",
    placeholder: "Type a message...",
  },
  ar: {
    dashboard: "الرئيسية",
    projects: "المشاريع",
    ai: "أدوات الذكاء الاصطناعي",
    about: "حول",
    workshops: "الورش",
    contact: "تواصل",
    send: "إرسال",
    placeholder: "اكتب رسالة...",
  },
  ur: {
    dashboard: "ڈیش بورڈ",
    projects: "پروجیکٹس",
    ai: "AI ٹولز",
    about: "کے بارے میں",
    workshops: "ورکشاپس",
    contact: "رابطہ",
    send: "بھیجیں",
    placeholder: "پیغام لکھیں...",
  }
};

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [lang, setLang] = useState("en");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const t = translations[lang];

  const menu = [
    { key: "dashboard", icon: <FaHome />, label: t.dashboard },
    { key: "projects", icon: <FaProjectDiagram />, label: t.projects },
    { key: "ai", icon: <FaRobot />, label: t.ai },
    { key: "about", icon: <FaInfoCircle />, label: t.about },
    { key: "workshops", icon: <FaChalkboardTeacher />, label: t.workshops },
    { key: "contact", icon: <FaEnvelope />, label: t.contact },
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];

    // رد تلقائي بسيط (محاكاة AI)
    const aiReply = {
      role: "ai",
      text: "This is a simulated AI response 🤖"
    };

    setMessages([...newMessages, aiReply]);
    setInput("");
  };

  const renderDashboard = () => (
    <h2>Dashboard</h2>
  );

  const renderProjects = () => (
    <h2>Projects</h2>
  );

  const renderAI = () => (
    <div>
      <h2>{t.ai}</h2>

      {/* Chat Box */}
      <div style={{
        height: "400px",
        overflowY: "auto",
        background: "white",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            textAlign: msg.role === "user" ? "right" : "left",
            marginBottom: "10px"
          }}>
            <span style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "10px",
              background: msg.role === "user" ? "#2563eb" : "#e5e7eb",
              color: msg.role === "user" ? "white" : "black"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button onClick={sendMessage}>
          {t.send}
        </button>
      </div>
    </div>
  );

  const renderPage = () => {
    if (page === "dashboard") return renderDashboard();
    if (page === "projects") return renderProjects();
    if (page === "ai") return renderAI();

    return <h2>{t[page]}</h2>;
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
