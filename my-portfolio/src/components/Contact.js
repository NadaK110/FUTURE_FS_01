import React, { useState } from 'react';
import './Contact.css';
import Nav from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <main className="contact-root">
      <Nav />

      {/* Banner */}
      <div className="banner">
        <div className="banner-grid"></div>
        <div className="banner-glow"></div>
        <div className="banner-content">
          <div className="banner-tag">// get in touch</div>
          <div className="banner-name">CONTACT <span>ME.</span></div>
        </div>
        <div className="banner-line"></div>
      </div>

      {/* Main Content */}
      <div className="contact-main">

        {/* Info Side */}
        <div className="info-side">
          <div>
            <div className="sec-label">let's talk</div>
            <div className="info-title">Open to Opportunities</div>
            <p className="info-desc">Whether you want to collaborate, hire me, or just say hi — I'd love to hear from you. I usually respond within 24 hours!</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📧</div>
            <div><div className="info-label">Email</div><div className="info-val">nada_ak@icloud.com</div></div>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div><div className="info-label">Location</div><div className="info-val">Dubai, UAE</div></div>
          </div>
          <div className="info-card">
            <div className="info-icon">💼</div>
            <div><div className="info-label">Status</div><div className="info-val">Open to work ✦</div></div>
          </div>
          <div>
            <div className="social-title">Find me on</div>
            <div className="social-row">
              <a href="https://github.com/NadaK110" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
              <a href="https://www.linkedin.com/in/nada-khan-210455380/" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
              <a href="https://www.instagram.com/bombacolastic01/" target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="form-side">
          <div className="form-title">Send a Message ✦</div>
          {status === 'success' && <div className="alert success">Message sent successfully! I'll get back to you soon 🔮</div>}
          {status === 'error' && <div className="alert error">Something went wrong. Please try again!</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input className="form-input" name="phone" value={formData.phone} onChange={handleChange} placeholder="+971 xx xxx xxxx" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" name="message" value={formData.message} onChange={handleChange} placeholder="What's on your mind?" required />
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">© 2026 NADAK — Crafted with React</footer>
    </main>
  );
};

export default Contact;