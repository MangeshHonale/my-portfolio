import { useState } from "react";
import "./App.css";
import profilePic from "./assets/profile-pic.jpeg";
import heroBanner from "./assets/hero-banner.png";
import resumeLink from "./assets/Mangesh Honale_SF_Resume.pdf";
import linkedInIcon from "./assets/LI-In-Bug.png";
import githubIcon from "./assets/github-mark.png";
import trailheadIcon from "./assets/trailhead.png";
import xIcon from "./assets/logo-black.png";
import { PROJECTS } from "./components/Slider/dataProjects";
import { SKILLSET } from "./components/SkillSet/dataSkillSet";
import { WORK_EXPERIENCE } from "./components/WorkTimeline/dataWorkExperience";
import { CERTIFICATES } from "./components/Credentials/dataCredentials";
import { calculateYearsOfExperience } from "./util";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { name: "LinkedIn", icon: linkedInIcon, url: "https://www.linkedin.com/in/honale/" },
  { name: "GitHub", icon: githubIcon, url: "https://github.com/mangeshhonale" },
  {
    name: "Trailhead",
    icon: trailheadIcon,
    url: "https://www.salesforce.com/trailblazer/honalemangesh",
  },
  { name: "X", icon: xIcon, url: "https://x.com/MangeshHonale" },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const experience = calculateYearsOfExperience();

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a href="#about" className="brand">
          MH
        </a>
        <button
          className="menu-toggle"
          onClick={() => setIsNavOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={`nav ${isNavOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setIsNavOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <img src={heroBanner} alt="Abstract banner" className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <img src={profilePic} alt="Mangesh Honale" className="avatar" />
            <div>
              <p className="eyebrow">Salesforce Application Architect & Developer</p>
              <h1>Mangesh Honale</h1>
              <p className="lead">
                I am a Salesforce certified Application Architect and Developer with extensive
                experience architecting and delivering scalable CRM solutions for enterprise
                environments. Over the years I have worked across multiple domains of the
                Salesforce ecosystem to deliver high impact projects.
              </p>
              <p className="lead">
                I hold a B.Tech in Computer Science from Vishwakarma Institute of Technology,
                Pune, and I am driven by precision, scalability, and continuous learning.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href={resumeLink} target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a className="btn ghost" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="stats-grid">
            <article>
              <h3>Experience</h3>
              <p>{experience} years</p>
            </article>
            <article>
              <h3>Primary Stack</h3>
              <p>Salesforce · LWC · Apex · JavaScript · Java · React</p>
            </article>
            <article>
              <h3>Education</h3>
              <p>Vishwakarma Institute of Technology, Pune · B.Tech (CS) · 2010 - 2014</p>
            </article>
            <article>
              <h3>Location</h3>
              <p>Pune, India</p>
            </article>
          </div>
        </section>

        <section id="experience" className="content-section">
          <h2>Work Experience</h2>
          <div className="timeline">
            {WORK_EXPERIENCE.map((role) => (
              <article key={role.title + role.company} className="panel">
                <div className="panel-head">
                  <h3>{role.title}</h3>
                  <span>{role.duration}</span>
                </div>
                <p className="meta">
                  {role.company} · {role.location}
                </p>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <h2>Featured Projects</h2>
          <div className="cards-grid">
            {PROJECTS.map((project) => (
              <article key={project.title} className="panel project-card">
                <h3>{project.title}</h3>
                {project.description.split("\n").map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="meta">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <h2>Skill Set</h2>
          <div className="cards-grid skills-grid">
            {SKILLSET.map((category) => (
              <article key={category.name} className="panel">
                <h3>{category.name}</h3>
                <div className="chip-wrap">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="content-section">
          <h2>Salesforce Credentials</h2>
          <div className="cards-grid cert-grid">
            {CERTIFICATES.map((cert) => (
              <article key={cert.name} className="panel cert-card">
                <img src={cert.logo} alt={`${cert.name} badge`} />
                <h3>{cert.name}</h3>
                <p className="meta">Issued: {cert.issuedDate}</p>
                <p className="meta">Credential ID: {cert.credentialId}</p>
                <a className="cert-link" href={cert.certLink} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <h2>Let’s Connect</h2>
          <p>
            Open to architecture consultations, Salesforce implementation opportunities, and
            collaboration on enterprise CRM transformation.
          </p>
          <div className="contact-actions">
            <a className="btn primary" href="mailto:honalemangesh@gmail.com">
              Email Me
            </a>
            <div className="socials">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
