import { useEffect, useRef, useState } from 'react';

function Hero() {
  const codeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Efecto de animación para el código
    const codeElement = codeRef.current;
    if (codeElement) {
      const codeLines = codeElement.querySelectorAll('.code-line');
      codeLines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('visible');
        }, 300 * index);
      });
    }

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

    if (codeElement) {
      observer.observe(codeElement);
    }

    // Fallback: hacer visible después de 2 segundos si no se ha detectado
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      if (codeElement) {
        observer.unobserve(codeElement);
      }
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Sección de inicio">
      <div className="hero-bg-gradient" aria-hidden="true"></div>
      
      {/* Diseño para móvil */}
      <div className="mobile-hero-wrapper">
        <div className="mobile-floating-elements">
          <div className="floating-circle floating-circle-1"></div>
          <div className="floating-circle floating-circle-2"></div>
          <div className="floating-circle floating-circle-3"></div>
        </div>
        
        <div className="mobile-hero-card">
          <div className="mobile-profile-section">
            <div className="mobile-avatar">
              <img src="/1735154832008.jpeg" alt="Foto de Gabriel Acosta" className="avatar-image" loading="lazy" />
              <div className="avatar-ring"></div>
            </div>
            <div className="mobile-profile-info">
              <h1 className="mobile-profile-name">Gabriel Acosta</h1>
              <h2 className="mobile-profile-role">AI Developer</h2>
            </div>
            <div className="mobile-status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Disponible para proyectos</span>
            </div>
          </div>
          
          <div className="mobile-title-section">
            <h1 className="mobile-hero-title">
              <span className="title-line">Gabriel</span>
              <span className="title-line">Acosta</span>
            </h1>
            <div className="mobile-role-tag">
              <span className="role-icon">🚀</span>
              <span className="role-text">AI Developer</span>
            </div>
          </div>
          
          <div className="mobile-skills-carousel">
            <div className="skills-track">
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">React</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">GO</span>
              <span className="skill-pill">AI/ML</span>
            </div>
          </div>
          
          <div className="mobile-description">
            <p>Creando soluciones tecnológicas innovadoras con <strong>experiencias únicas</strong></p>
          </div>
          
          <div className="mobile-actions">
            <a href="#projects" className="mobile-btn mobile-btn-primary">
              <span className="btn-icon">⚡</span>
              <span>Ver Trabajo</span>
            </a>
            <a href="#contact" className="mobile-btn mobile-btn-secondary">
              <span className="btn-icon">💬</span>
              <span>Hablemos</span>
            </a>
          </div>
        </div>
        
        <div className="mobile-code-snippet">
          <div className="snippet-header">
            <div className="snippet-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="snippet-title">quick_intro.js</span>
          </div>
          <div className="snippet-content">
            <div className="snippet-line">
              <span className="line-number">1</span>
              <span className="code">const dev = new Developer();</span>
            </div>
            <div className="snippet-line">
              <span className="line-number">2</span>
              <span className="code">dev.passion = "innovation";</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diseño original para desktop */}
      <div className="container desktop-hero">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="hero-title">Gabriel Acosta</h1>
          <h2 className="hero-subtitle">AI Developer</h2>
          <p className="hero-description">
            Especializado en crear soluciones tecnológicas innovadoras con enfoque en experiencias de usuario excepcionales.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" aria-label="Ver mis proyectos">
              <span className="btn-text">Ver Proyectos</span>
            </a>
            <a href="#contact" className="btn btn-secondary" aria-label="Contactar conmigo">
              <span className="btn-text">Contactar</span>
            </a>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'fade-in-up' : 'fade-in-up'}`}>
          <div className="code-animation" ref={codeRef} aria-hidden="true">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-title">developer.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">const <span className="code-keyword">developer</span> = {`{`}</div>
              <div className="code-line">  <span className="code-property">name</span>: <span className="code-string">"Gabriel Acosta"</span>,</div>
              <div className="code-line">  <span className="code-property">role</span>: <span className="code-string">"AI Developer"</span>,</div>
              <div className="code-line">  <span className="code-property">skills</span>: [<span className="code-string">"TypeScript"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Python"</span>,<span className="code-string">"GO"</span>],</div>
              <div className="code-line">  <span className="code-property">passion</span>: <span className="code-string">"Building innovative solutions"</span></div>
              <div className="code-line">{`}`};</div>
            </div>
          </div>
        </div>
        
        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-dot"></div>
          <div className="hero-dot"></div>
          <div className="hero-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;