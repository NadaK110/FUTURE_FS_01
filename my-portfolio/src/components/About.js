import React, { useEffect } from 'react';
import './About.css';
import Nav from './Navbar';

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.skill-fill-v').forEach(el => {
        el.style.width = el.dataset.w;
      });
    }, 300);

    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }, []);

  return (
    <main className="about-root">
      <Nav />

      {/* Banner Hero */}
      <div className="banner">
        <div className="banner-grid"></div>
        <div className="banner-glow"></div>
        <div className="banner-glow2"></div>
        <div className="banner-content">
          <div className="banner-tag">// about me</div>
          <div className="banner-name">NADA <span>K.</span></div>
          <div className="banner-role">Full Stack Developer & Creative Coder</div>
        </div>
        <div className="banner-line"></div>
      </div>

      {/* Info Strip */}
      <div className="info-strip">
        <div className="info-item"><div className="info-num">5+</div><div className="info-label">Projects</div></div>
        <div className="info-item"><div className="info-num">8+</div><div className="info-label">Skills</div></div>
        <div className="info-item"><div className="info-num">2yrs</div><div className="info-label">Experience</div></div>
        <div className="info-item"><div className="info-num">∞</div><div className="info-label">Passion</div></div>
      </div>

      {/* Bio */}
      <div className="bio-bar">
        <p className="bio-text">
          I'm a passionate full stack developer who loves building beautiful, interactive digital experiences.
          I blend creativity, technology, and attention to detail into everything I create.
        </p>
        <div className="status"><span className="dot"></span>Open to opportunities</div>
      </div>

      <div className="divider" />

      {/* Skills Horizontal Scroll */}
      <div className="scroll-section">
        <div className="scroll-header">
          <div className="sec-label">01. skills</div>
          <h2>Tech Stack</h2>
        </div>
        <div className="h-scroll">
          <div className="skill-card active"><div className="skill-icon">.✦ ݁˖</div><div className="skill-title">React</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="85%"></div></div></div>
          <div className="skill-card"><div className="skill-icon">🎧ྀི</div><div className="skill-title">JavaScript</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="80%"></div></div></div>
          <div className="skill-card"><div className="skill-icon">.✦ ݁˖</div><div className="skill-title">HTML/CSS</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="90%"></div></div></div>
          <div className="skill-card"><div className="skill-icon">🎧ྀི</div><div className="skill-title">Node.js</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="65%"></div></div></div>
          <div className="skill-card"><div className="skill-icon">.✦ ݁˖</div><div className="skill-title">Git</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="75%"></div></div></div>
          <div className="skill-card"><div className="skill-icon">🎧ྀི</div><div className="skill-title">MongoDB</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="55%"></div></div></div>
          <div className="skill-card"><div className="skill-icon">.✦ ݁˖</div><div className="skill-title">Figma</div><div className="skill-bar-v"><div className="skill-fill-v" data-w="60%"></div></div></div>
        </div>
      </div>
      
      <div className="divider" />

      {/* Education Timeline */}
<section className="section">
  <div className="sec-label">02. education</div>
  <h2>Education & Experience</h2>
  <div className="timeline">
    <div className="tl-item">
      <div className="tl-dot">🎓</div>
      <div className="tl-content">
        <div className="tl-title">Bachelor's in Computer Science</div>
        <div className="tl-sub">Heriot Watt University, Dubai</div>
        <div className="tl-year">2024 — 2028</div>
      </div>
    </div>
    <div className="tl-item">
      <div className="tl-dot">💼</div>
      <div className="tl-content">
        <div className="tl-title">Full Stack Developer Intern</div>
        <div className="tl-sub">Future Interns</div>
        <div className="tl-year">2026 — Present</div>
      </div>
    </div>
    <div className="tl-item">
      <div className="tl-dot">🚀</div>
      <div className="tl-content">
        <div className="tl-title">Creative Video Editor And Content Creator</div>
        <div className="tl-sub">Personal Account | TikTok - @otta_games</div>
        <div className="tl-year">2026 — Present</div>
      </div>
    </div>
    <div className="tl-item">
      <div className="tl-dot">🎯</div>
      <div className="tl-content">
        <div className="tl-title">Aesthetic Reel Content Creator</div>
        <div className="tl-sub">Personal Account | Instagram - @bookbarnx</div>
        <div className="tl-year">2024 — 2025</div>
      </div>
    </div>
    <div className="tl-item">
      <div className="tl-dot">⚡</div>
      <div className="tl-content">
        <div className="tl-title">Industry Exposure Intern</div>
        <div className="tl-sub">Logitech, Dubai</div>
        <div className="tl-year">July 2024</div>
      </div>
    </div>
  </div>
  <div className="img-banner">
    <img src="/banner.jpg" alt="Nada" />
  </div>
</section>
      <div className="divider" />

      {/* Hobbies */}
      <section className="section">
        <div className="sec-label">03. hobbies</div>
        <h2>Beyond Code</h2>
        <div className="hobbies-grid">
          <div className="hobby-card"><div className="hobby-icon">🖤</div><div className="hobby-label">Gaming</div></div>
          <div className="hobby-card"><div className="hobby-icon">🏐</div><div className="hobby-label">Volleyball</div></div>
          <div className="hobby-card"><div className="hobby-icon">🐈‍⬛</div><div className="hobby-label">Reading</div></div>
          <div className="hobby-card"><div className="hobby-icon">🎧</div><div className="hobby-label">Music</div></div>
        </div>
      </section>

      <footer className="footer">© 2026 NADAK — Crafted with React</footer>
    </main>
  );
};

export default About;