import "./SkdevasthanaPage.css";
import img_100_old from '../../assets/skp/100_old_painting.jpg';
import img_101 from '../../assets/skp/101.jpg';
import img_102 from '../../assets/skp/102.jpg';
import img_103 from '../../assets/skp/103.jpg';
import img_104 from '../../assets/skp/104.jpg';
import ImgSlider from "./components/ImgSlider";

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
    copy: "Anna Prasad on Amavasya.",
  },
  {
    title: "Visitor Guidance",
    copy: "Use this for dress code, prasada timings, parking, and temple etiquette.",
  },
];

function SkdevasthanaPage({ theme, onToggleTheme }) {
  return (
    <div className="temple-page">
      <header className="temple-header">
        <div className="temple-shell temple-header-row">
          

          <div className="temple-header-copy">
            <h1>Shri Kadasiddheshwar Devasthana</h1>
          </div>

          <button
            type="button"
            className="temple-theme-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
        </div>
      </header>

      <main className="temple-main">
        <section className="temple-hero">
          <div className="temple-shell temple-hero-grid">
            <div className="temple-hero-copy">
              <p className="temple-eyebrow">Sacred place for worship and community</p>
              <h2>Welcome to a calm, devotional temple website experience</h2>
              <p className="temple-lead">
                This page is intentionally static and React-based. Replace the
                placeholder content with temple history, deity information,
                timings, celebrations, trust details, and visitor guidance.
              </p>

              <div className="temple-actions">
                <a href="#contact" className="temple-cta temple-cta-primary">
                  Contact Placeholders
                </a>
                <a href="#gallery" className="temple-cta temple-cta-secondary">
                  View Image Slots
                </a>
              </div>

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
        </section> { /* Hero */ }


        <section className="temple-section" id="about">
          <div className="temple-shell temple-two-column">
            <div>
              <p className="temple-section-tag">About The Temple</p>
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
                <li>Deity: Placeholder name</li>
                <li>Trust / Committee: Placeholder details</li>
                <li>Nearest town: Placeholder</li>
                <li>Best visiting season: Placeholder</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="temple-section temple-section-muted" id="gallery">
          <div className="temple-shell">
            <div className="temple-section-head">
              <div>
                <p className="temple-section-tag">Gallery</p>
                <h3>Image placeholders ready for real temple photos</h3>
              </div>
              <p>
                Each card below can be replaced later with imported images from
                the page folder.
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
          <div className="temple-shell temple-cards-grid">
            {sevaItems.map((item) => (
              <article key={item.title} className="temple-detail-card">
                <p className="temple-section-tag">{item.title}</p>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="temple-section temple-section-accent" id="events">
          <div className="temple-shell temple-two-column">
            <div>
              <p className="temple-section-tag">Festivals & Events</p>
              <h3>Space for annual celebrations and recurring rituals</h3>
              <p>
                Add important festival dates, pooja schedules, jatre details,
                and recurring observances here.
              </p>
            </div>

            <div className="temple-schedule-card">
              <div className="temple-schedule-item">
                <span>Event 01</span>
                <strong>Placeholder annual festival</strong>
                <p>Replace with date, significance, and schedule summary.</p>
              </div>
              <div className="temple-schedule-item">
                <span>Event 02</span>
                <strong>Placeholder monthly or weekly pooja</strong>
                <p>Replace with repeating ritual details and devotee notes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="temple-section" id="contact">
          <div className="temple-shell temple-two-column">
            <div>
              <p className="temple-section-tag">Contact</p>
              <h3>Temple office and visitor support</h3>
              <p>
                Replace these placeholders with real phone numbers, address,
                email, location pin, and office hours.
              </p>
            </div>

            <div className="temple-contact-card">
              <p><strong>Address:</strong> Placeholder full address</p>
              <p><strong>Phone:</strong> Placeholder contact number</p>
              <p><strong>Email:</strong> Placeholder email address</p>
              <p><strong>Map Link:</strong> Placeholder URL</p>
              <p><strong>Office Hours:</strong> Placeholder schedule</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SkdevasthanaPage;
