import { useState, useEffect, useRef } from "react";
import "./App.css";
import profilePic from "./assets/profile-pic.jpeg";
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
  { id: "about",       label: "About"       },
  { id: "experience",  label: "Experience"  },
  { id: "projects",    label: "Projects"    },
  { id: "skills",      label: "Skills"      },
  { id: "credentials", label: "Credentials" },
  { id: "contact",     label: "Contact"     },
];

const socials = [
  { name: "LinkedIn",  icon: linkedInIcon,  url: "https://www.linkedin.com/in/honale/" },
  { name: "GitHub",    icon: githubIcon,    url: "https://github.com/mangeshhonale" },
  { name: "Trailhead", icon: trailheadIcon, url: "https://www.salesforce.com/trailblazer/honalemangesh" },
  { name: "X",         icon: xIcon,         url: "https://x.com/MangeshHonale" },
];

// ─── Particle constellation canvas ────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const particles = [];
    const N = 75;
    const MAX_DIST = 145;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < N; i++) {
      particles.push({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r:  Math.random() * 1.5 + 0.6,
        a:  Math.random() * 0.45 + 0.15,
      });
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${p.a})`;
        ctx.fill();
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${0.13 * (1 - d / MAX_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={ref} className="particle-canvas" />;
}

// ─── Animated number counter ───────────────────────────────────────────────────
function Counter({ target, suffix = "", active }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start;
    const dur = 1800;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [active, target]);
  return <>{val}{suffix}</>;
}

// ─── Intersection-observer based scroll reveals ────────────────────────────────
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Typewriter ────────────────────────────────────────────────────────────────
function Typewriter({ text, delay = 0 }) {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (shown >= text.length) return;
    const t = setTimeout(() => setShown(s => s + 1), 35);
    return () => clearTimeout(t);
  }, [started, shown, text.length]);

  return (
    <span>
      {text.slice(0, shown)}
      {shown < text.length && <span className="cursor">|</span>}
    </span>
  );
}

// ─── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ tag, title }) {
  return (
    <div className="sec-head reveal">
      <span className="sec-tag">{tag}</span>
      <h2 className="sec-title">{title}</h2>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [navOpen,   setNavOpen]   = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeSec, setActiveSec] = useState("about");
  const [statsOn,   setStatsOn]   = useState(false);
  const statsRef = useRef(null);
  const experienceRaw = calculateYearsOfExperience(); // returns e.g. "11+"
  const experience = parseInt(experienceRaw, 10);      // → 11 (number for Counter)

  useReveal();

  // navbar scroll-glass effect
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // active-section tracker
  useEffect(() => {
    const els = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSec(e.target.id); }),
      { threshold: 0.25 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // stats counter trigger
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      {/* ─── NAVBAR ─────────────────────────────────────────── */}
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#about" className="nav-brand">MH</a>

        <button
          className={`burger${navOpen ? " open" : ""}`}
          onClick={() => setNavOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* Desktop nav stays inside header */}
        <nav className="nav-menu nav-desktop">
          {navItems.map(n => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={activeSec === n.id ? "active" : ""}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile overlay — outside header to escape its stacking context */}
      <nav className={`nav-mobile${navOpen ? " open" : ""}`}>
        {navItems.map(n => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={activeSec === n.id ? "active" : ""}
            onClick={() => setNavOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </nav>

      <main>
        {/* ─── HERO ──────────────────────────────────────────── */}
        <section id="about" className="hero">
          <ParticleCanvas />
          <div className="hero-radial" />

          <div className="hero-body">
            {/* avatar */}
            <div className="avatar-wrap reveal">
              <div className="ring r1" />
              <div className="ring r2" />
              <div className="ring r3" />
              <img src={profilePic} alt="Mangesh Honale" className="avatar-img" />
            </div>

            {/* text */}
            <div className="hero-text">
              <p className="hero-eyebrow reveal">
                <span className="live-dot" />
                Salesforce Application Architect &amp; Developer
              </p>
              <h1 className="hero-name reveal">
                <Typewriter text="Mangesh" delay={300} />
                <br />
                <span className="accent"><Typewriter text="Honale" delay={700} /></span>
              </h1>
              <p className="hero-bio reveal">
                I am a Salesforce certified Application Architect and Developer with extensive experience architecting and delivering scalable CRM solutions for enterprise environments. Over the years I have worked across multiple domains of the Salesforce ecosystem to deliver high impact projects. My work is focused on solving complex business challenges through clean, maintainable engineering practices and high-performance system design.
                            <br /><br />I hold a B.Tech in Computer Science from Vishwakarma Institute of Technology, Pune, where I built a strong foundation in software engineering and problem-solving. I am driven by precision, scalability, and the pursuit of continuous learning, and I am committed to delivering high-impact technology that enables organizations to operate efficiently and grow confidently.
              </p>
              <div className="hero-ctas reveal">
                <a className="btn-primary" href={resumeLink} target="_blank" rel="noreferrer">
                  View Resume
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a className="btn-outline" href="#contact">Contact Me</a>
              </div>
            </div>
          </div>

          {/* stats bar */}
          <div className="stats-bar reveal" ref={statsRef}>
            <div className="stat">
              <strong><Counter target={experience} suffix="+" active={statsOn} /></strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <strong>Salesforce · LWC · Apex · JS · Java · React</strong>
              <span>Primary Stack</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <strong>VIT Pune — B.Tech CS</strong>
              <span>Education · 2010–2014</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <strong>📍 Pune, India</strong>
              <span>Location</span>
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ────────────────────────────────────── */}
        <section id="experience" className="sec">
          <div className="container">
            <SectionHeading tag="Career" title="Work Experience" />
            <div className="timeline">
              {WORK_EXPERIENCE.map((role, i) => (
                <div
                  key={role.title + role.company}
                  className="tl-entry reveal"
                  style={{ "--d": `${i * 0.1}s` }}
                >
                  <div className="tl-dot" />
                  <article className="tl-card">
                    <div className="tl-top">
                      <div>
                        <h3 className="tl-role">{role.title}</h3>
                        <p className="tl-company">{role.company} · {role.location}</p>
                      </div>
                      <span className="tl-duration">{role.duration}</span>
                    </div>
                    <ul className="tl-bullets">
                      {role.responsibilities.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROJECTS ──────────────────────────────────────── */}
        <section id="projects" className="sec sec-alt">
          <div className="container">
            <SectionHeading tag="Portfolio" title="Featured Projects" />
            <div className="proj-grid">
              {PROJECTS.map((proj, i) => (
                <article
                  key={proj.title}
                  className="proj-card reveal"
                  style={{ "--d": `${i * 0.08}s` }}
                >
                  <div className="proj-glow" />
                  <span className="proj-num">0{i + 1}</span>
                  <h3 className="proj-title">{proj.title}</h3>
                  <div className="proj-desc">
                    {proj.description.split("\n").map((l, j) => <p key={j}>{l}</p>)}
                  </div>
                  <div className="proj-chips">
                    {proj.techStack.split(/[·,]/).map(t => (
                      <span key={t} className="chip-tech">{t.trim()}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SKILLS ────────────────────────────────────────── */}
        <section id="skills" className="sec">
          <div className="container">
            <SectionHeading tag="Expertise" title="Skill Set" />
            <div className="skills-grid">
              {SKILLSET.map((cat, i) => (
                <article
                  key={cat.name}
                  className="skill-card reveal"
                  style={{ "--d": `${i * 0.07}s` }}
                >
                  <h3 className="skill-cat">{cat.name}</h3>
                  <div className="skill-chips">
                    {cat.skills.map((s, j) => (
                      <span
                        key={s}
                        className="chip-skill"
                        style={{ "--cd": `${j * 0.04}s` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CREDENTIALS ───────────────────────────────────── */}
        <section id="credentials" className="sec sec-alt">
          <div className="container">
            <SectionHeading tag="Achievements" title="Salesforce Credentials" />
            <div className="certs-grid">
              {CERTIFICATES.map((cert, i) => (
                <article
                  key={cert.name}
                  className="cert-card reveal"
                  style={{ "--d": `${i * 0.06}s` }}
                >
                  <div className="cert-img-wrap">
                    <img src={cert.logo} alt={cert.name + " badge"} />
                  </div>
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-meta">Issued: {cert.issuedDate}</p>
                  <p className="cert-meta">ID: {cert.credentialId}</p>
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                  >
                    Verify Certificate →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ───────────────────────────────────────── */}
        <section id="contact" className="sec contact-sec">
          <div className="contact-glow" />
          <div className="container contact-inner">
            <div className="contact-text reveal">
              <span className="sec-tag">Get In Touch</span>
              <h2 className="contact-heading">
                Let's Build<br />
                <span className="accent">Something Great</span>
              </h2>
              <p className="contact-sub">
                Open to architecture consultations, Salesforce implementation
                opportunities, and collaboration on enterprise CRM transformation.
              </p>
            </div>
            <div className="contact-right reveal">
              <a className="btn-primary btn-email" href="mailto:honalemangesh@gmail.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                honalemangesh@gmail.com
              </a>
              <div className="socials">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label={s.name}
                  >
                    <img src={s.icon} alt={s.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Mangesh Honale</span>
      </footer>
    </div>
  );
}
