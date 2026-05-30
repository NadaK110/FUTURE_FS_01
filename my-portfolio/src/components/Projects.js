import React, { useState } from 'react';
import './Projects.css';
import Nav from './Navbar';

const projects = [
  {
    id: 1,
    emoji: '🔮',
    title: 'Portfolio Website',
    desc: 'My personal portfolio with React, Node.js backend, MongoDB and email notifications.',
    tags: ['react', 'css', 'node', 'mongo'],
    tagLabels: { react: 'React', css: 'CSS', node: 'Node.js', mongo: 'MongoDB' },
    live: '#',
    github: '#',
    featured: true,
    year: '2026',
    size: 'tall',
    gradient: 'linear-gradient(135deg,#a855f7,#7c3aed)',
  },
  {
    id: 2,
    emoji: '🎮',
    title: 'Game UI Clone',
    desc: 'Gaming menu UI with CSS animations and effects.',
    tags: ['js', 'css'],
    tagLabels: { js: 'JavaScript', css: 'CSS' },
    live: '#',
    github: '#',
    featured: false,
    year: '2026',
    size: 'short',
    gradient: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
  },
  {
    id: 3,
    emoji: '📊',
    title: 'Dashboard App',
    desc: 'Analytics dashboard with real time data and Chart.js visualizations.',
    tags: ['react', 'js'],
    tagLabels: { react: 'React', js: 'JavaScript' },
    live: '#',
    github: '#',
    featured: false,
    year: '2026',
    size: 'medium',
    gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)',
  },
  {
    id: 4,
    emoji: '🛍️',
    title: 'E-Commerce UI',
    desc: 'Shopping UI with cart and filters.',
    tags: ['react', 'css'],
    tagLabels: { react: 'React', css: 'CSS' },
    live: '#',
    github: '#',
    featured: false,
    year: '2026',
    size: 'short',
    gradient: 'linear-gradient(135deg,#ec4899,#a855f7)',
  },
  {
    id: 5,
    emoji: '🌐',
    title: 'REST API',
    desc: 'Full REST API with Express, MongoDB and JWT authentication with full CRUD operations.',
    tags: ['node', 'js', 'mongo'],
    tagLabels: { node: 'Node.js', js: 'JavaScript', mongo: 'MongoDB' },
    live: null,
    github: '#',
    featured: false,
    year: '2026',
    size: 'tall',
    gradient: 'linear-gradient(135deg,#22c55e,#0ea5e9)',
  },
  {
    id: 6,
    emoji: '🎨',
    title: 'CSS Art',
    desc: 'Pure CSS illustrations and animations, no JavaScript needed.',
    tags: ['css'],
    tagLabels: { css: 'CSS' },
    live: '#',
    github: null,
    featured: false,
    year: '2026',
    size: 'medium',
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
  },
];

const tagColors = {
  react: 'tag-react',
  css: 'tag-css',
  js: 'tag-js',
  node: 'tag-node',
  mongo: 'tag-mongo',
};

const Projects = () => {
  const [active, setActive] = useState('all');

  const filtered = projects.filter(p =>
    active === 'all' || p.tags.includes(active)
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
          <div className="banner-name">PROJECTS <span>.</span></div>
          <div className="banner-sub">A collection of things I've built & loved</div>
        </div>
        <div className="banner-line"></div>
      </div>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Total Projects</div></div>
        <div className="stat-item"><div className="stat-num">4</div><div className="stat-label">Live Projects</div></div>
        <div className="stat-item"><div className="stat-num">5</div><div className="stat-label">Technologies</div></div>
        <div className="stat-item"><div className="stat-num">2026</div><div className="stat-label">Latest Year</div></div>
      </div>

      {/* Filters */}
      <div className="filters">
        <span className="filter-label">Filter:</span>
        {['all', 'react', 'js', 'css', 'node'].map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f === 'all' ? 'All' : f === 'js' ? 'JavaScript' : f === 'node' ? 'Node.js' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry">
        {filtered.map((p, i) => (
          <div key={p.id} className={`card ${active !== 'all' && !p.tags.includes(active) ? 'faded' : ''}`}>
            <div className={`card-img ${p.size}`}>
              <div className="card-img-bg" style={{ background: p.gradient }}></div>
              <div className="card-emoji">{p.emoji}</div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                {p.featured && <div className="featured-badge">✦ Featured</div>}
                <div className="card-num">#{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className="card-header">
                <div className="card-title">{p.title}</div>
                <div className="card-links">
                  {p.live && <a href={p.live} className="card-link" target="_blank" rel="noreferrer">Live ↗</a>}
                  {p.github && <a href={p.github} className="card-link" target="_blank" rel="noreferrer">GitHub</a>}
                </div>
              </div>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.tags.map(t => (
                  <span key={t} className={`tag ${tagColors[t]}`}>{p.tagLabels[t]}</span>
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