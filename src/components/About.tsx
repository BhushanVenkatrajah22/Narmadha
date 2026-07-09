export default function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="glass-card about-grid">
        <div className="about-details">
          <h3 style={{ fontSize: "1.5rem", color: "var(--text-bright)", fontWeight: "700" }}>
            Aspiring Software & Full Stack Developer
          </h3>
          <p className="about-text">
            I am a Computer Science Engineering student who is deeply passionate about programming, software engineering, and full-stack web architectures. I thrive in dynamic environments where I can leverage my technology stacks to build elegant solutions.
          </p>
          <p className="about-text" style={{ color: "var(--text-muted)" }}>
            <strong>Career Objective:</strong> Driven Computer Science Engineering student with a passion for software development and continuous learning. Seeking an opportunity to develop reliable, scalable, and impactful applications while enhancing my technical expertise and contributing to organizational success through innovation and teamwork.
          </p>
        </div>
        
        <div className="about-highlights">
          <div className="highlight-box">
            <span className="highlight-val">B.E</span>
            <span className="highlight-lbl">Computer Science & Eng. (Pursuing)</span>
          </div>
          <div className="highlight-box">
            <span className="highlight-val">8.0</span>
            <span className="highlight-lbl">Cumulative CGPA</span>
          </div>
          <div className="highlight-box">
            <span className="highlight-val">2028</span>
            <span className="highlight-lbl">Expected Graduation</span>
          </div>
          <div className="highlight-box">
            <span className="highlight-val">1+</span>
            <span className="highlight-lbl">Years Practical Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
