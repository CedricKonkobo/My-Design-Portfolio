import { useEffect, useState } from "react";

const Footer = () => {
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
      { threshold: 0.4 }
    );

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      id="footer" 
      className="dark-section py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <div className={`footer-content ${isVisible ? 'animate-in' : ''}`}>
          {/* Main Footer Text */}
          <p className="font-roboto text-lg mb-4">
            © 2025 Alexandre Dubois — Portfolio. Tous droits réservés.
          </p>
          
          {/* Subtitle */}
          <p className="font-roboto text-sm opacity-80">
            Design et code avec passion 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;