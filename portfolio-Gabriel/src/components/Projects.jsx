import { useState, useEffect, useRef } from 'react';

function Projects({ projects }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      className="projects-section" 
      ref={sectionRef}
      aria-labelledby="projects-title"
      role="region"
    >
      <div className="container">
        <div className="projects-header">
          <h2 id="projects-title" className="section-title">🌟 Proyectos Principales</h2>
          <p className="projects-subtitle">
            Explora mis desarrollos más destacados donde combino tecnología e innovación
          </p>
        </div>
        
        <div 
          className={`projects-showcase ${isVisible ? 'fade-in' : ''}`}
          aria-label="Lista de proyectos"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card-modern"
              tabIndex="0"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="project-header">
                <div className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-status" aria-label="Estado del proyecto: Completado">
                  <span className="status-dot" aria-hidden="true"></span>
                  <span className="status-text">Completado</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 id={`project-title-${index}`} className="project-title-modern">{project.title}</h3>
                <p className="project-description-modern">{project.description}</p>
                
                <div className="project-tech-modern">
                  <span className="tech-label">Stack:</span>
                  <div className="tech-tags-modern" role="list" aria-label="Tecnologías utilizadas">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag-modern" 
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-links-modern">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-modern github"
                      aria-label={`Ver código del proyecto ${project.title} en GitHub`}
                    >
                      <div className="link-icon-modern" aria-hidden="true">📂</div>
                      <span>Código</span>
                    </a>
                  )}
                </div>
                
                <div className="project-arrow" aria-hidden="true">
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;