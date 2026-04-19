import "./Certificates.css";

const certificatesData = [
  {
    title: "Introduction to Data Science in Python",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/7QYRX1QVUB0E",
    summary:
      "Built a solid foundation in Python-based data science workflows, including CSV handling, data cleaning, sampling, and statistical testing.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Statistical Analysis",
    ],
  },
  {
    title: "Applied Plotting, Charting & Data Representation in Python",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/Y9G4Z6SIQLVU",
    summary:
      "Focused on building effective visualizations and choosing the right chart types for communicating insights from data.",
    skills: [
      "Matplotlib",
      "Data Visualization",
      "Pandas",
      "Scatter Plots",
      "Graphing",
    ],
  },
  {
    title: "Applied Social Network Analysis in Python",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/38M61P74WDGO",
    summary:
      "Worked with graph-based data using NetworkX to analyze connectivity, centrality, and network evolution.",
    skills: [
      "Network Analysis",
      "Graph Theory",
      "Python",
      "Predictive Analytics",
      "Pandas",
    ],
  },
  {
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/QIM7QDUWYIZM",
    summary:
      "Covered core machine learning workflows including feature engineering, clustering, predictive modeling, and model evaluation.",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
      "Regression",
    ],
  },
  {
    title: "DevOps on AWS: Code, Build, and Test",
    issuer: "Amazon Web Services",
    link: "https://www.coursera.org/account/accomplishments/verify/DZ6E14OPQHN9",
    summary:
      "Explored DevOps practices on AWS, with emphasis on CI/CD, code quality workflows, testing, and deployment pipelines.",
    skills: [
      "AWS",
      "DevOps",
      "CI/CD",
      "Cloud Deployment",
      "Test Automation",
    ],
  },
  {
    title: "Applied Text Mining in Python",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/MFX9UDEKVI6M",
    summary:
      "Studied text processing and introductory NLP techniques for classification, topic grouping, and document analysis in Python.",
    skills: [
      "NLP",
      "Text Mining",
      "Scikit-learn",
      "Feature Engineering",
      "Python",
    ],
  },
  {
    title: "React Basics",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/V026Z1XTWKMZ",
    summary:
      "Strengthened core React concepts including reusable components, props, forms, and interactive UI development.",
    skills: ["React", "JavaScript", "HTML", "CSS", "UI Components"],
  },
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates-header">
        <h2>Certificates</h2>
        <p>
          A selection of certifications that shaped my foundation in data
          science, machine learning, cloud workflows, and modern frontend
          development.
        </p>
      </div>

      <div className="certificates-grid">
        {certificatesData.map((certificate) => (
          <article className="certificate-card" key={certificate.link}>
            <div className="certificate-meta">
              <span className="certificate-issuer">{certificate.issuer}</span>
            </div>

            <h3>{certificate.title}</h3>
            <p>{certificate.summary}</p>

            <div className="certificate-skills">
              {certificate.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <a href={certificate.link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
