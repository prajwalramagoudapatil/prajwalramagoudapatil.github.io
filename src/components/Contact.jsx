
const Contact = () => {
  return (
    <section style={styles.section} id="contact">
      <h2 style={styles.heading}>Contact Me</h2>

      <div style={styles.container}>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        <div style={styles.info}>
          <h3 style={styles.infoHeading}>Get in Touch</h3>
          <p style={styles.p}>Email: prajwalpatil6987@gmail.com</p>
          <p style={styles.p}>Phone: +91 8088756029</p>
          <p style={styles.p}>Location: India</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 10%",
    backgroundColor: "var(--section-bg)",
    color: "var(--text-h)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "40px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  form: {
    flex: "1",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "var(--surface)",
    color: "var(--text-h)",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "var(--surface)",
    color: "var(--text-h)",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "var(--accent)",
    color: "var(--button-text)",
    fontWeight: "bold",
    cursor: "pointer",
  },
  info: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
  infoHeading: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
  p: {
    fontSize: "1.3rem",
    marginBottom: "8px",
  }
};

export default Contact;
