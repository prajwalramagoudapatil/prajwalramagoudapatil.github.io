import { useEffect, useState } from "react";
import "../SkdevasthanaPage.css";

function VachanaSlider({ entries = [], autoPlay = true, interval = 6500 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (entries.length <= 1 || !autoPlay) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % entries.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, entries.length, interval]);

  useEffect(() => {
    if (activeIndex >= entries.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, entries.length]);

  if (!entries.length) {
    return null;
  }

  const activeEntry = entries[activeIndex];

  return (
    <div className="vachana-slider">
      <div className="vachana-slider-head">
        <p className="temple-section-tag">Featured Vachanagalu</p>
        <span className="vachana-slider-count">
          {activeIndex + 1} / {entries.length}
        </span>
      </div>

      <article className="vachana-slider-card">
        <p className="vachana-slider-number">Vachana {activeEntry.number}</p>
        <p className="vachana-slider-text">{activeEntry.text}</p>
      </article>

      {entries.length > 1 && (
        <div className="vachana-slider-dots" role="tablist" aria-label="Featured vachana slides">
          {entries.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              className={`vachana-slider-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show vachana ${entry.number}`}
              aria-selected={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VachanaSlider;
