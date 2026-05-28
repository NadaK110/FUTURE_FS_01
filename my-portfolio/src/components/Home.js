import React from 'react';
import './Home.css';
import Nav from './Navbar';

const Home = () => {
  return (
    <main className="home-root">

      <Nav />

      <section className="hero">
        <div className="hero-tag">Full Stack Developer</div>
        <h1>Hello, I'm <span>Nada</span></h1>
        <p className="hero-subtitle">Creative Developer & Tech Enthusiast</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Download CV</a>
        </div>
      </section>

      <div className="divider" />

      <section id="about" className="section">
        <div className="section-label">01. about</div>
        <h2>About Me</h2>
        <p className="section-text">
          I'm a passionate developer who loves building beautiful, interactive experiences.
          I blend technology, creativity, and attention to detail into everything I make.
        </p>
        <div className="skills">
          <span className="skill">React</span>
          <span className="skill">JavaScript</span>
          <span className="skill">HTML/CSS</span>
          <span className="skill">Node.js</span>
          <span className="skill">Git</span>
        </div>
      </section>

      <div className="divider" />

      <section id="projects" className="section">
        <div className="section-label">02. projects</div>
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>My own site coded in React with a techy dark theme.</p>
            <span className="card-tag">React</span>
          </div>
          <div className="project-card">
            <h3>Game UI Clone</h3>
            <p>Frontend clone inspired by iconic gaming menus.</p>
            <span className="card-tag">CSS</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="contact" className="section">
        <div className="section-label">03. contact</div>
        <h2>Contact</h2>
        <div className="contact-box">
          <p>Want to collaborate or just say hi?</p>
          <a href="mailto:your.email@example.com" className="btn-primary">Email Me</a>
        </div>
      </section>

      <footer className="footer">© 2026 NADAK — ALL RIGHTS RESERVED</footer>

    </main>
  );
};

export default Home;