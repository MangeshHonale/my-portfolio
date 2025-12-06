export default function Project({children, title, techStack}) {
    return (
        <span>
            <h2 className="project-title">{title}</h2>
            <p className="project-desc">{children}</p>
            <p className="stack">
                <strong>Tech Stack:</strong> {techStack}
            </p>
        </span>
    );
}