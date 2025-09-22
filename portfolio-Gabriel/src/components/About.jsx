import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaJenkins } from 'react-icons/fa';
import { SiTypescript, SiFastapi, SiMongodb, SiPostgresql, SiDjango,SiDocker, SiLangchain,SiTensorflow, SiPytorch, SiGo, SiOllama, SiHuggingface, SiScikitlearn, SiAlchemy, SiKeras, SiExpress, SiNestjs, SiVite, SiNextdotjs } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef} aria-labelledby="about-title">
      <div className="container">
        {/* Hero Header */}
        <div className="about-header">
          <h2 id="about-title" className="section-title" tabIndex="0">
            <span className="section-icon" aria-hidden="true">👨‍💻</span> 
            Sobre Mí
          </h2>
          <p className="about-subtitle" tabIndex="0">
            Desarrollador de Software con 3 años de experiencia creando soluciones tecnológicas innovadoras, 
            especializado en Machine Learning y Agentes de IA
          </p>
        </div>
        
        <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
          {/* Profile Overview Card */}
          <div className="profile-overview">
            <div className="profile-main">
              <div className="profile-avatar-section">
                <div className="profile-avatar">
                  <img src="/1735154832008.jpeg" alt="Foto de Gabriel Acosta" loading="lazy" />
                  <div className="avatar-status"></div>
                </div>
              </div>
              
              <div className="profile-details">
                <div className="profile-identity">
                  <h3 className="profile-name" tabIndex="0">Gabriel Acosta</h3>
                  <p className="profile-role" tabIndex="0">AI Developer</p>
                  <div className="profile-location">
                    <span className="location-icon">📍</span>
                    <span>Argentina</span>
                  </div>
                </div>
                
                <div className="profile-social" role="navigation" aria-label="Redes sociales">
                  <a href="https://github.com/gabykap29" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub" className="social-link github">
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/gabriel-acosta-5495b5166" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn" className="social-link linkedin">
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:gabriacos@gmail.com" aria-label="Enviar email" className="social-link email">
                    <FaEnvelope size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="profile-metrics">
              <div className="metric-card" tabIndex="0">
                <div className="metric-icon">📊</div>
                <div className="metric-info">
                  <div className="metric-number">3+</div>
                  <div className="metric-label">Años de Experiencia</div>
                </div>
              </div>
              <div className="metric-card" tabIndex="0">
                <div className="metric-icon">🚀</div>
                <div className="metric-info">
                  <div className="metric-number">15+</div>
                  <div className="metric-label">Tecnologías</div>
                </div>
              </div>
              <div className="metric-card" tabIndex="0">
                <div className="metric-icon">✨</div>
                <div className="metric-info">
                  <div className="metric-number">6+</div>
                  <div className="metric-label">Proyectos Completados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bio-section">
            <h3 className="bio-title">Mi Historia</h3>
            <div className="bio-content">
              <p>
                Soy un <span className="highlight-text">desarrollador apasionado</span> por crear soluciones tecnológicas 
                que resuelvan problemas reales. Mi enfoque combina <span className="highlight-text">creatividad técnica</span> 
                con una sólida comprensión de las necesidades del usuario.
              </p>
              <p>
                Con <span className="highlight-text">3 años de experiencia</span>, mi trayectoria abarca desde el desarrollo 
                frontend con React, hasta backend con Node.js y Python. Actualmente me estoy 
                <span className="highlight-text">especializando en Machine Learning, Deep Learning y Agentes de IA</span>, 
                aplicando estas tecnologías para crear soluciones innovadoras.
              </p>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="skills-section">
            <h3 className="skills-title" tabIndex="0" id="skills-title">Áreas de Especialización</h3>
            <div className="skills-grid" role="list" aria-labelledby="skills-title">
              <div className="skill-card frontend" role="listitem" tabIndex="0">
                <div className="skill-header">
                  <div className="skill-icon"><FaReact size={24} /></div>
                  <h4 className="skill-title-card">Frontend Development</h4>
                </div>
                <div className="skill-description">
                  Creación de interfaces de usuario modernas y responsivas
                </div>
                <div className="skill-tags">
                  <span className="tag primary"><FaHtml5 /> HTML</span>
                  <span className="tag primary"><FaCss3 /> CSS</span>
                  <span className="tag primary"><FaJs /> JavaScript</span>
                  <span className="tag primary">{"<>"} EJS</span>
                  <span className="tag primary"><FaReact /> React</span>
                  <span className="tag primary"><SiVite/>Vite.js</span>
                  <span className="tag primary"><SiNextdotjs/> Next.js</span>

                </div>
              </div>
              
              <div className="skill-card backend" role="listitem" tabIndex="0">
                <div className="skill-header">
                  <div className="skill-icon"><FaNodeJs size={24} /></div>
                  <h4 className="skill-title-card">Backend Development</h4>
                </div>
                <div className="skill-description">
                  APIs robustas y arquitecturas escalables
                </div>
                <div className="skill-tags">
                  <span className="tag secondary"><FaNodeJs /> Node.js</span>
                  <span className="tag secondary"><FaPython /> Python</span>
                  <span className="tag secondary"><SiFastapi /> FastAPI</span>
                  <span className="tag secondary"><SiTypescript /> TypeScript</span>
                  <span className="tag secondary"><SiDjango /> Django</span>
                  <span className="tag secondary"><SiExpress/> Express.js</span>
                  <span className="tag secondary"> <SiNestjs/> Nest.js</span>
                  <span className="tag secondary"><SiGo /> Go</span>
                  <span className="tag secondary"><SiDocker /> Docker</span>
                  <span className="tag secondary"><SiMongodb /> MongoDB</span>
                  <span className="tag secondary"><SiPostgresql /> PostgreSQL</span>
                  <span className="tag secondary"><SiGo /> GIN</span>
                  <span className="tag secondary"><SiGo /> Gorm</span>
                </div>
              </div>
              
              <div className="skill-card ai" role="listitem" tabIndex="0">
                <div className="skill-header">
                  <div className="skill-icon"><SiTensorflow size={24} /></div>
                  <h4 className="skill-title-card">Machine Learning & IA</h4>
                </div>
                <div className="skill-description">
                  Modelos inteligentes y agentes autónomos
                </div>
                <div className="skill-tags">
                  <span className="tag accent"><SiTensorflow /> TensorFlow</span>
                  <span className="tag accent"><SiPytorch /> PyTorch</span>
                  <span className="tag accent"><SiLangchain /> Langchain</span>
                  <span className="tag accent"><SiOllama /> Ollama</span>
                  <span className="tag accent"> <SiHuggingface />  Hugging Face</span>
                  <span className="tag accent"> <SiScikitlearn /> Scikit-Learn</span>
                  <span className="tag accent"> <SiKeras /> Keras</span>
                  <span className="tag accent"> <SiAlchemy /> Deep Learning</span>
                  <span className="tag accent">NLP</span>
                </div>
              </div>
              
              <div className="skill-card automation" role="listitem" tabIndex="0">
                <div className="skill-header">
                  <h4 className="skill-title-card">Automatización</h4>
                </div>
                <div className="skill-description">
                  Optimización de procesos y flujos de trabajo
                </div>
                <div className="skill-tags">
                  <span className="tag tertiary"><GiArtificialIntelligence /> n8n</span>
                  <span className="tag tertiary">Workflow Automation</span>
                  <span className="tag tertiary">API Integration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Focus */}
          <div className="focus-section">
            <div className="focus-card" tabIndex="0">
              <div className="focus-header">
                <div className="focus-icon-container">
                  <div className="focus-icon">🎯</div>
                </div>
                <div className="focus-text">
                  <h3 className="focus-title">Enfoque Actual</h3>
                  <p className="focus-subtitle">Especializándome en tecnologías emergentes</p>
                </div>
              </div>
              
              <div className="focus-content">
                <p className="focus-description">
                  Actualmente me estoy especializando en el campo del <strong>Machine Learning</strong>, <strong>Deep Learning</strong> 
                  y <strong>Agentes de IA</strong>, desarrollando soluciones innovadoras que combinen estas tecnologías para 
                  resolver problemas complejos y generar un <strong>impacto real en la comunidad</strong>.
                </p>
                
                <div className="focus-goals">
                  <div className="goal-item">
                    <div className="goal-icon">🧠</div>
                    <span>Modelos de Machine Learning avanzados</span>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🤝</div>
                    <span>Agentes de IA conversacionales</span>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🌍</div>
                    <span>Soluciones con impacto social</span>
                  </div>
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
