import { useEffect, useState } from "react";
import WorkSlider from "./WorkSlider";
import WorkGrid from "./WorkGrid";

const Work = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [sliderTitleVisible, setSliderTitleVisible] = useState(false);
  const [gridTitleVisible, setGridTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.getAttribute('data-section');
            switch (target) {
              case 'main-title':
                setTitleVisible(true);
                break;
              case 'slider-title':
                setTimeout(() => setSliderTitleVisible(true), 600);
                break;
              case 'grid-title':
                setTimeout(() => setGridTitleVisible(true), 300);
                break;
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const mainTitle = document.querySelector('[data-section="main-title"]');
    const sliderTitle = document.querySelector('[data-section="slider-title"]');
    const gridTitle = document.querySelector('[data-section="grid-title"]');

    if (mainTitle) observer.observe(mainTitle);
    if (sliderTitle) observer.observe(sliderTitle);
    if (gridTitle) observer.observe(gridTitle);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-20 dark-section geometric-bg">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div 
          data-section="main-title"
          className={`text-center mb-16 ${titleVisible ? 'animate-in' : 'opacity-0'}`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Mes Réalisations
          </h2>
          <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes projets créatifs, alliant design moderne et solutions visuelles innovantes pour mes clients.
          </p>
        </div>

        {/* Infinite Slider */}
        <div className="mb-20">
          <h3 
            data-section="slider-title"
            className={`font-montserrat text-2xl font-bold text-primary text-center mb-8 ${sliderTitleVisible ? 'animate-in' : 'opacity-0'}`}
          >
            Portfolio en Mouvement
          </h3>
          <WorkSlider />
        </div>

        {/* Grid Section */}
        <div>
          <h3 
            data-section="grid-title"
            className={`font-montserrat text-2xl font-bold text-primary text-center mb-8 ${gridTitleVisible ? 'animate-in' : 'opacity-0'}`}
          >
            Projets Détaillés
          </h3>
          <WorkGrid />
        </div>
      </div>
    </section>
  );
};

export default Work;