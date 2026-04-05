import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Prajwal Patil</span>
        </h1>

        <h2>AI/ML Engineer | Full Stack Developer</h2>

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
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/profile.png"
          alt="Prajwal"
        />
      </div>
    </section>
  );
};

export default Hero;