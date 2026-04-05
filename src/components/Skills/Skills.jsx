import "./Skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "Dart"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Django", "REST APIs"],
  },
  {
    category: "AI / ML",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "PyTorch",
      "Computer Vision",
    ],
  },
  {
    category: "GenAI / LLM",
    skills: [
      "LangChain",
      "RAG Pipelines",
      "ChromaDB",
      "FAISS",
      "Prompt Engineering",
    ],
  },
  {
    category: "Database & Tools",
    skills: ["MySQL", "Oracle SQL", "Firebase", "Git", "Docker"],
  },
  {
    category: "Cloud & Deployment",
    skills: ["AWS", "Azure", "GCP"],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skillsData.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>{group.category}</h3>

            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;