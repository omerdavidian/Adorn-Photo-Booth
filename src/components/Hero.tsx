import React, {useState, useEffect} from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Create Unforgettable",
      highlight: "Memories",
      subtitle: "Fun, creative photo booth experiences for weddings, parties, corporate events, and special occasions.",
      backgroundImage: "/photos/St1.webp",
    },
    {
      id: 2,
      title: "Capture Pure Joy &",
      highlight: "Laughter",
      subtitle: "Professional photo booth services that bring out genuine smiles and spontaneous moments at every celebration.",
      backgroundImage: "/photos/20190320_200453_085__MG_6214.webp",
      backgroundPosition: "center 30%",
    },
    {
      id: 3,
      title: "Make Your Event",
      highlight: "Extraordinary",
      subtitle: "Transform any gathering into an unforgettable experience with our premium photo booth services.",
      backgroundImage: "/photos/AdobeStock_75068225.webp",
      backgroundPosition: "center 35%",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Trigger initial animation after a brief delay
    const initTimeout = setTimeout(() => {
      setIsInitialized(true);
    }, 50);

    const interval = setInterval(nextSlide, 7000);

    return () => {
      clearTimeout(initTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="hero" className="hero-slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide && isInitialized ? "active" : ""} ${index % 2 === 0 ? "zoom-in" : "zoom-out"}`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundPosition: slide.backgroundPosition || "center",
          }}>
          <div className="slide-overlay" />
          <div className="slide-content">
            <div className="slide-text-wrapper">
              <h1 className="slide-title">
                {slide.title} <span className="slide-highlight">{slide.highlight}</span>
              </h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="slide-buttons">
                <button onClick={scrollToContact} className="slide-button primary">
                  Book Your Event
                </button>
                <button onClick={() => document.getElementById("gallery")?.scrollIntoView({behavior: "smooth"})} className="slide-button secondary">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button key={index} className={`indicator ${index === currentSlide ? "active" : ""}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
