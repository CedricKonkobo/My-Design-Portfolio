import { useState, useEffect } from "react";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // First animate the text
            setTextVisible(true);
            // Then stagger the icon animations with proper delays
            setTimeout(() => setVisibleIcons(prev => [...prev, 0]), 500);
            setTimeout(() => setVisibleIcons(prev => [...prev, 1]), 1000);
            setTimeout(() => setVisibleIcons(prev => [...prev, 2]), 1500);
          }
        });
      },
      { threshold: 0.4 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com/designer.alexandre",
      color: "hover:text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/alexandre-dubois-designer",
      color: "hover:text-secondary"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/33123456789",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 dark-section geometric-bg">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
          Contactez-moi
        </h2>

        {/* Description */}
        <div className={`contact-text max-w-2xl mx-auto mb-12 ${textVisible ? 'animate-in' : ''}`}>
          <p className="font-roboto text-lg text-primary mb-4">
            💡 Je suis disponible pour de nouveaux projets et collaborations.
          </p>
          <p className="font-roboto text-primary">
            Contactez-moi facilement via mes réseaux ou WhatsApp.
          </p>
        </div>

        {/* Social Icons */}
        <div id="contact-icons" className="flex justify-center gap-12 md:gap-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-icon group ${
                  visibleIcons.includes(index) 
                    ? 'animate-in' 
                    : ''
                }`}
                style={{ 
                  animationDelay: visibleIcons.includes(index) 
                    ? `${index * 0.5}s` 
                    : '0s' 
                }}
              >
                <div className="p-6 rounded-full bg-background shadow-lg hover:shadow-blue transition-all duration-400 ease-in-out group-hover:scale-110 group-hover:-translate-y-1">
                  <Icon 
                    size={40}
                    className={`text-primary transition-colors duration-400 ease-in-out ${social.color}`}
                  />
                </div>
                <p className="font-montserrat text-sm text-primary mt-3 group-hover:text-secondary transition-colors duration-400 ease-in-out">
                  {social.label}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;