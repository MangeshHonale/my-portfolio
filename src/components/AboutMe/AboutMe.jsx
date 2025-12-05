import profilePic from "../../assets/profile-pic.jpeg";
import QuickIntro from "../QuickIntro/QuickIntro";
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className="hero-inner">
            <div className="hero-main">
                <div className="profile-pic">
                    <img src={profilePic} alt="Mangesh Honale" />
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">Mangesh Honale</h1>
                    <p className="hero-subtitle">Salesforce Architect & Developer</p>

                    <p className="hero-intro">
                        I build scalable Salesforce solutions, high-quality LWC experiences,
                        and robust integrations that help teams move faster and ship with confidence.
                    </p>
                    <div className="hero-actions">
                        <a href="#" className="btn btn-primary">Download Resume</a>
                        <a href="#contact" className="btn btn-ghost">Contact / Hire Me</a>
                    </div>
                </div>
            </div>
            <QuickIntro />
        </div>
    );
}