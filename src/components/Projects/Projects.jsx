import React from "react";
import "./Projects.css";

const projectsData = [

  {
    title: "AI Agent CRM for HCP Interactions",
    description:
      "Built an AI-powered CRM system for pharmaceutical sales representatives to log, summarize, and manage HCP interactions using LangGraph agents. The application extracts structured information from natural language, generates summaries with Groq LLMs, resolves HCP records, and stores interactions in PostgreSQL through a FastAPI backend.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Groq",
      "PostgreSQL",
      "React",
      "Redux",
      "Tailwind CSS"
    ],
    github: "https://github.com/prajwalramagoudapatil/ai-agent-crm-hcp",
    // image: "/projects/crm-hcp.png",
    // video: "/projects/crm-hcp.mp4",
    demo: "https://youtu.be/23kgjpcb71U?si=IiHjmWCUBhSstC3x",
  },
  {
    title: "LLM Fine-Tuning with LoRA",
    description:
      "Fine-tuned an open-source Large Language Model using LoRA and Hugging Face PEFT in Google Colab. Prepared datasets, configured training with Transformers, evaluated model performance, and demonstrated efficient parameter-efficient fine-tuning for domain-specific tasks.",
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "PEFT",
      "LoRA",
      "Google Colab"
    ],
    github: "https://colab.research.google.com/drive/1fGVba6kd19y5ZUGU6y7bUYO1XYuznJeP?usp=sharing",
    // image: "/projects/lora-finetuning.png",
    // video: "/projects/lora-finetuning.mp4",
  },
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

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;