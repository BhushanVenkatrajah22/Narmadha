export default function Education() {
  const educationData = [
    {
      period: "2024 - 2028",
      degree: "B.E Computer Science and Engineering (Pursuing)",
      school: "SNS College of Engineering",
      details: "Currently focusing on algorithms, full-stack software development, machine learning, and hardware IoT designs. Maintaining a CGPA of 8.0."
    },
    {
      period: "Passed out in 2024",
      degree: "Higher Secondary Certificate (HSC)",
      school: "Government Girls Higher Secondary School",
      details: "Graduated with 82% score. Core majors: Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      period: "Passed out in 2022",
      degree: "Secondary School Leaving Certificate (SSLC)",
      school: "Government Girls Higher Secondary School",
      details: "Completed with 75% aggregate score."
    }
  ];

  return (
    <section id="education" className="container">
      <h2 className="section-title">Education</h2>
      
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">{edu.period}</span>
              <h3 className="timeline-title">{edu.degree}</h3>
              <h4 className="timeline-subtitle">{edu.school}</h4>
              <p className="timeline-body" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
