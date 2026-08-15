import Link from "next/link";

export default function ProjectCard({ title, category, description, className = "" }) {
  return (
    <Link href="/contact" className={`project-card ${className}`}>
      <div className="project-preview">
        <div className="mock-window">
          <div className="mock-bar"><i /><i /><i /></div>
          <div className="mock-content">
            <span />
            <span />
            <span />
            <b />
          </div>
        </div>
        <div className="project-glow" />
      </div>
      <div className="project-info">
        <div>
          <span>{category}</span>
          <h3>{title}</h3>
        </div>
        <b>↗</b>
      </div>
      <p>{description}</p>
    </Link>
  );
}