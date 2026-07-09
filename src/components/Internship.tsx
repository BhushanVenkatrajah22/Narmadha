export default function Internship() {
  return (
    <section id="experience" className="container">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">June 2026 – July 2026</span>
            <h3 className="timeline-title">Python Full Stack Intern</h3>
            <h4 className="timeline-subtitle">ETHER SERVICES</h4>
            <div className="timeline-body">
              <ul>
                <li>Developed highly responsive web applications utilizing Python, HTML, CSS, and modern JavaScript.</li>
                <li>Collaborated closely with cross-functional development teams to design, build, and test next-generation web application features.</li>
                <li>Gained deep hands-on expertise in industry best practices for version control (Git), software debugging, and code reviews.</li>
              </ul>
              <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="badge badge-glow" style={{ borderColor: "rgba(139, 92, 246, 0.3)" }}>Python</span>
                <span className="badge badge-glow" style={{ borderColor: "rgba(139, 92, 246, 0.3)" }}>JavaScript</span>
                <span className="badge badge-glow" style={{ borderColor: "rgba(139, 92, 246, 0.3)" }}>HTML5 & CSS3</span>
                <span className="badge badge-glow" style={{ borderColor: "rgba(139, 92, 246, 0.3)" }}>Git</span>
                <span className="badge badge-glow" style={{ borderColor: "rgba(139, 92, 246, 0.3)" }}>Web Architectures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
