function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">📬 Contacto</h2>
        <p className="contact-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-detail">
                <h3>Email</h3>
                <p>gabriel@example.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <div className="contact-detail">
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/gabrielacosta</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-detail">
                <h3>GitHub</h3>
                <p>github.com/gabrielacosta</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-detail">
                <h3>Teléfono</h3>
                <p>+34 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;