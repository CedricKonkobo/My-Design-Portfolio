import { useEffect, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

const projects = [
  { id: 1, image: project1, title: "Branding Corporate" },
  { id: 2, image: project2, title: "Design Digital" },
  { id: 3, image: project3, title: "Identité Visuelle" },
  { id: 4, image: project4, title: "Print Design" },
  { id: 5, image: project5, title: "Packaging" },
  { id: 6, image: project6, title: "Web Design" },
  { id: 7, image: project7, title: "Web Design" },
];

const WorkSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Duplicate for infinite scroll
  const duplicatedProjects = [...projects, ...projects];

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

    const element = document.querySelector('.work-slider-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="work-slider-container relative overflow-hidden py-8">
      <div 
        className={`work-slider flex gap-8 ${isVisible ? 'animate-in' : ''}`}
        style={{ width: `${duplicatedProjects.length * 320}px` }}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="flex-shrink-0 w-80 h-64 relative group cursor-pointer"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-blue-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
                <h4 className="font-montserrat font-bold text-lg">{project.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;