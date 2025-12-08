import './QuickIntro.css';
/*import linkedInIcon from '../../assets/LI-In-Bug.png';
import githubIcon from '../../assets/github-mark.png';
import xIcon from '../../assets/logo-black.png';  */

export default function QuickIntro() {
  return (
    <aside className="quick-stats hero-quick-stats">
            <h2 className="quick-stats-title">Quick Intro</h2>
            <div className="stat-row">
              <span className="stat-label">Experience</span>
              <span className="stat-value">11+ years</span>
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
                  <a href="https://www.linkedin.com/in/honale/" target='_blank'>LinkedIn</a>
               · <a href="https://github.com/MangeshHonale" target='_blank'>Github</a>
               · <a href="https://www.salesforce.com/trailblazer/honalemangesh" target='_blank'>Trailhead</a>
               · <a href="https://x.com/MangeshHonale" target='_blank'>X</a>
               </span>
            </div>
          </aside>
    );
  }