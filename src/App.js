import React, { useState } from "react";

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function AITools() {
  return <h2>AI Tools</h2>;
}

export default function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    if (page === "dashboard") return <Dashboard />;
    if (page === "projects") return <Projects />;
    if (page === "ai") return <AITools />;
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#111", color: "#fff", padding: "20px" }}>
        <h3>IdraakTech AI</h3>

        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <br /><br />
        <button onClick={() => setPage("projects")}>Projects</button>
        <br /><br />
        <button onClick={() => setPage("ai")}>AI Tools</button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {renderPage()}
      </div>

    </div>
  );
}
