import '../Slider/Slider.css';

export default function Slide({ children, title, techStack }) {
    return (
        <div className="slide">
            <h2 className="project-title">{title}</h2>
            <p className="project-desc">{children}</p>
            <p className="stack">
                <strong>Tech Stack:</strong> {techStack}
            </p>
        </div>
    );
}