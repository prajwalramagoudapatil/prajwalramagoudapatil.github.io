import "./Hero.css";
import Typewriter from "../Typewriter/Typewriter";
import WaveHello from "../WaveHello/WaveHello";
import profileImage from "../../assets/profile.jpg";

const Hero = ({ onVisitTemplePage }) => {
  const technologies = [
    "Flutter Developer",
    "AI/ML Engineer",
    "Full Stack Developer"
  ];
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
         <WaveHello/> <div>  I'm <span>Prajwal Patil</span> </div>
        </h1>
        {/* <div id="tech-stack" >   </div> */}
        <h2> <Typewriter strings={technologies} /> </h2>

        <p>
          I build intelligent systems using Machine Learning, Deep Learning,
          and Generative AI. Passionate about solving real-world problems
          with scalable and impactful solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          
          <a
            href="https://github.com/prajwalramagoudapatil"
            // target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profileImage}
          alt="Prajwal"
        />
      </div>
    </section>
  );
};

export default Hero;
