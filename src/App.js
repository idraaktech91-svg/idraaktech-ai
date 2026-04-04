import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import AI from "./pages/AI";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";

import { FaHome, FaProjectDiagram, FaRobot, FaInfoCircle, FaChalkboardTeacher, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>

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

        <Link to="/dashboard" style={linkStyle}><FaHome /> Dashboard</Link>
        <Link to="/projects" style={linkStyle}><FaProjectDiagram /> Projects</Link>
        <Link to="/ai" style={linkStyle}><FaRobot /> AI Tools</Link>
        <Link to="/about" style={linkStyle}><FaInfoCircle /> About</Link>
        <Link to="/workshops" style={linkStyle}><FaChalkboardTeacher /> Workshops</Link>
        <Link to="/contact" style={linkStyle}><FaEnvelope /> Contact</Link>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px", background: "#f3f4f6" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "white",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "6px"
};
