export default function Publications() {
  return (
    <section id="patents" className="container">
      <h2 className="section-title">Patents & Achievements</h2>
      
      <div className="publications-grid">
        {/* Patent Card */}
        <div className="patent-card">
          <div className="patent-badge-top">Official Patent</div>
          
          <div style={{ color: "var(--color-primary)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              IoT & Security Engineering
            </span>
          </div>

          <h3 className="patent-title">
            AI-Driven Adaptive IoT Surveillance Framework for Automated Threat Recognition and Public Security Management
          </h3>

          <p className="patent-desc">
            A novel architectural framework that integrates smart Internet of Things (IoT) edge sensors with real-time deep learning analytics. Designed to automate local threats and recognition protocols inside security perimeters, greatly optimizing public safety grids.
          </p>

          <div className="patent-metadata">
            <span>Classification: <strong>Artificial Intelligence, Smart Edge IoT, Surveillance</strong></span>
            <span>Focus Area: <strong>Automated Threat Recognition, Public Safety & Security</strong></span>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="achievements-card">
          <div>
            <h3 className="achievements-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-secondary)" }}>
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
                <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path>
              </svg>
              Achievements
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              Academic awards and contest participations.
            </p>
          </div>

          <ul className="achievements-list">
            <li className="achievement-item">
              <span className="achievement-icon">✦</span>
              <div className="achievement-text">
                Academic Grade Excellence: Maintained an outstanding Cumulative GPA of <strong>8.0</strong> throughout her engineering semesters.
              </div>
            </li>
            
            <li className="achievement-item">
              <span className="achievement-icon">✦</span>
              <div className="achievement-text">
                Participated in Paper Presentation (<strong>ASTRONOVA - 2025</strong>) held at the prestigious <strong>Coimbatore Institute of Technology (CIT)</strong>.
              </div>
            </li>

            <li className="achievement-item">
              <span className="achievement-icon">✦</span>
              <div className="achievement-text">
                Participated in national level hackathon (<strong>ZORAX - 2026</strong>) hosted at <strong>Kongu College of Engineering</strong>.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
