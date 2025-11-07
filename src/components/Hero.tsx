import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";
import { useEffect } from "react";

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Trigger animations after component mount
    const heroElement = document.querySelector('.hero-container');
    if (heroElement) {
      heroElement.classList.add('is-animated');
    }
  }, []);

  return (
    <section className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})`,backgroundPosition: 'center 35%' }}
      />
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-32 md:mt-48 lg:mt-56">
        {/* Main Title */}
        <h1 className="hero-headline font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Graphic Designer & Freelance
        </h1>
        
        {/* Name */}
        <h2 className="hero-name font-montserrat text-2xl md:text-4xl font-bold mb-4">
          Cedric Faissal Windpouyire KONKOBO
        </h2>
        
        {/* Location */}
        <p className="hero-location font-roboto text-lg md:text-xl mb-12">
          Rabat, Maroc
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToContact}
          variant="secondary"
          size="lg"
          className="hero-cta font-montserrat text-lg px-8 py-6 rounded-xl hover:scale-[1.04] transition-transform duration-[180ms] shadow-blue-hover"
        >
          Me Contacter
        </Button>
      </div>

      {/* Animated Arrow */}
      <div className="hero-arrow absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown 
          className="text-primary cursor-pointer hover:text-blue-medium transition-colors duration-300" 
          size={52}
          onClick={scrollToWork}
        />
      </div>
    </section>
  );
};

export default Hero;