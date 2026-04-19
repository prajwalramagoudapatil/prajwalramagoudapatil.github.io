import "./Skills.css";
import {
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiJavascript,
  SiDart,
  SiReact,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiLangchain,
  SiChromatic,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiOpenai,
  SiHuggingface,
  SiOllama
} from "react-icons/si";
import { TbApi, TbPrompt, TbVectorBezier2 } from "react-icons/tb";
import { FaCss3Alt, FaEye } from "react-icons/fa";
import { LuBrainCircuit, LuCloud, LuCloudCog, LuDatabase } from "react-icons/lu";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Computer Vision", icon: FaEye },
    ],
  },
  {
    category: "GenAI / LLM",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "RAG Pipelines", icon: LuBrainCircuit },
      { name: "ChromaDB", icon: SiChromatic },
      { name: "Ollama", icon: SiOllama },
      // { name: "FAISS", icon: TbVectorBezier2 },
      { name: "Prompt Engineering", icon: TbPrompt },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Hugging Face", icon: SiHuggingface },
      
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle SQL", icon: LuDatabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      // { name: "Docker", icon: SiDocker },
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      { name: "AWS", icon: LuCloud },
      // { name: "Azure", icon: LuCloudCog },
      // { name: "GCP", icon: SiGooglecloud },
    ],
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
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span key={skill.name} className="skill-chip">
                    <Icon className="skill-icon" aria-hidden="true" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
