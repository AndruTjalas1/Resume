import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <span className="logo-accent">Andru</span> Tjalas
            </Link>
            <button 
              className="menu-toggle"
              onClick={() => setNavOpen(!navOpen)}
            >
              ☰
            </button>
            <ul className={`nav-menu ${navOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link" onClick={() => setNavOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => setNavOpen(false)}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Andru Tjalas. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/AndruTjalas1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:andrutjalas@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;