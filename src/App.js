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

function ProjectDetail({ project, goBack, updateProject }) {
  const [tab, setTab] = useState("notes");
  const [text, setText] = useState(project.content || "");

  const handleSave = () => {
    updateProject(project.id, text);
    alert("Saved ✅");
  };

  return (
    <div>
      <button onClick={goBack}>⬅ Back</button>

      <h2>{project.name}</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setTab("notes")}>📝 Notes</button>
        <button onClick={() => setTab("ai")}>🤖 AI Tools</button>
      </div>

      {tab === "notes" && (
        <div>
          <textarea
            style={{ width: "100%", height: "200px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br /><br />
          <button onClick={handleSave}>💾 Save</button>
        </div>
      )}

      {tab === "ai" && (
        <div>
          <h3>AI Generator</h3>

          <textarea
            placeholder="Write your idea here..."
            style={{ width: "100%", height: "100px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <br /><br />

          <button
            onClick={() => {
              const result =
                "✨ AI Suggestion:\n\n" +
                text +
                "\n\n- Expanded idea\n- More details\n- Creative structure";

              setText(result);
            }}
          >
            🤖 Generate
          </button>

          <br /><br />

          <button
            onClick={() => {
              updateProject(project.id, text);
              alert("Added to Notes ✅");
            }}
          >
            ➕ Add to Notes
          </button>

          <br /><br />

          <button
            onClick={() => {
              const blob = new Blob([text], { type: "text/plain" });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = project.name + ".txt";
              a.click();
            }}
          >
            ⬇ Download
          </button>
        </div>
      )}
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

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const updateProject = (id, content) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, content } : p
    );
    setProjects(updated);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setPage("project");
  };

  const goBack = () => {
    setSelectedProject(null);
    setPage("dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Idraaktech-ai</h1>

      {page === "dashboard" && <Dashboard />}

      {page === "dashboard" && (
        <ProjectsList
          projects={projects}
          addProject={addProject}
          openProject={openProject}
        />
      )}

      {page === "project" && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          goBack={goBack}
          updateProject={updateProject}
        />
      )}

      {page === "ai" && <AITools />}
    </div>
  );
}
