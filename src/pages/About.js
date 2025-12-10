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
          <p><strong>GPA:</strong> 3.80 | <strong>Expected Graduation:</strong> May 2026</p>
          <p>Honors College</p>
        </div>

        <div className="card">
          <h3>High School Diploma</h3>
          <p><strong>Pusch Ridge Christian Academy (PRCS)</strong> - Tucson, Arizona</p>
          <p><strong>Graduated:</strong> May 2023</p>
          <p>Highest Honor Roll for Grades 9-12 (awarded for 3.75+ weighted GPA)</p>
        </div>
      </section>

      <section>
        <h2><FaLaptopCode className="icon" /> Skills</h2>
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
            <h3><FaTools className="icon" /> Technologies & Tools</h3>
            <div className="card-tags">
              <span className="tag">Full Stack Development</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Microsoft Office Suite</span>
              <span className="tag">Git</span>
              <span className="tag">GitHub</span>
            </div>
          </div>

          <div className="card">
            <h3><FaHeart className="icon" /> Core Competencies</h3>
            <div className="card-tags">
              <span className="tag">Teamwork</span>
              <span className="tag">Communication</span>
              <span className="tag">Problem Solving</span>
              <span className="tag">Full Stack Development</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2><FaBriefcase className="icon" /> Experience</h2>
        
        <div className="card">
          <h3>Enterprise Platform Solutions Intern</h3>
          <p><strong>Paychex</strong> - Phoenix, AZ</p>
          <p><strong>September 2025 - Present</strong></p>
          <p>Working with a team to develop a full stack web application for internal use within the company in line with the company's AI initiatives.</p>
        </div>

        <div className="card">
          <h3>Technology Instructors Assistant</h3>
          <p><strong>Grand Canyon University</strong> - Phoenix, AZ</p>
          <p><strong>September 2025 - Present</strong></p>
          <p>I assist students by answering their questions and giving advice on their assignments in class and outside of class. I hold office hours in the lab so students can come work on their projects outside of class time as well as ask questions.</p>
        </div>

        <div className="card">
          <h3>Game Designer (Publishing Cycle 2025)</h3>
          <p><strong>Kentish Publishing Company</strong> - Houston, TX</p>
          <p><strong>May 2025 - June 2025</strong></p>
          <p>I worked as part of a team to help create a simple demo for a game, where I helped with overall game design as well as implementation of a responsive and flexible dialogue system that would suit future needs.</p>
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
