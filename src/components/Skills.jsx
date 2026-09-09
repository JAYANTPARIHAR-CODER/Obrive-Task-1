const skills = [
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "SQL",
  "Git",
  "GitHub",
  "Node.js",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        <p className="section-label">
          SKILLS
        </p>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}