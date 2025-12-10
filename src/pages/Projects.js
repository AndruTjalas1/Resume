import React, { useState } from 'react';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Auto-Mute",
      description: "A Windows automation tool that automatically mutes/unmutes system audio based on a customizable schedule. Features include GUI configuration, system tray icon, global hotkey support, persistent watchdog monitoring, and automatic restart on system wake.",
      technologies: ["Python", "Windows Audio Control", "System Automation"],
      link: "https://github.com/AndruTjalas1/Auto-Mute",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A React-based portfolio website showcasing my projects and skills with GitHub Pages deployment. Features responsive design, smooth navigation, and modern UI.",
      technologies: ["React", "CSS3", "GitHub Pages", "React Router"],
      link: "https://github.com/AndruTjalas1/Resume",
    },
    {
      id: 3,
      title: "Shakespeare Genetic Algorithm",
      description: "A genetic algorithm implementation that evolves random text to match Shakespeare quotes. Demonstrates evolutionary computation principles with population-based search and fitness evaluation.",
      technologies: ["Genetic Algorithm", "Python", "Evolutionary Computation"],
      link: "https://github.com/AndruTjalas1/Shakespeare-Genetic-Algorithm",
    },
    {
      id: 4,
      title: "More Projects Coming Soon",
      description: "Check back soon for more projects! I'm constantly working on new ideas and side projects.",
      technologies: ["TBD"],
      link: "#",
    },
  ]);

  return (
    <div className="page">
      <h1>My Projects</h1>
      
      <div className="card">
        <p>
          Below are some of my notable projects. I focus on building functional, user-friendly applications 
          with modern technologies and best practices.
        </p>
      </div>

      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tag">{tech}</span>
              ))}
            </div>
            {project.link !== "#" && (
              <p style={{ marginTop: "1rem" }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  View Project →
                </a>
              </p>
            )}
          </div>
        ))}
      </div>

      <section style={{ marginTop: "2rem" }}>
        <h2>How to Add Your Projects</h2>
        <div className="card">
          <p>
            To add your projects, edit the <code>projects</code> array in <code>src/pages/Projects.js</code>. 
            Each project should have:
          </p>
          <ul style={{ marginLeft: "2rem" }}>
            <li><strong>id:</strong> Unique identifier</li>
            <li><strong>title:</strong> Project name</li>
            <li><strong>description:</strong> Brief description</li>
            <li><strong>technologies:</strong> Array of tech stack</li>
            <li><strong>link:</strong> GitHub repo or project link</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projects;
