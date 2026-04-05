import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Haryana Gaushala RAG System",
    description:
      "Built a Retrieval-Augmented Generation system using LangChain and ChromaDB to answer queries from PDF documents.",
    tech: ["Python", "LangChain", "ChromaDB", "LLM"],
    github: "https://github.com/prajwalramagoudapatil/haryana-gaushala-rag-gpt",
  },
  {
    title: "Object Localization (TensorFlow)",
    description:
      "Implemented CNN-based model for object classification and bounding box prediction using IoU metric.",
    tech: ["TensorFlow", "CNN", "Python"],
    github: "https://github.com/prajwalramagoudapatil/object-localization-tensorflow",
  },
  {
    title: "Aircraft Damage Classification",
    description:
      "Deep learning model using VGG16 and BLIP to detect aircraft damage and generate captions.",
    tech: ["Python", "VGG16", "Transformers"],
    github: "https://github.com/prajwalramagoudapatil/crack-or-dent-classification",
  },
  {
    title: "Department Chat App",
    description:
      "Real-time chat application with polls using Flutter and Firebase.",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/prajwalramagoudapatil/chatapp",
  },
  {
    title: "E-Learning Platform",
    description:
      "Web app with educational content and quizzes built using PHP and MySQL.",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/prajwalramagoudapatil/e-learning-website",
  },
  {
    title: "SEE Room Allocation System",
    description:
      "Full-stack web app to automate exam room allocation using MERN stack.",
    tech: ["React", "Node.js", "Express"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;