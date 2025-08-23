import { useEffect, useRef, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Hacer visible inmediatamente en dispositivos móviles
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsVisible(true);
      return;
    }
    
    // Detectar cuando el componente está visible en la pantalla
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="about-section" 
      ref={aboutRef}
      aria-labelledby="about-title"
    >
      <div className="container">
        <h2 id="about-title" className="section-title" tabIndex="0">
          <span aria-hidden="true">👨‍💻</span> Sobre Mí
        </h2>
        <p className="about-subtitle" tabIndex="0">
          Desarrollador Full Stack con 3 años de experiencia en soluciones tecnológicas innovadoras, especializado en Machine Learning y Agentes de IA
        </p>
        
        <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="profile-card" tabIndex="0">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src="/profile-avatar.svg" alt="Foto de Gabriel Acosta" loading="lazy" />
              </div>
              <div className="profile-info">
                <h3 tabIndex="0">Gabriel Acosta</h3>
                <p tabIndex="0">Full Stack Developer</p>
                <div className="profile-social" role="navigation" aria-label="Redes sociales">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Perfil de GitHub"
                    className="social-link"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Perfil de LinkedIn"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Perfil de Twitter"
                    className="social-link"
                  >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="profile-bio">
              <p tabIndex="0">
                Soy un <span className="highlight-text">desarrollador apasionado</span> por crear soluciones tecnológicas 
                que resuelvan problemas reales. Mi enfoque combina <span className="highlight-text">creatividad técnica</span> 
                con una sólida comprensión de las necesidades del usuario.
              </p>
              <p tabIndex="0">
                Con <span className="highlight-text">3 años de experiencia</span>, mi trayectoria abarca desde el desarrollo frontend con React y Vue.js hasta 
                backend con Node.js y Python. Actualmente me estoy <span className="highlight-text">especializando en Machine Learning, Deep Learning y Agentes de IA</span>, 
                aplicando estas tecnologías para crear soluciones innovadoras.
              </p>
            </div>
            
            <div className="profile-stats" role="group" aria-label="Estadísticas profesionales">
              <div className="stat-item" tabIndex="0">
                <div className="stat-number">3+</div>
                <div className="stat-label">Años de Experiencia</div>
              </div>
              <div className="stat-item" tabIndex="0">
                <div className="stat-number">15+</div>
                <div className="stat-label">Tecnologías</div>
              </div>
              <div className="stat-item" tabIndex="0">
                <div className="stat-number">6+</div>
                <div className="stat-label">Proyectos Completados</div>
              </div>
            </div>
          </div>
          
          <div className="skills-overview">
            <h3 className="skills-title" tabIndex="0" id="skills-title">Áreas de Especialización</h3>
            <div className="skills-grid" role="list" aria-labelledby="skills-title">
              <div className="skill-card" role="listitem" tabIndex="0">
                <div className="skill-icon" aria-hidden="true">🎨</div>
                <div className="skill-content">
                  <h4>Frontend Development</h4>
                  <div className="skill-tags" role="group" aria-label="Tecnologías de Frontend">
                    <span className="tag">React</span>
                    <span className="tag">Vue.js</span>
                    <span className="tag">Next.js</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-card" role="listitem" tabIndex="0">
                <div className="skill-icon" aria-hidden="true">💻</div>
                <div className="skill-content">
                  <h4>Backend Development</h4>
                  <div className="skill-tags" role="group" aria-label="Tecnologías de Backend">
                    <span className="tag">TypeScript</span>
                    <span className="tag">Python</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">Express.js</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-card" role="listitem" tabIndex="0">
                <div className="skill-icon" aria-hidden="true">🤖</div>
                <div className="skill-content">
                  <h4>Machine Learning & IA</h4>
                  <div className="skill-tags" role="group" aria-label="Tecnologías de IA">
                    <span className="tag">TensorFlow</span>
                    <span className="tag">PyTorch</span>
                    <span className="tag">Deep Learning</span>
                    <span className="tag">NLP</span>
                    <span className="tag">Agentes de IA</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-card" role="listitem" tabIndex="0">
                <div className="skill-icon" aria-hidden="true">🔧</div>
                <div className="skill-content">
                  <h4>Automatización</h4>
                  <div className="skill-tags" role="group" aria-label="Tecnologías de Automatización">
                    <span className="tag">n8n</span>
                    <span className="tag">Workflow Automation</span>
                    <span className="tag">API Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="current-focus">
            <div className="focus-card" tabIndex="0">
              <div className="focus-icon-container">
                <div className="focus-icon" aria-hidden="true">🎯</div>
              </div>
              <div className="focus-content">
                <h3 className="focus-title" id="focus-title">Enfoque Actual</h3>
                <p className="focus-description">
                  Actualmente me estoy especializando en el campo del <strong>Machine Learning</strong>, <strong>Deep Learning</strong> y <strong>Agentes de IA</strong>, 
                  desarrollando soluciones innovadoras que combinen estas tecnologías para resolver problemas complejos 
                  y generar un <strong>impacto real en la comunidad</strong>.
                </p>
                <div className="focus-tags" role="group" aria-labelledby="focus-title">
                  <span className="focus-tag">Machine Learning</span>
                  <span className="focus-tag">Deep Learning</span>
                  <span className="focus-tag">Agentes de IA</span>
                  <span className="focus-tag">NLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;