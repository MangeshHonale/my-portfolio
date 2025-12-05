import './QuickIntro.css';

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
              <span className="stat-value">Salesforce · LWC · Apex · JavaScript · Java</span>
            </div>

            <div className="stat-row">
              <span className="stat-label">Focus Areas</span>
              <span className="stat-value">Architecture · Integrations · Automation</span>
            </div>

            <div className="stat-row">
              <span className="stat-label">Location</span>
              <span className="stat-value">Pune, India</span>
            </div>
          </aside>
    );
  }