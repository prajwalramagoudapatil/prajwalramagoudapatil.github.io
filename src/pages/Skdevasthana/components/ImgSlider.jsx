import { useEffect, useState } from "react";
import "../SkdevasthanaPage.css";

function ImgSlider({
  images = [],
  autoPlay = true,
  interval = 3500,
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const normalizedImages = images.map((image) =>
    typeof image === "string" ? { src: image } : image
  );

  useEffect(() => {
    if (normalizedImages.length <= 1 || !autoPlay) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % normalizedImages.length
      );
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, normalizedImages.length, interval]);

  useEffect(() => {
    if (activeIndex >= normalizedImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, normalizedImages.length]);

  if (!normalizedImages.length) {
    return (
      <div className={`img-slider img-slider-empty ${className}`.trim()}>
        <div className="img-slider-placeholder">No images added yet</div>
      </div>
    );
  }

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? normalizedImages.length - 1 : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % normalizedImages.length
    );
  };

  return (
    <div className={`img-slider ${className}`.trim()}>
      <div className="img-slider-stage">
        {normalizedImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <figure
              key={image.src || image.alt || index}
              className={`img-slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <img src={image.src} alt={image.alt || `Temple slide ${index + 1}`} />

              {(image.title || image.description) && (
                <figcaption className="img-slide-caption">
                  {image.title && <strong>{image.title}</strong>}
                  {image.description && <span>{image.description}</span>}
                </figcaption>
              )}
            </figure>
          );
        })}

        {normalizedImages.length > 1 && (
          <>
            <button
              type="button"
              className="img-slider-control img-slider-control-prev"
              onClick={showPrevious}
              aria-label="Show previous image"
            >
              {"<"}
            </button>

            <button
              type="button"
              className="img-slider-control img-slider-control-next"
              onClick={showNext}
              aria-label="Show next image"
            >
              {">"}
            </button>
          </>
        )}
      </div>

      {normalizedImages.length > 1 && (
        <div className="img-slider-dots" role="tablist" aria-label="Image slides">
          {normalizedImages.map((image, index) => (
            <button
              key={`${image.src || image.alt || "slide"}-${index}`}
              type="button"
              className={`img-slider-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImgSlider;
