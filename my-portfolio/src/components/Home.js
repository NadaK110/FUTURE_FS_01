// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home-root">
      {/* Navbar At The To */}
      <nav className="nav">
        <div className="logo">NadaK</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Intro Section */}
      <section className="hero">
        <h1>
          Hello, I'm <span>Nada</span>
        </h1>
        <p>Creative Developer & Tech Enthusiast</p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves building beautiful, interactive experiences.<br />
          I blend technology, creativity, and attention to detail into everything I make.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              My own site—coded by hand using React &amp; custom CSS, with a unique, aesthetic theme.
            </p>
          </div>
          <div className="project-card">
            <h3>Game UI Clone</h3>
            <p>
              A playful frontend clone inspired by iconic gaming menus, using subtle, modern CSS effects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          Want to collaborate or just say hi?<br />
          <a href="mailto:your.email@example.com" className="contact-btn">
            Email Me
          </a>
        </p>
      </section>

      {/* Footer At Bottom */}
      <footer className="footer">© 2026 NadaK. All rights reserved.</footer>
    </main>
  );
};

export default Home;