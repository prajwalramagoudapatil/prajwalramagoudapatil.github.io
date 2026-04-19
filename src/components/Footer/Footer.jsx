import "./Footer.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/prajwalramagoudapatil",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.58.69.48A10.22 10.22 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prajwal-ramagouda-patil/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.6 18.4h2.67V9.55H5.6V18.4Zm4.34 0h2.67v-4.93c0-1.3.24-2.56 1.84-2.56 1.57 0 1.59 1.47 1.59 2.64v4.85h2.67V13c0-2.65-.57-4.68-3.67-4.68-1.49 0-2.48.82-2.89 1.59h-.04V9.55H9.94c.03.71 0 8.85 0 8.85Z"
        />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copy">
          <p className="footer-eyebrow">Designed and Developed by </p>
          <h2>Prajwal Patil</h2>
          {/* <p>
            Open to software, full stack, and AI/ML opportunities. Let&apos;s
            build something meaningful together.
          </p> */}
        </div>

        <div className="footer-details">
          <a href="mailto:prajwalpatil6987@gmail.com">
            prajwalpatil6987@gmail.com
          </a>
          <a href="tel:+918088756029">+91 8088756029</a>
          <span>India</span>
        </div>

        <div className="footer-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="footer-social-link"
            >
              <span className="footer-social-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
