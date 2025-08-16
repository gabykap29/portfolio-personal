import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'tech', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Whisper y PHI3 Integration Project (Privado)",
      description: "Proyecto que integra Whisper para transcripción automática de audio con el modelo de lenguaje PHI3. Incluye servidor FastAPI, Express.js y frontend React.",
      tech: ["Python", "FastAPI", "Express.js", "React", "Vite", "Whisper", "PHI3"],
      github: "https://github.com/gabykap29/whisper_phi3-py-js.git"
    },
    {
      title: "Plataforma de Cursos con Mentor Inteligente (IA) (Privado)",
      description: "Plataforma de aprendizaje en línea con mentor inteligente basado en IA, recomendaciones personalizadas y feedback en tiempo real.",
      tech: ["Python", "Langchain", "Gemini AI (API)", "Ollama (Local)", "React", "PostgreSQL", "FastAPI"],
      github: "https://github.com/gabykap29/plataforma-cursos-ia"
    },
    {
      title: "Sistema de Gestión de Informes",
      description: "Plataforma web para la gestión y seguimiento de informes empresariales con dashboard interactivo y arquitectura escalable.",
      tech: ["Go", "Next.js", "PostgreSQL", "Gin"],
      github: "https://github.com/gabykap29/SGI-GO.git",
    },
    {
      title: "Sistema RAG con IA",
      description: "Sistema de Retrieval-Augmented Generation para mejorar la precisión en aplicaciones basadas en IA generativa con integración de múltiples fuentes de datos.",
      tech: ["Python", "FastAPI", "Langchain", "PostgreSQL", "Ollama"],
      github: "https://github.com/gabykap29/RAG-con-Langchain-Gemini-Ollama-Chroma.git",
    },
    {
      title: "Sistema de Gestión de Expedientes Judiciales",
      description: "Sistema integral para la gestión de expedientes judiciales con administración eficiente de casos, documentos y seguimiento de estado.",
      tech: ["TypeScript", "PostgreSQL", "Express.js", "React"],
      github: "https://github.com/gabykap29/SGE.git"
    },
    {
        title: "App Products",
        description: "Aplicación móvil desarrollada con Expo y React Native para gestión de inventario de productos con almacenamiento offline SQLite, compatible con Android e iOS.",
        tech: ["Expo SDK", "React Native", "SQLite"],
        github: "https://github.com/gabykap29/app-products"
      }
  ]

  const technologies = {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "HTML5", "CSS3"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    frameworks: ["Express.js", "Next.js", "FastAPI", "Django", "React", "React Native", "Bootstrap5", "Tailwind CSS"],
    orms: ["Sequelize", "Mongoose", "Gorm", "TypeORM"]
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <h2 className="logo">Gabriel Acosta</h2>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Inicio</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>Sobre Mí</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
              <li><a href="#tech" onClick={() => scrollToSection('tech')} className={activeSection === 'tech' ? 'active' : ''}>Tecnologías</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero section">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">Gabriel Acosta</h1>
            <h2 className="hero-subtitle">Desarrollador Backend & Inteligencia Artificial</h2>
            <p className="hero-description">
              Desarrollador de Software Backend con formación como Técnico Superior en Desarrollo de Software Multiplataforma, 
              enfocado en la creación de soluciones eficientes, escalables y de alto rendimiento con especialización en 
              Machine Learning e Inteligencia Artificial.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => scrollToSection('projects')}>Ver Proyectos</button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>Contactar</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-line">const developer = &#123;</div>
              <div className="code-line">  name: &#39;Gabriel Acosta&#39;,</div>
              <div className="code-line">  role: &#39;Backend Developer&#39;,</div>
              <div className="code-line">  focus: &#39;AI &amp; ML&#39;,</div>
              <div className="code-line">  passion: &#39;Innovation&#39;</div>
              <div className="code-line">&#125;</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">👨‍💻 Sobre Mí</h2>
            <p className="about-subtitle">
              Desarrollador Backend especializado en IA y soluciones escalables
            </p>
          </div>
          
          {/* About Main Content */}
          <div className="about-main-content">
            {/* Profile Card */}
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <span className="avatar-placeholder">GA</span>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">Gabriel Acosta</h3>
                  <p className="profile-title">Backend Developer & AI Specialist</p>
                </div>
              </div>
              <div className="profile-bio">
                <p>
                  Desarrollador de Software Backend con <span className="highlight-text">3 años de experiencia</span> y 
                  formación como <span className="highlight-text">Técnico Superior en Desarrollo de Software Multiplataforma</span>.
                </p>
                <div className="profile-stats">
                  <div className="stat-item">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Años</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Tecnologías</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Proyectos</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Overview */}
            <div className="skills-overview">
              <h3 className="skills-title">Especialidades</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon">💻</div>
                  <div className="skill-content">
                    <h4>Backend Development</h4>
                    <div className="skill-tags">
                      <span className="tag">TypeScript</span>
                      <span className="tag">Python</span>
                      <span className="tag">Go</span>
                      <span className="tag">Node.js</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-card">
                  <div className="skill-icon">🤖</div>
                  <div className="skill-content">
                    <h4>Inteligencia Artificial</h4>
                    <div className="skill-tags">
                      <span className="tag">RAG Systems</span>
                      <span className="tag">Machine Learning</span>
                      <span className="tag">AI Integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-card">
                  <div className="skill-icon">🔧</div>
                  <div className="skill-content">
                    <h4>Automatización</h4>
                    <div className="skill-tags">
                      <span className="tag">n8n</span>
                      <span className="tag">Workflow Automation</span>
                      <span className="tag">API Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Focus */}
          <div className="current-focus">
            <div className="focus-card">
              <div className="focus-icon-container">
                <div className="focus-icon">🎯</div>
              </div>
              <div className="focus-content">
                <h3 className="focus-title">Enfoque Actual</h3>
                <p className="focus-description">
                  Mi objetivo es seguir profundizando en el campo de la <strong>inteligencia artificial</strong>, 
                  desarrollando soluciones innovadoras que generen un <strong>impacto real en la comunidad</strong> 
                  y contribuyan al avance tecnológico.
                </p>
                <div className="focus-tags">
                  <span className="focus-tag">Innovación</span>
                  <span className="focus-tag">IA Generativa</span>
                  <span className="focus-tag">Impacto Social</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-header">
            <h2 className="section-title">🌟 Proyectos Principales</h2>
            <p className="projects-subtitle">
              Explora mis desarrollos más destacados donde combino tecnología e innovación
            </p>
          </div>
          
          <div className="projects-showcase">
            {projects.map((project, index) => (
              <div key={index} className="project-card-modern">
                <div className="project-header">
                  <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="project-status">
                    <span className="status-dot"></span>
                    <span className="status-text">Completado</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title-modern">{project.title}</h3>
                  <p className="project-description-modern">{project.description}</p>
                  
                  <div className="project-tech-modern">
                    <span className="tech-label">Stack:</span>
                    <div className="tech-tags-modern">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-modern">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-footer">
                  <div className="project-links-modern">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-modern github">
                        <div className="link-icon-modern">📂</div>
                        <span>Código</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-modern demo">
                        <div className="link-icon-modern">🚀</div>
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                  
                  <div className="project-arrow">
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Lenguajes de Programación</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">🟢</div>
                  <div className="skill-info">
                    <span className="skill-name">Go</span>
                    <span className="skill-level">Intermedio</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐍</div>
                  <div className="skill-info">
                    <span className="skill-name">Python</span>
                    <span className="skill-level">Intermedio</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📘</div>
                  <div className="skill-info">
                    <span className="skill-name">TypeScript</span>
                    <span className="skill-level">Avanzado</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📜</div>
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-level">Avanzado</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">⚡</div>
                  <span className="skill-name">Express</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🏰</div>
                  <span className="skill-name">Nest</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">▲</div>
                  <span className="skill-name">Next.js</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🍸</div>
                  <span className="skill-name">Gin</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🗄️</div>
                  <span className="skill-name">GORM</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🚀</div>
                  <span className="skill-name">FastAPI</span>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">🧠</div>
                  <span className="skill-name">Scikit Learn</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔥</div>
                  <span className="skill-name">PyTorch</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🦙</div>
                  <span className="skill-name">Ollama</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔗</div>
                  <span className="skill-name">Langchain</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔄</div>
                  <span className="skill-name">N8N</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="tech-section">
        <div className="container">
          <div className="tech-header">
            <h2 className="section-title">🛠 Tecnologías y Herramientas</h2>
            <p className="tech-subtitle">
              Stack tecnológico que domino para crear soluciones innovadoras
            </p>
          </div>
          
          <div className="tech-showcase">
            <div className="tech-category-card languages">
              <div className="category-header">
                <div className="category-icon">💻</div>
                <h3>Lenguajes de Programación</h3>
              </div>
              <div className="tech-items">
                {technologies.languages.map((tech, index) => (
                  <div key={index} className="tech-badge">
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card databases">
              <div className="category-header">
                <div className="category-icon">🗄️</div>
                <h3>Bases de Datos</h3>
              </div>
              <div className="tech-items">
                {technologies.databases.map((tech, index) => (
                  <div key={index} className="tech-badge">
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card frameworks">
              <div className="category-header">
                <div className="category-icon">⚡</div>
                <h3>Frameworks y Librerías</h3>
              </div>
              <div className="tech-items">
                {technologies.frameworks.map((tech, index) => (
                  <div key={index} className="tech-badge">
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card orms">
              <div className="category-header">
                <div className="category-icon">🔗</div>
                <h3>ORMs y ODMs</h3>
              </div>
              <div className="tech-items">
                {technologies.orms.map((tech, index) => (
                  <div key={index} className="tech-badge">
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">💬 Conectemos</h2>
            <p className="contact-subtitle">
              ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card main-contact">
              <div className="contact-card-header">
                <div className="contact-avatar">
                  <span className="avatar-icon">👨‍💻</span>
                </div>
                <h3>Gabriel Acosta</h3>
                <p className="contact-role">Backend Developer & AI Enthusiast</p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <a href="mailto:gabriacos@gmail.com" className="contact-value">gabriacos@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div className="contact-text">
                    <span className="contact-label">Teléfono</span>
                    <span className="contact-value">+54 9 3704 249490</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-text">
                    <span className="contact-label">Ubicación</span>
                    <span className="contact-value">Argentina</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-card social-links">
              <h3>🌐 Encuéntrame en</h3>
              <div className="social-grid">
                <a href="https://github.com/gabykap29" className="social-link github" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">🔗</div>
                  <div className="social-info">
                    <span className="social-name">GitHub</span>
                    <span className="social-desc">Mis repositorios</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/gabriel-acosta-5495b5166/" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">💼</div>
                  <div className="social-info">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-desc">Red profesional</span>
                  </div>
                </a>
                
                <a href="https://platzi.com/p/gabriacos/" className="social-link platzi" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">🎓</div>
                  <div className="social-info">
                    <span className="social-name">Platzi</span>
                    <span className="social-desc">Mi aprendizaje</span>
                  </div>
                </a>
                
                <a href="https://docs.google.com/document/d/1WMvXMweFtzJ1nXrnhVci4n9Rn-S_qDQOQbMwmS4SL3g/edit?usp=sharing" className="social-link cv" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">📄</div>
                  <div className="social-info">
                    <span className="social-name">CV Completo</span>
                    <span className="social-desc">Descargar PDF</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <div className="cta-content">
              <h3>🚀 ¿Listo para colaborar?</h3>
              <p>Estoy disponible para proyectos freelance y oportunidades laborales</p>
              <a href="mailto:gabriacos@gmail.com" className="cta-button">
                <span className="cta-icon">✉️</span>
                Enviar mensaje
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Gabriel Acosta. Desarrollado con React y mucho ☕</p>
        </div>
      </footer>
    </div>
  )
}

export default App