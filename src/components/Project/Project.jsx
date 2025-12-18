export default function Project({ children, title, techStack }) {
  return (
    <span>
      <h2 className="project-title">{title}</h2>
      {children.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p className="stack">
        <strong>Tech Stack:</strong> {techStack}
      </p>
    </span>
  );
}
