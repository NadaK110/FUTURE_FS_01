import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Nav from './Navbar';

const phrases = ['Full Stack Developer', 'Creative Coder', 'React Enthusiast', 'UI/UX Thinker'];

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    let pi = 0, ci = 0, del = false;
    let timeout;

    const type = () => {
      const cur = phrases[pi];
      if (!del) {
        ci++;
        if (typedRef.current) {
          typedRef.current.innerHTML = cur.slice(0, ci) + '<span class="cursor"></span>';
        }
        if (ci === cur.length) { del = true; timeout = setTimeout(type, 1800); return; }
      } else {
        ci--;
        if (typedRef.current) {
          typedRef.current.innerHTML = cur.slice(0, ci) + '<span class="cursor"></span>';
        }
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
      }
      timeout = setTimeout(type, del ? 60 : 100);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const targets = [
      { id: 'c1', target: 5 },
      { id: 'c2', target: 8 },
      { id: 'c3', target: 6 },
    ];
    targets.forEach(({ id, target }) => {
      const el = document.getElementById(id);
      if (!el) return;
      let start = 0;
      const step = target / 60;
      const interval = setInterval(() => {
        start += step;
        if (start >= target) { el.textContent = target; clearInterval(interval); }
        else el.textContent = Math.floor(start);
      }, 1200 / 60);
    });

    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(el => {
        el.style.width = el.dataset.w;
      });
    }, 400);
  }, []);

  return (
    <main className="home-root">
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"><div className="grid-lines"></div></div>
        <div className="hero-badge">
          <span className="badge-dot"></span>Available for work
        </div>
        <h1>Hello, I'm<br /><span className="name">Nada</span></h1>
        <div className="typed" ref={typedRef}><span className="cursor"></span></div>
        <div className="hero-btns">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <a href="/cv.pdf" className="btn-secondary" download>Download CV</a>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div className="stat"><div className="stat-num" id="c1">0</div><div className="stat-label">Projects Built</div></div>
        <div className="stat"><div className="stat-num" id="c2">0</div><div className="stat-label">Technologies</div></div>
        <div className="stat"><div className="stat-num" id="c3">0</div><div className="stat-label">Months Coding</div></div>
      </div>

      <div className="divider" />

      {/* About Preview */}
      <section id="about" className="section">
        <div className="sec-label">01. about</div>
        <h2>About Me</h2>
        <div className="about-grid">
          <p className="about-text">
            I'm a passionate full stack developer who loves building beautiful, interactive experiences.
            I blend technology, creativity, and attention to detail into everything I make.
          </p>
          <div className="skills-wrap">
            <div className="skill-row"><span className="skill-name">React</span><div className="skill-bar"><div className="skill-fill" style={{width:'0%'}} data-w="85%"></div></div><span className="skill-pct">85%</span></div>
            <div className="skill-row"><span className="skill-name">JavaScript</span><div className="skill-bar"><div className="skill-fill" style={{width:'0%'}} data-w="80%"></div></div><span className="skill-pct">80%</span></div>
            <div className="skill-row"><span className="skill-name">HTML/CSS</span><div className="skill-bar"><div className="skill-fill" style={{width:'0%'}} data-w="90%"></div></div><span className="skill-pct">90%</span></div>
            <div className="skill-row"><span className="skill-name">Node.js</span><div className="skill-bar"><div className="skill-fill" style={{width:'0%'}} data-w="65%"></div></div><span className="skill-pct">65%</span></div>
            <div className="skill-row"><span className="skill-name">Git</span><div className="skill-bar"><div className="skill-fill" style={{width:'0%'}} data-w="75%"></div></div><span className="skill-pct">75%</span></div>
          </div>
        </div>
        <Link to="/about" className="btn-secondary" style={{marginTop:'1.5rem', display:'inline-block'}}>More About Me →</Link>
      </section>

      <div className="divider" />

      {/* Projects Preview */}
      <section id="projects" className="section">
        <div className="sec-label">02. projects</div>
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Portfolio Website</h3>
            <p>My own site coded in React with a techy dark theme and animations.</p>
            <div className="card-tags"><span className="tag">React</span><span className="tag">CSS</span></div>
          </div>
          <div className="card">
            <div className="card-icon">🎮</div>
            <h3>Game UI Clone</h3>
            <p>Frontend clone inspired by iconic gaming menus with CSS effects.</p>
            <div className="card-tags"><span className="tag">JavaScript</span><span className="tag">CSS</span></div>
          </div>
        </div>
        <Link to="/projects" className="btn-secondary" style={{marginTop:'1.5rem', display:'inline-block'}}>See All Projects →</Link>
      </section>

      <div className="divider" />

      {/* Contact Preview */}
      <section id="contact" className="section">
        <div className="sec-label">03. contact</div>
        <h2>Contact</h2>
        <div className="contact-box">
          <p>Want to collaborate, hire me, or just say hi?<br />I'm currently open to new opportunities.</p>
          <div className="contact-links">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <a href="https://linkedin.com" className="btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" className="btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 NADAK — Crafted with React</footer>
    </main>
  );
};

export default Home;