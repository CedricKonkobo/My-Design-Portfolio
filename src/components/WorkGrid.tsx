import { useState, useEffect } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

const projects = [
  { 
    id: 1, 
    image: project1, 
    title: "Logo Design Tech Startup",
    description: "Création d'une identité visuelle moderne pour une startup technologique innovante, incluant logo, charte graphique et déclinaisons."
  },
  { 
    id: 2, 
    image: project2, 
    title: "Branding Package",
    description: "Package complet de branding avec cartes de visite, papeterie et supports de communication cohérents."
  },
  { 
    id: 3, 
    image: project3, 
    title: "Creative Poster Design",
    description: "Série d'affiches créatives utilisant la typographie moderne et des formes géométriques pour un impact visuel fort."
  },
  { 
    id: 4, 
    image: project4, 
    title: "Website UI/UX",
    description: "Conception d'interface utilisateur intuitive et moderne pour une expérience web optimale."
  },
  { 
    id: 5, 
    image: project5, 
    title: "Social Media Campaign",
    description: "Templates cohérents pour campagne social media avec identité visuelle forte et engageante."
  },
  { 
    id: 6, 
    image: project6, 
    title: "Package Design",
    description: "Design packaging premium alliant esthétique moderne et fonctionnalité pour valoriser le produit."
  },
  { 
    id: 7, 
    image: project7, 
    title: "Package Design",
    description: "Design packaging premium alliant esthétique moderne et fonctionnalité pour valoriser le produit."
  },
];

const WorkGrid = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    projects.forEach((_, index) => {
      const element = document.querySelector(`[data-index="${index}"]`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openProject = (projectId: number) => {
    // Simulation d'ouverture de page projet
    console.log(`Opening project ${projectId}`);
  };

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 py-12 space-y-8">
      {projects.map((project, index) => (
    <div
      key={project.id}
      data-index={index}
      className={`work-grid-item break-inside-avoid transform scale-[0.8] ${visibleItems.includes(index) ? 'animate-in' : ''}`}
      style={{
        animationDelay: visibleItems.includes(index) ? `${index * 0.3}s` : '0s'
      }}
      onClick={() => openProject(project.id)}
    >
      <div className="relative group cursor-pointer rounded-xl overflow-hidden bg-white shadow-lg">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-400 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out" />
      </div>
    </div>
      ))}
    </div>
  );
};

export default WorkGrid;