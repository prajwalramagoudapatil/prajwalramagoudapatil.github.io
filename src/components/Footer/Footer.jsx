import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";


const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/prajwalramagoudapatil",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prajwal-ramagouda-patil/",
    icon: <FaLinkedin />,
  },

  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Prajwal_R_Patil/",
    icon: <SiLeetcode />,
  },

  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/prajwalpatil6987",
    icon: <FaHackerrank />,
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
              {/* <span>{link.label}</span> */}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
