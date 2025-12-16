import './NavigationBar.css';

export default function NavigationBar({onMenuClick}){
    return (
        <nav className="nav-links">
          <a href="#top">Home</a>
          <a href="#about-me" onClick={onMenuClick} id="about-me">About Me</a>
          <a href="#experience" onClick={onMenuClick} id="experience">Experience</a>
          <a href="#projects" onClick={onMenuClick} id="projects">Projects</a>
          <a href="#credentials" onClick={onMenuClick} id="credentials">Credentials</a>
        </nav>
    );
}