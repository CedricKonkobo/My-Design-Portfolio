import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.querySelector('[data-section="about"]');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      data-section="about"
      className="py-20 dark-section geometric-bg"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Layout en 2 colonnes : 70% / 30% desktop, stack mobile */}
        <div 
          className={`flex flex-col lg:flex-row lg:gap-12 gap-8 transition-all duration-[1.2s] ease-in-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Colonne gauche - 70% - Texte principal */}
          <div className="flex-1 lg:w-[70%] space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
              Qui Suis Je ?
            </h2>
            
            <div className="space-y-6 text-foreground/80 font-roboto text-lg leading-relaxed">
              <p 
                className={`transition-all duration-[1s] ease-in-out delay-300 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                Je m'appelle <span className="font-medium text-primary">Cédric </span>, j'ai <span className="font-medium text-primary">20 ans</span> et je suis passionné par le design graphique et la création visuelle. Depuis plusieurs années, je m'autoforme et j'expérimente afin de transformer mes idées en projets concrets. Mon objectif est de donner vie à des visuels qui attirent le regard et transmettent un message fort.
              </p>
              
              <p 
                className={`transition-all duration-[1s] ease-in-out delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                Grâce à mon parcours en informatique et en design, j'ai développé une double compétence : la créativité et la maîtrise technique. Cela me permet de créer des affiches percutantes et des miniatures YouTube engageantes, adaptées aux besoins de chaque client. Je m'assure que chaque projet combine esthétisme et efficacité.
              </p>
              
              <p 
                className={`transition-all duration-[1s] ease-in-out delay-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                Professionnel et attentif, je mets un point d'honneur à comprendre les attentes de mes clients et à leur livrer des résultats qui dépassent leurs espérances. Mon approche repose sur la qualité, la réactivité et une vision moderne du design.
              </p>
            </div>
          </div>

          {/* Colonne droite - 30% - Services et Outils empilés */}
          <div className="lg:w-[30%] flex-shrink-0 space-y-6">
            {/* Card Mes services */}
            <div 
              className={`bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-[1.2s] ease-in-out delay-400 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              <h3 className="font-montserrat text-xl font-bold text-primary mb-4">
                Mes services
              </h3>
              <ul className="space-y-3 font-roboto text-base" role="list">
                <li className="flex items-center text-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                  Visuels Réseaux Sociaux
                </li>
                <li className="flex items-center text-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                  Affiches Publicitaires & Evénementielles
                </li>
                <li className="flex items-center text-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                  Miniatures YouTube
                </li>
                
              </ul>
            </div>

            {/* Card Outils utilisés */}
            <div 
              className={`bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-[1.2s] ease-in-out delay-600 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-95'
              }`}
            >
              <h3 className="font-montserrat text-xl font-bold text-primary mb-4">
                Outils utilisés
              </h3>
              <ul className="space-y-3 font-roboto text-base" role="list">
                <li className="flex items-center text-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                  Photoshop
                </li>
                <li className="flex items-center text-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                  Figma
                </li>
                <li className="flex items-center text-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                  Canva
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;