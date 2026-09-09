const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      "Java",
      "C++",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "TOOLS & FRAMEWORKS",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Git",
      "GitHub",
      "Postman",
      "MySQL",
      "Linux CLI",
    ],
  },
  {
    title: "LINUX & SYSTEMS",
    skills: [
      "LVM",
      "Network Security",
      "User Management",
    ],
  },
  {
    title: "CORE CS",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOPs",
      "Operating Systems",
      "DBMS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">

        <p className="section-label">
          SKILLS
        </p>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-card">

          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}