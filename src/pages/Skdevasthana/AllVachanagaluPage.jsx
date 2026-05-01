import "./SkdevasthanaPage.css";
import vachanagalu from "./data/vachanagalu";

function AllVachanagaluPage({ theme, onToggleTheme, onBackToTemple }) {
  return (
    <div className="temple-page">
      <header className="temple-header">
        <div className="temple-shell temple-header-row">
          <div className="temple-header-copy temple-header-copy-left">
            <p className="temple-eyebrow">Shri Kadasiddheshwara Swamiji</p>
            <h1>Vachanagalu</h1>
          </div>

          <div className="temple-header-actions">
            <button
              type="button"
              className="temple-link-button temple-link-button-pill"
              onClick={onBackToTemple}
            >
              Back to Temple Page
            </button>

            <button
              type="button"
              className="temple-theme-button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <span aria-hidden="true">{theme === "dark" ? "\u2600" : "\u263e"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="temple-main">
        <section className="temple-section">
          <div className="temple-shell">
            <div className="temple-section-head temple-section-head-stack">
              <div>
                <p className="temple-section-tag">All Vachanagalu</p>
                <h3>Thoughts shared by Shri Kadasiddheshwara Swamiji</h3>
              </div>
              <p>{vachanagalu.length} vachanas are currently listed on this page.</p>
            </div>

            <div className="all-vachana-list">
              {vachanagalu.map((vachana) => (
                <article key={vachana.id} className="all-vachana-card">
                  <div className="all-vachana-meta">
                    <p className="all-vachana-number">Vachana {vachana.number}</p>
                    {vachana.showOnMainPage && (
                      <span className="all-vachana-badge">Featured on main page</span>
                    )}
                  </div>

                  <p className="all-vachana-text">{vachana.text}</p>

                  {vachana.tags.length > 0 && (
                    <div className="all-vachana-tags" aria-label="Vachana tags">
                      {vachana.tags.map((tag) => (
                        <span key={`${vachana.id}-${tag}`} className="all-vachana-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AllVachanagaluPage;
