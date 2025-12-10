import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Hi, I'm Andru Tjalas</h1>
        <p className="subtitle">Computer Science Student | Full Stack Developer</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
      </div>

      <section>
        <h2>Welcome to My Portfolio</h2>
        <div className="card">
          <p>
            I'm a passionate computer science student at Grand Canyon University with a focus on full-stack web development. 
            This portfolio showcases my projects, skills, and experience in building modern web applications.
          </p>
        </div>
      </section>

      <section>
        <h2>Quick Summary</h2>
        <div className="grid">
          <div className="card">
            <h3><FaCode className="icon" /> Skills</h3>
            <p>JavaScript, React, Python, Node.js, MongoDB, and more. Check out the About page for a complete list.</p>
          </div>
          <div className="card">
            <h3><FaRocket className="icon" /> Projects</h3>
            <p>I work on both personal projects and side projects. Visit the Projects page to see what I've built.</p>
          </div>
          <div className="card">
            <h3><FaGraduationCap className="icon" /> Education</h3>
            <p>Currently pursuing a Bachelor's degree in Computer Science with a 3.80 GPA, expected graduation May 2026.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Get In Touch</h2>
        <div className="card" style={{ textAlign: 'center' }}>
          <p>Feel free to reach out through any of these channels:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/AndruTjalas1" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '1.1rem' }}>
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '1.1rem' }}>
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:andrutjalas@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', textDecoration: 'none', fontSize: '1.1rem' }}>
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;