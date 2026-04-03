import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      title: "IdraakTech AI",
      dashboard: "Dashboard",
      projects: "Projects"
    },
    ar: {
      title: "إدراك تك AI",
      dashboard: "لوحة التحكم",
      projects: "المشاريع"
    },
    hi: {
      title: "IdraakTech AI",
      dashboard: "डैशबोर्ड",
      projects: "प्रोजेक्ट्स"
    }
  };

  const t = translations[lang];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{t.title}</h1>

      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("ar")}>AR</button>
      <button onClick={() => setLang("hi")}>HI</button>

      <hr />

      <h2>{t.dashboard}</h2>
      <p>{t.projects}</p>
    </div>
  );
}
