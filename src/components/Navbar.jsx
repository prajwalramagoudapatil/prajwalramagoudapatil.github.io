import { useEffect, useState } from "react";
import { LuSun, LuMoon  } from "react-icons/lu";

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Certificates", target: "certificates" },
  { label: "Skills", target: "skills" },
  { label: "Contact", target: "contact" },
];

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backdropFilter: "blur(18px)",
    background: "color-mix(in srgb, var(--bg) 82%, transparent)",
    borderBottom: "1px solid var(--border)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "10px 20px",
    position: "relative",
  },
  brand: {
    color: "var(--text-h)",
    textDecoration: "none",
    fontFamily: "var(--nav-heading)",
    fontSize: "1.6rem",
    fontWeight: 600,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  link: {
    border: "none",
    background: "transparent",
    color: "var(--text)",
    font: "inherit",
    padding: "10px 14px",
    borderRadius: "999px",
    cursor: "pointer",
    transition:
      "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
  },
  themeButton: {
    border: "1px solid var(--border)",
    background: "var(--surface)",
    color: "var(--text-h)",
    font: "inherit",
    padding: "10px 14px",
    borderRadius: "999px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition:
      "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
    whiteSpace: "nowrap",
  },
  menuButton: {
    display: "none",
    border: "1px solid var(--border)",
    background: "transparent",
    color: "var(--text-h)",
    borderRadius: "12px",
    width: "44px",
    height: "44px",
    cursor: "pointer",
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  menuPanel: {
    position: "absolute",
    top: "calc(100% + 12px)",
    right: "20px",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "14px",
    borderRadius: "20px",
    border: "1px solid var(--border)",
    background: "var(--bg)",
    boxShadow: "var(--shadow)",
  },
  mobileLink: {
    border: "none",
    background: "transparent",
    color: "var(--text-h)",
    font: "inherit",
    textAlign: "left",
    padding: "12px 14px",
    borderRadius: "12px",
    cursor: "pointer",
  },
};

function Navbar({ theme, onToggleTheme }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (target) => {
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }

    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  const themeLabel = theme === "dark" ? "Light Theme" : "Dark Theme";
  const themeIcon = theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />;

  const handleMouseEnter = (event) => {
    event.currentTarget.style.background = "var(--accent-bg)";
    event.currentTarget.style.color = "var(--text-h)";
    event.currentTarget.style.transform = "translateY(-1px)";
  };

  const handleMouseLeave = (event, color = "var(--text)") => {
    event.currentTarget.style.background = "transparent";
    event.currentTarget.style.color = color;
    event.currentTarget.style.transform = "translateY(0)";
  };

  const desktopLinks = (
    <div style={styles.navActions}>
      <div style={styles.navLinks}>
        {navItems.map((item) => (
          <button
            key={item.target}
            type="button"
            style={styles.link}
            onClick={() => scrollToSection(item.target)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={(event) => handleMouseLeave(event)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        style={styles.themeButton}
        onClick={onToggleTheme}
        aria-label={`Switch to ${themeLabel}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(event) => handleMouseLeave(event, "var(--text-h)")}
      >
        <span aria-hidden="true" style={{ display: "inline-flex", lineHeight: 0 }}>
          {themeIcon}
        </span>
       
      </button>
    </div>
  );

  return (
    <header style={styles.header}>
      <nav className="navbar-nav" style={styles.nav} aria-label="Primary">
        <a
          href="#home"
          style={styles.brand}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("home");
          }}
        >
          &lt; Prajwal Patil &gt;
        </a>

        {isMobile ? (
          <>
            <button
              type="button"
              style={{ ...styles.menuButton, display: "inline-flex" }}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" style={{ fontSize: "20px", lineHeight: 1 }}>
                {isMenuOpen ? "X" : "="}
              </span>
            </button>

            {isMenuOpen && (
              <div id="mobile-navigation" style={styles.menuPanel}>
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    type="button"
                    style={styles.mobileLink}
                    onClick={() => scrollToSection(item.target)}
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  type="button"
                  style={styles.mobileLink}
                  onClick={() => {
                    onToggleTheme();
                    setIsMenuOpen(false);
                  }}
                  aria-label={`Switch to ${themeLabel}`}
                >
                  <span
                    aria-hidden="true"
                    style={{ display: "inline-flex", lineHeight: 0, marginRight: "8px" }}
                  >
                    {themeIcon}
                  </span>
                  {themeLabel}
                </button>
              </div>
            )}
          </>
        ) : (
          desktopLinks
        )}
      </nav>
    </header>
  );
}

export default Navbar;
