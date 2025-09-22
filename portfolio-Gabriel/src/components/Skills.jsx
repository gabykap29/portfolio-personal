function Skills() {
  return (
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
                <div className="skill-icon">🔍</div>
                <span className="skill-name">TensorFlow</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🤖</div>
                <span className="skill-name">LangChain</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <span className="skill-name">Pandas</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔥</div>
                <span className="skill-name">PyTorch</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔗</div>
                <span className="skill-name">N8N</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;