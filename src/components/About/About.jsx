import "./About.css";
import developerImage from "../../assets/developer.png";
import resumeFile from "../../assets/resume.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-image">
          <img src={developerImage} alt="Prajwal Patil" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I am a Computer Science graduate with a strong interest in 
            Artificial Intelligence, Machine Learning, and Full Stack Development. 
            I enjoy building scalable applications and solving real-world problems 
            using modern technologies.
          </p>

          <p>
            I have hands-on experience working with Python, React, Node.js, and 
            various ML frameworks like TensorFlow and scikit-learn. I have also 
            built projects involving RAG pipelines, deep learning, and web applications.
          </p>

          <p>
            I am currently looking for opportunities where I can contribute, learn, 
            and grow as an AI/ML Engineer while building impactful solutions.
          </p>

          <div className="about-info">
            <div>
              <strong>Name:</strong> Prajwal Patil
            </div>
            <div>
              <strong>Email:</strong> prajwalpatil6987@gmail.com
            </div>
            <div>
              <strong>Location:</strong> India
            </div>
          </div>

          <a
            href={resumeFile}
            download
            className="btn"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
