import { useEffect, useRef, createRef, useState } from 'react';

function Technologies({ technologies }) {
  const techGridRef = useRef(null);
  const techCardRefs = useRef([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'Todas', icon: '🛠️' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'database', label: 'Bases de Datos', icon: '🗄️' },
    { key: 'ai', label: 'IA/ML', icon: '🤖' },
    { key: 'devops', label: 'DevOps', icon: '🔧' },
    { key: 'automation', label: 'Automatización', icon: '🔗' }
  ];

  const filteredTechnologies = activeFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  // Inicializar el array de refs
  if (techCardRefs.current.length !== filteredTechnologies.length) {
    techCardRefs.current = Array(filteredTechnologies.length).fill().map((_, i) => techCardRefs.current[i] || createRef());
  }

  useEffect(() => {
    const gridElement = techGridRef.current;
    
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

    if (gridElement) {
      gridObserver.observe(gridElement);
    }

    techCardRefs.current.forEach(ref => {
      if (ref && ref.current) {
        cardObserver.observe(ref.current);
      }
    });

    return () => {
      if (gridElement) {
        gridObserver.unobserve(gridElement);
      }
      
      techCardRefs.current.forEach(ref => {
        if (ref && ref.current) {
          cardObserver.unobserve(ref.current);
        }
      });
    };
  }, [filteredTechnologies.length]);

  return (
    <section id="tech" className="tech-section" aria-labelledby="tech-title">
      <div className="container">
        <div className="tech-header">
          <h2 id="tech-title" className="section-title">🛠️ Tecnologías</h2>
          <p className="tech-subtitle">Herramientas y tecnologías con las que trabajo habitualmente</p>
        </div>

        {/* Filter Buttons */}
        <div className="tech-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              aria-pressed={activeFilter === filter.key}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-label">{filter.label}</span>
            </button>
          ))}
        </div>
        
        <div 
          ref={techGridRef} 
          className="tech-grid" 
          role="list"
          aria-label="Lista de tecnologías"
        >
          {filteredTechnologies.map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              ref={techCardRefs.current[index]}
              className={`tech-card tech-${tech.category || 'general'}`}
              role="listitem"
              tabIndex="0"
            >
              <div className="tech-icon" aria-hidden="true">
                {typeof tech.icon === 'string' ? tech.icon : <tech.icon size={70} />}
              </div>
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

        {/* Technology Stats */}
        <div className="tech-stats">
          <div className="stat-item">
            <div className="stat-number">{technologies.length}</div>
            <div className="stat-label">Tecnologías</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{technologies.filter(t => t.category === 'ai').length}</div>
            <div className="stat-label">IA/ML</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{Math.round(technologies.reduce((acc, t) => acc + t.level, 0) / technologies.length)}%</div>
            <div className="stat-label">Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;