import { useState, useEffect } from 'react';

function Header({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejar el cierre del menú al hacer clic en un enlace
  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  // Detectar scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Evitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="nav-brand">
          <h2 className="logo">Gabriel Acosta</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation">
          <ul className="nav-list">
            <li><a href="#home" onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''} aria-current={activeSection === 'home' ? 'page' : undefined}>Inicio</a></li>
            <li><a href="#about" onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''} aria-current={activeSection === 'about' ? 'page' : undefined}>Sobre Mí</a></li>
            <li><a href="#projects" onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''} aria-current={activeSection === 'projects' ? 'page' : undefined}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''} aria-current={activeSection === 'skills' ? 'page' : undefined}>Skills</a></li>
            <li><a href="#tech" onClick={() => handleNavClick('tech')} className={activeSection === 'tech' ? 'active' : ''} aria-current={activeSection === 'tech' ? 'page' : undefined}>Tecnologías</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''} aria-current={activeSection === 'contact' ? 'page' : undefined}>Contacto</a></li>
          </ul>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;