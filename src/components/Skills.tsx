export default function Skills() {
  const skillCategories = [
    {
      title: "Core Stacks & Languages",
      skills: [
        {
          name: "React",
          icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="var(--color-secondary)">
              <circle cx="0" cy="0" r="2.05" fill="var(--color-secondary)"/>
              <g strokeWidth="1">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          )
        },
        {
          name: "Node.js",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          )
        },
        {
          name: "Python",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 5-2.28 10 10 0 0 0 1-5.72H13a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h5a4 4 0 0 0-4-4H9a7 7 0 0 0-5 2.28 10 10 0 0 0-1 5.72h5a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3a4 4 0 0 0 4 4h5z"/>
            </svg>
          )
        }
      ]
    },
    {
      title: "Data & AI Frameworks",
      skills: [
        {
          name: "Streamlit",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#ff4b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="22" x2="12" y2="12"/>
              <line x1="12" y1="12" x2="22" y2="8.5"/>
              <line x1="12" y1="12" x2="2" y2="8.5"/>
            </svg>
          )
        }
      ]
    },
    {
      title: "Developer Tools & Platforms",
      skills: [
        {
          name: "Antigravity",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"/>
              <path d="M12 2v10M12 2l-3 3M12 2l3 3"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          )
        },
        {
          name: "GitHub",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          )
        },
        {
          name: "VS Code",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 20V4M6 20V4M2 12h20M12 2v20"/>
            </svg>
          )
        },
        {
          name: "Figma",
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
              <path d="M12 9V2h3.5A3.5 3.5 0 0 1 19 5.5 3.5 3.5 0 0 1 15.5 9H12z"/>
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
              <path d="M12 16v6h3.5a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.5-3.5H12z"/>
              <circle cx="8.5" cy="19.5" r="3.5"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Tech Stacks & Tools</h2>
      <div className="skills-container">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-card">
                  <div className="skill-icon" style={{ width: "40px", height: "40px" }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
