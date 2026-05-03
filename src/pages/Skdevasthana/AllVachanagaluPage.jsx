import "./SkdevasthanaPage.css";
import vachanagalu from "./data/vachanagalu";
import SKNavbar from "./components/SKNavbar";

function AllVachanagaluPage({ theme, onToggleTheme, onBackToTemple }) {
  return (
    <div className="temple-page">
      <SKNavbar theme={theme} onToggleTheme={onToggleTheme} onBackToTemple={onBackToTemple} />

      <main className="temple-main">
        <section className="temple-section">
          <div className="temple-shell">
            <div className="temple-section-head temple-section-head-stack">
            
                <p className="temple-section-tag">Vachanagalu :</p> &nbsp;
                <p>Thoughts shared by Shri Kadasiddheshwara Swamiji</p>

              <div>{vachanagalu.length} vachanas are currently listed on this page.</div>
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

                  <div className="all-vachana-text">{vachana.text}</div>

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
