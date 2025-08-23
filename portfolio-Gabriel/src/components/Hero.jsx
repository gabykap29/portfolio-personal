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

    return () => {
      if (codeElement) {
        observer.unobserve(codeElement);
      }
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Sección de inicio">
      <div className="hero-bg-gradient" aria-hidden="true"></div>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="hero-title">Gabriel Acosta</h1>
          <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
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
        
        <div className={`hero-visual ${isVisible ? 'fade-in-up' : ''}`}>
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
              <div className="code-line">  <span className="code-property">role</span>: <span className="code-string">"Full Stack Developer"</span>,</div>
              <div className="code-line">  <span className="code-property">skills</span>: [<span className="code-string">"TypeScript"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Python"</span>],</div>
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