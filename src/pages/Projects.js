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
      title: "Deep Learning Projects",
      description: "A collection of deep learning projects built with TensorFlow and Keras. Includes neural network implementations, computer vision models, and interactive web deployment showcasing machine learning applications.",
      technologies: ["Deep Learning", "TensorFlow", "Python", "Vercel"],
      link: "https://deep-learning-projects-hvkysc8z4-andrus-projects-c70032aa.vercel.app",
      github: "https://github.com/AndruTjalas1/Deep-Learning-Projects",
    },
    {
      id: 5,
      title: "C-Minus Compiler",
      description: "A compiler implementation for the C-Minus language, a subset of C. Features lexical analysis, syntax parsing, semantic analysis, and code generation with complete compiler toolchain functionality.",
      technologies: ["C", "Compiler Design", "Lexical Analysis", "Parser"],
      link: "https://github.com/AndruTjalas1/C-Minus-Compiler",
    },
    {
      id: 6,
      title: "Polygon",
      description: "A work-in-progress web-based game where players progress through waves, purchase upgrades with branching options and strategic lockouts, and battle through an expansive map with epic boss fights.",
      technologies: ["TypeScript", "Game Development", "Web Game"],
      link: "https://polygon-gold.vercel.app",
      github: "https://github.com/nolanrd04/Polygon",
    },
    {
      id: 7,
      title: "Kafka Weather Tracker",
      description: "A real-time data streaming pipeline that uses Apache Kafka to ingest live weather data and process it through producer/consumer services. Containerized with Docker Compose, including Kafka, Zookeeper, and a Kafka UI dashboard for monitoring topics and message flow.",
      technologies: ["Apache Kafka", "Python", "Docker", "Data Streaming"],
      link: "https://github.com/AndruTjalas1/Kafka-weather-tracker",
    },
    {
      id: 8,
      title: "Ansible LAMP Stack Provisioner",
      description: "Automated infrastructure provisioning tool that deploys a full LAMP (Linux, Apache, MySQL, PHP) stack to any Debian/Ubuntu host with a single command. Built with modular Ansible roles, Jinja2 templates, and Ansible Vault for secure credential management.",
      technologies: ["Ansible", "Linux", "Apache", "MySQL", "DevOps"],
      link: "https://github.com/Andrutjalas1/ansible-lamp-provisioner",
    },
    {
      id: 9,
      title: "CityServe Device Sanitization Compliance System",
      description: "🏆 1st Place – GCU Cloudathon. A guided digital workflow that walks workers through NIST SP 800-88 compliant device wiping and auto-generates audit-ready compliance certificates. Built for CityServe Arizona during the GCU + AWS Cloud-a-thon hackathon with a FastAPI backend and React/TypeScript frontend.",
      technologies: ["React", "TypeScript", "FastAPI", "Python", "JWT Auth"],
      link: "https://github.com/joshnelson00/cloudathon",
    },
    {
      id: 10,
      title: "MBG Stat Tracking Website",
      description: "A board game play tracking website that lets players log games and view stats over time, backed by Firestore for real-time data storage. Built as a full-stack app with a Node.js backend and React frontend.",
      technologies: ["React", "Node.js", "Firestore", "JavaScript"],
      link: "https://mbg-stat-tracking-f595f637c692.herokuapp.com",
    },
    {
      id: 11,
      title: "More Projects Coming Soon",
      description: "Check back soon for more projects! I'm constantly working on new ideas and side projects.",
      technologies: ["TBD"],
      link: "#",
    },
  ]);

  return (
    <div className="page">
      <h1>My Projects</h1>
      
      <section id="projects">
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
              <p style={{ marginTop: "1rem", display: 'flex', gap: '0.5rem' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  View {project.github ? "Live" : "Project"} →
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    GitHub →
                  </a>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default Projects;
