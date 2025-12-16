import './QuickIntro.css';
import linkedInIcon from '../../assets/LI-In-Bug.png';
import githubIcon from '../../assets/github-mark.png';
import trailheadIcon from '../../assets/trailhead.png';
import xIcon from '../../assets/logo-black.png';
import { calculateYearsOfExperience } from '../../util.js'; 

export default function QuickIntro() {
  const experience = calculateYearsOfExperience();
  const socials = [
    {
      name: "LinkedIn",
      icon: linkedInIcon,
      url: "https://www.linkedin.com/in/honale/",
    },
    {
      name: "GitHub",
      icon: githubIcon,
      url: "https://github.com/mangeshhonale",
    },
    {
      name: "Trailhead",
      icon: trailheadIcon,
      url: "https://www.salesforce.com/trailblazer/honalemangesh",
    },
    {
      name: "X",
      icon: xIcon,
      url: "https://x.com/MangeshHonale",
    }
  ];
  return (
    <aside className="quick-stats hero-quick-stats">
      <h2 className="quick-stats-title">Quick Intro</h2>
      <div className="stat-row">
        <span className="stat-label">Experience</span>
        <span className="stat-value">{experience} years</span>
      </div>

      <div className="stat-row">
        <span className="stat-label">Primary Stack</span>
        <span className="stat-value">Salesforce · LWC · Apex · JavaScript · Java · React</span>
      </div>

      <div className="stat-row">
        <span className="stat-label">Focus Areas</span>
        <span className="stat-value">Architecture · Solution Design · Development</span>
      </div>

      <div className="stat-row">
        <span className="stat-label">Education</span>
        <span className="stat-value">Vishwakarma Institue of Technology, Pune · B.Tech (CS)</span>
        <span className="stat-value">2010 - 2014</span>
      </div>

      <div className="stat-row">
        <span className="stat-label">Location</span>
        <span className="stat-value">Pune, India</span>
      </div>

      <div className="stat-row">
        <span className="stat-label">Socials</span>
        <span className="stat-value">
          <div className="social-icons">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-icon"
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </span>
      </div>
    </aside>
  );
}