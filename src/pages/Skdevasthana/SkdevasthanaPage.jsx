// import {  useState } from "react";
import "./SkdevasthanaPage.css";
import img_100_old from "../../assets/skp/100_old_painting.jpg";
import img_101 from "../../assets/skp/101.jpg";
import img_102 from "../../assets/skp/102.jpg";
import img_103 from "../../assets/skp/103.jpg";
import img_104 from "../../assets/skp/104.jpg";
import ImgSlider from "./components/ImgSlider";
import VachanaSlider from "./components/VachanaSlider";
import Footer from "./components/Footer";
import { featuredVachanagalu } from "./data/vachanagalu";

const imgs = [
  {
    src: img_100_old,
    alt: "Historic painting of Shri Kalmeshwar Devasthana",
  },
  {
    src: img_101,
    alt: "Temple view of Shri Kalmeshwar Devasthana",
  },
  {
    src: img_102,
    alt: "Temple surroundings at Shri Kalmeshwar Devasthana",
  },
  {
    src: img_103,
    alt: "Devotional view from Shri Kalmeshwar Devasthana",
  },
  {
    src: img_104,
    alt: "Another view of Shri Kalmeshwar Devasthana",
  },
];

const highlights = [
  {
    label: "Darshan Timings",
    value: "5:00 AM - 12:00 PM, 5:00 PM - 10:30 PM",
  },
  {
    label: "Location",
    value: "Bastawad, Taluk: Hukkeri, Belagavi, Karnataka",
  },
  {
    label: "Festival Focus",
    value: "Jatre: Ugadi",
  },
];

const galleryItems = [
  "Temple exterior image placeholder",
  "Deity or garbhagudi image placeholder",
  "Festival celebration image placeholder",
  "Annadanam or community event image placeholder",
];

const sevaItems = [
  {
    title: "Daily Pooja",
    copy: "Morning pooja at 9:00 am. Evening pooja at 8:30 pm",
  },
  {
    title: "Special Festival Seva",
    copy: "Anna Prasada is served on Amavasya, usually from 10:00 am to 3:30 pm.",
  },
  {
    title: "Visitor Guidance",
    copy: "Please follow the traditional dress code to help maintain a peaceful and respectful atmosphere within the temple premises.",
  },
];

const importantNotice = {
  label: "Important Notice",
};

function SkdevasthanaPage({ theme, onToggleTheme, onViewAllVachanagalu }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const scrollToSection = (target) => {
  //   if (target === "home") {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     // setIsMenuOpen(false);
  //     return;
  //   }

  //   const section = document.getElementById(target);

  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }

  //   // setIsMenuOpen(false);
  // };

  return (
    <div className="temple-page">
      <header className="temple-header">
        <div className="temple-shell temple-header-row">
          <div className="temple-header-copy">
            <h1>
              <span className="temple-title-desktop">Shri Kadasiddheshwar Devasthana</span>
              <span className="temple-title-mobile">SK Devasthana</span>
            </h1>
          </div>

          <button
            type="button"
            className="temple-theme-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "\u2600" : "\u263e"}</span>
          </button>
        </div>
      </header>

      <main className="temple-main">
        <section className="temple-hero">
          <div className="temple-shell temple-hero-grid">
            <div className="temple-hero-copy">
              <p className="temple-eyebrow">Sacred place for worship and community</p>
              <h2>Welcome to a calm, devotional temple website</h2>
              <p className="temple-lead">
                This Website is intentionally <u> static and under development</u>.
                It provides information on the temple&apos;s history, deity details,
                timings, celebrations, trust information, and visitor guidance.
              </p>

              {/* <div className="temple-actions">
                <button onClick={() => scrollToSection("contact")} className="temple-cta temple-cta-primary">
                  Contact & Location
                </button>
                <button onClick={() => scrollToSection("gallery")} className="temple-cta temple-cta-secondary">
                  View Image Slots
                </button>
              </div> */}

              <div className="temple-highlight-grid">
                {highlights.map((item) => (
                  <article key={item.label} className="temple-highlight-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <aside className="temple-feature-card">
              <div className="temple-image-tall">
                <ImgSlider images={imgs} interval={3500} />
              </div>
            </aside>
          </div>
        </section>{" "}
        {/* Hero */}

        <section className="temple-notice-section" aria-label="Important notice">
          <div className="temple-shell">
            <aside className="temple-notice-card">
              <p className="temple-notice-label">{importantNotice.label}</p>
              <p className="temple-notice-message">
                Please send photos of the temple and festivals on{" "}
                <a
                  href="https://wa.me/918088756029"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>{" "}
                so they can be added to the website gallery.
              </p>
            </aside>
          </div>
        </section>

        <section className="temple-section temple-vachana-section" aria-label="Featured vachanagalu">
          <div className="temple-shell temple-section-shell">
            <div className="temple-section-intro">
              <p className="temple-section-tag">Vachanagalu</p>
            </div>

            <div className="temple-vachana-layout">
              <div className="temple-vachana-copy">
                <h3>Selected vachanas from Shri Kadasiddheshwara Swamiji</h3>
                <p>
                  A few important vachanas are shown here in rotation. You can open
                  the full page to read all the vachanas one below the other.
                </p>

                <button
                  type="button"
                  className="temple-link-button temple-link-button-pill"
                  onClick={onViewAllVachanagalu}
                >
                  View All Vachanagalu
                </button>
              </div>

              <VachanaSlider entries={featuredVachanagalu} />
            </div>
          </div>
        </section>

        <section className="temple-section" id="about">
          <div className="temple-shell temple-section-shell">
            <div className="temple-section-intro">
              <p className="temple-section-tag">About The Temple</p>
            </div>

            <div className="temple-two-column">
              <div>
                <h3>History, identity, and spiritual significance</h3>
                <p>
                  Add the temple&apos;s story here: when it was established, who the
                  presiding deity is, how devotees connect with the devasthana,
                  and what makes this place important locally.
                </p>
                <p>
                  This is also a good place for architecture notes, oral history,
                  and details of the managing trust or committee.
                </p>
              </div>

              <div className="temple-info-card">
                <h4>Quick Information</h4>
                <ul>
                  <li>Deity: Shri Kadasiddheshwara</li>
                  <li>Trust / Committee: Shri Kadasiddhshwar Devasthan Trust Committee</li>
                  <li>Nearest town: Hukkeri</li>
                  <li>Best visiting season: All seasons</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="temple-section temple-section-muted" id="gallery">
          <div className="temple-shell temple-section-shell">
            <div className="temple-section-intro">
              <p className="temple-section-tag">Gallery</p>
              <h3>Image placeholders ready for real temple photos</h3>
              <p className="temple-notice-message">
                Please send photos of the temple and festivals on{" "}
                <a
                  href="https://wa.me/918088756029"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>{" "}
                so they can be added to the website gallery.
              </p>
            </div>

            <div className="temple-gallery-grid">
              {galleryItems.map((item) => (
                <div key={item} className="temple-image-placeholder">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="temple-section" id="darshan">
          <div className="temple-shell temple-section-shell">
            <div className="temple-section-intro">
              <p className="temple-section-tag">Seva & Darshan</p>
            </div>

            <div className="temple-cards-grid">
              {sevaItems.map((item) => (
                <article key={item.title} className="temple-detail-card">
                  <p className="temple-card-tag">{item.title}</p>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="temple-section temple-section-accent" id="events">
          <div className="temple-shell temple-section-shell">
            <div className="temple-section-intro">
              <p className="temple-section-tag">Festivals & Events</p>
            </div>

            <div className="temple-two-column">
              <div>
                <h3>Annual celebrations and recurring rituals</h3>
                <p>
                  Important festival dates, pooja schedules, jatre details,
                  and recurring observances here.
                </p>
              </div>

              <div className="temple-schedule-card">
                <div className="temple-schedule-item">
                  <span>Event 01</span>
                  <strong>Vijaya Dashami Pallakki Utsava</strong>
                  <p>Shri Kadasiddheshwar&apos;s pallakki utsava travels around the village, visiting many gadigi's during Vijaya Dashami.</p>
                </div>
                <div className="temple-schedule-item">
                  <span>Event 02</span>
                  <strong>Depavali Padya Pallakki Utsava</strong>
                  <p>Shri Kadasiddheshwar&apos;s pallakki utsava travels around the village, visiting many gadigi's during Depavali.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="temple-section" id="contact">
          <div className="temple-shell temple-section-shell">
            <div className="temple-section-intro">
              <p className="temple-section-tag">Contact</p>
            </div>

            <div className="temple-two-column">
              <div>
                <h3>Temple office and visitor support</h3>
                <p>
                  Phone numbers, address, <br />
                  email, location pin, and office hours.
                </p>
              </div>

              <div className="temple-contact-card">
                <p><strong>Address:</strong> Bastawad, Hukkeri, Karnataka, 591309</p>
                <p><strong>Phone:</strong> 8088XXXX29 <a href="tel:8088756029">Call</a></p>
                <p><strong>Email:</strong> contact@skdevasthana.com</p>
                <p><strong>Map Link:</strong> <a href="https://maps.app.goo.gl/GdaHsCB7tByWUyC37" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
                <p><strong>Office Hours:</strong> 8:30 AM - 8:30 PM</p>
                <p><strong>WhatsApp: </strong> <a href="https://wa.me/918088756029" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SkdevasthanaPage;
