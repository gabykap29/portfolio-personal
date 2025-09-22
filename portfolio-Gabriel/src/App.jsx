import { useState, useEffect } from 'react';
import './App.css';

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Datos
import { projects, technologies } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'tech', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="main-content">
        <div className="mobile-container">
          <Hero />
          <About />
          <Projects projects={projects} />
          <Technologies technologies={technologies} />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;