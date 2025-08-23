import { useEffect, useRef, createRef } from 'react';

function Technologies({ technologies }) {
  const techGridRef = useRef(null);
  const techCardRefs = useRef([]);

  // Inicializar el array de refs
  if (techCardRefs.current.length !== technologies.length) {
    techCardRefs.current = Array(technologies.length).fill().map((_, i) => techCardRefs.current[i] || createRef());
  }

  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            gridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (techGridRef.current) {
      gridObserver.observe(techGridRef.current);
    }

    techCardRefs.current.forEach(ref => {
      if (ref && ref.current) {
        cardObserver.observe(ref.current);
      }
    });

    return () => {
      if (techGridRef.current) {
        gridObserver.unobserve(techGridRef.current);
      }
      
      techCardRefs.current.forEach(ref => {
        if (ref && ref.current) {
          cardObserver.unobserve(ref.current);
        }
      });
    };
  }, [technologies.length]);

  return (
    <section id="tech" className="tech-section" aria-labelledby="tech-title">
      <div className="container">
        <div className="tech-header">
          <h2 id="tech-title" className="section-title">🛠️ Tecnologías</h2>
          <p className="tech-subtitle">Herramientas y tecnologías con las que trabajo habitualmente</p>
        </div>
        
        <div 
          ref={techGridRef} 
          className="tech-grid" 
          role="list"
          aria-label="Lista de tecnologías"
        >
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              ref={techCardRefs.current[index]}
              className="tech-card" 
              role="listitem"
              tabIndex="0"
            >
              <div className="tech-icon" aria-hidden="true">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-level" aria-label={`Nivel: ${tech.levelText}`}>
                <div className="level-bar">
                  <div 
                    className="level-fill" 
                    style={{ width: `${tech.level}%` }}
                    aria-hidden="true"
                  ></div>
                </div>
                <span className="level-text">{tech.levelText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;