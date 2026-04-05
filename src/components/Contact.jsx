
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
          <h3>Get in Touch</h3>
          <p>Email: prajwalpatil6987@gmail.com</p>
          <p>Phone: +91 8088756029</p>
          <p>Location: India</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 10%",
    backgroundColor: "#020617",
    color: "white",
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
    border: "none",
    outline: "none",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#38bdf8",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
  },
  info: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
};

export default Contact;