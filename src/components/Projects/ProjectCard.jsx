


export default function ProjectCard({ project, index }) {

 return (<div className="project-card" key={index}>
  {project.video ? (
    <video
      className="project-media"
      src={project.video}
      autoPlay
      muted
      loop
      playsInline
    />
  ) : project.image ? (
    <img
      className="project-media"
      src={project.image}
      alt={project.title}
    />
  ) : null}

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <div className="tech-stack">
    {project.tech.map((tech, i) => (
      <span key={i}>{tech}</span>
    ))}
  </div>

  <a href={project.github} target="_blank" rel="noreferrer">
    View Code →
  </a>
</div>);

}
