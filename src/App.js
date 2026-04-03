import React, { useState, useEffect } from "react";

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function ProjectsList({ projects, openProject, addProject }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name) return;

    const newProject = {
      id: Date.now(),
      name: name,
      content: ""
    };

    addProject(newProject);
    setName("");
  };

  return (
    <div>
      <h2>Projects</h2>

      <input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>Create</button>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <button onClick={() => openProject(p)}>
              {p.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectDetail({ project, goBack }) {
  return (
    <div>
      <button onClick={goBack}>⬅ Back</button>
      <h2>{project.name}</h2>
      <p>Project ID: {project.id}</p>
    </div>
  );
}

function AITools() {
  return <h2>AI Tools</h2>;
}

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // تحميل المشاريع
  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  // حفظ المشاريع
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setPage("projectDetail");
  };

  const goBack = () => {
    setSelectedProject(null);
    setPage("projects");
  };

  const renderPage = () => {
    if (page === "dashboard") return <Dashboard />;

    if (page === "projects")
      return (
        <ProjectsList
          projects={projects}
          addProject={addProject}
          openProject={openProject}
        />
      );

    if (page === "projectDetail" && selectedProject)
      return (
        <ProjectDetail project={selectedProject} goBack={goBack} />
      );

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
