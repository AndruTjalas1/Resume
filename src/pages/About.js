import React from 'react';
import { FaBook, FaLaptopCode, FaTools, FaBriefcase, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <section>
        <h2><FaBook className="icon" /> Education</h2>
        <div className="card">
          <h3>Bachelor's Degree in Computer Science</h3>
          <p><strong>Grand Canyon University</strong> - Phoenix, Arizona</p>
          <p><strong>GPA:</strong> 3.84 | <strong>Expected Graduation:</strong> May 2026</p>
          <p>Honors College</p>
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Relevant Coursework:</h4>
          <div className="card-tags">
            <span className="tag">Algorithms & Data Structures</span>
            <span className="tag">Database Design & Programming</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">Deep Learning</span>
            <span className="tag">Probability & Statistics</span>
            <span className="tag">Applied Linear Algebra</span>
            <span className="tag">Operating Systems</span>
            <span className="tag">Information Security I & II</span>
            <span className="tag">Modeling & Simulation</span>
            <span className="tag">Computer Architecture</span>
            <span className="tag">Programming Languages</span>
            <span className="tag">HCI & Communication</span>
          </div>
        </div>

        <div className="card">
          <h3>High School Diploma</h3>
          <p><strong>Pusch Ridge Christian Academy (PRCS)</strong> - Tucson, Arizona</p>
          <p><strong>Graduated:</strong> May 2023</p>
          <p>Highest Honor Roll for Grades 9-12 (awarded for 3.75+ weighted GPA)</p>
        </div>
      </section>

      <section>
        <h2><FaLaptopCode className="icon" /> Technical Skills</h2>
        <div className="grid">
          <div className="card">
            <h3><FaLaptopCode className="icon" /> Programming Languages</h3>
            <div className="card-tags">
              <span className="tag">Python</span>
              <span className="tag">Java</span>
              <span className="tag">JavaScript</span>
              <span className="tag">TypeScript</span>
              <span className="tag">SQL</span>
              <span className="tag">C#</span>
              <span className="tag">C++</span>
            </div>
          </div>

          <div className="card">
            <h3>Data & Analytics</h3>
            <div className="card-tags">
              <span className="tag">Pandas</span>
              <span className="tag">NumPy</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">PyTorch</span>
            </div>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <div className="card-tags">
              <span className="tag">PostgreSQL</span>
              <span className="tag">MySQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Data Modeling</span>
              <span className="tag">Indexing</span>
            </div>
          </div>

          <div className="card">
            <h3><FaTools className="icon" /> Systems & Tools</h3>
            <div className="card-tags">
              <span className="tag">Linux</span>
              <span className="tag">Git</span>
              <span className="tag">Docker</span>
              <span className="tag">REST APIs</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Azure</span>
              <span className="tag">AWS</span>
            </div>
          </div>

          <div className="card">
            <h3>Security</h3>
            <div className="card-tags">
              <span className="tag">Access Control</span>
              <span className="tag">Secure Coding</span>
              <span className="tag">Threat Modeling</span>
              <span className="tag">OWASP</span>
            </div>
          </div>

          <div className="card">
            <h3><FaHeart className="icon" /> Core Competencies</h3>
            <div className="card-tags">
              <span className="tag">Full Stack Development</span>
              <span className="tag">Teamwork</span>
              <span className="tag">Communication</span>
              <span className="tag">Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2><FaBriefcase className="icon" /> Professional Experience</h2>
        
        <div className="card">
          <h3>Enterprise Platform Solutions Intern</h3>
          <p><strong>Paychex</strong> - Phoenix, AZ</p>
          <p><strong>September 2025 - Present</strong></p>
          <p>Working with a team to develop a full stack web application for internal use within the company in line with the company's AI initiatives.</p>
          <h4 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>Tech Stack:</h4>
          <div className="card-tags">
            <span className="tag">Python</span>
            <span className="tag">Fast API</span>
            <span className="tag">Node.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">React</span>
            <span className="tag">Azure</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Jira</span>
            <span className="tag">GitHub</span>
          </div>
        </div>

        <div className="card">
          <h3>Technology Instructors Assistant</h3>
          <p><strong>Grand Canyon University</strong> - Phoenix, AZ</p>
          <p><strong>September 2025 - Present</strong></p>
          <p>I assist students by answering their questions and giving advice on their assignments in class and outside of class. I hold office hours in the lab so students can come work on their projects outside of class time as well as ask questions.</p>
          <h4 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>Tech Stack:</h4>
          <div className="card-tags">
            <span className="tag">Unity</span>
            <span className="tag">C#</span>
            <span className="tag">C</span>
            <span className="tag">Linux</span>
            <span className="tag">GitHub</span>
          </div>
        </div>

        <div className="card">
          <h3>Game Designer (Publishing Cycle 2025)</h3>
          <p><strong>Kentish Publishing Company</strong> - Houston, TX</p>
          <p><strong>May 2025 - June 2025</strong></p>
          <p>I collaborated as part of a team to help create a simple demo for a game, where I helped with overall game design as well as implementation of a responsive and flexible dialogue system that would suit future needs.</p>
          <h4 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>Tools & Technologies:</h4>
          <div className="card-tags">
            <span className="tag">Unity</span>
            <span className="tag">C#</span>
            <span className="tag">Trello</span>
            <span className="tag">Discord</span>
            <span className="tag">GitHub</span>
            <span className="tag">Miro</span>
          </div>
        </div>
      </section>

      <section>
        <h2><FaHeart className="icon" /> Interests</h2>
        <div className="card">
          <p>
            I'm passionate about building user-friendly web applications, learning new technologies, 
            and solving complex problems through code. I enjoy collaborating with teams and contributing 
            to projects that make an impact. I'm particularly interested in full stack development and 
            exploring innovative solutions in software engineering.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
