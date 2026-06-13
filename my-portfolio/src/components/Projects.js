import React, { useState } from "react";
import "./Projects.css";
import Nav from "./Navbar";
import projectsData from "./ProjectsData";

const tagColors = {
  react: "tag-react",
  css: "tag-css",
  js: "tag-js",
  node: "tag-node",
  mongo: "tag-mongo",
  mysql: "tag-mysql",
  php: "tag-php",
  sql: "tag-sql",
};

const Projects = () => {
  const [active, setActive] = useState("all");

  const filtered = projectsData.filter(
    (p) => active === "all" || p.tags.includes(active)
  );

  return (
    <main className="projects-root">
      <Nav />

      {/* Banner */}
      <div className="banner">
        <div className="banner-grid"></div>
        <div className="banner-glow"></div>
        <div className="banner-glow2"></div>
        <div className="banner-content">
          <div className="banner-tag">// my work</div>
          <div className="banner-name">
            PROJECTS <span>.</span>
          </div>
          <div className="banner-sub">
            A collection of things I've built & loved
          </div>
        </div>
        <div className="banner-line"></div>
      </div>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">{projectsData.length}</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            {projectsData.filter((p) => p.live).length}
          </div>
          <div className="stat-label">Live Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2026</div>
          <div className="stat-label">Latest Year</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <span className="filter-label">Filter:</span>
        {["all", "react", "js", "css", "node", "mysql", "sql", "php"].map(
          (f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f === "all"
                ? "All"
                : f === "js"
                ? "JavaScript"
                : f === "node"
                ? "Node.js"
                : f === "mysql"
                ? "MySQL"
                : f === "php"
                ? "PHP"
                : f === "sql"
                ? "SQL"
                : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Masonry Grid */}
      <div className="masonry">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className={`card ${
              active !== "all" && !p.tags.includes(active) ? "faded" : ""
            }`}
          >
            <div className={`card-img ${p.size}`}>
              <div
                className="card-img-bg"
                style={{ background: p.gradient }}
              ></div>
              <div className="card-emoji">{p.emoji}</div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                {p.featured && <div className="featured-badge">✦ Featured</div>}
                <div className="card-num">
                  #{String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="card-header">
                <div className="card-title">{p.title}</div>
                <div className="card-links">
                  {p.live && (
                    <a
                      href={p.live}
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      className="card-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.tags.map((t) => (
                  <span key={t} className={`tag ${tagColors[t]}`}>
                    {p.tagLabels[t]}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                <span className="card-date">{p.year}</span>
                <span className="card-dot"></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">© 2026 NADAK — Crafted with React</footer>
    </main>
  );
};

export default Projects;
