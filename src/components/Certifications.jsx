const certifications = [
  "Full Stack Development",
  "Java Programming",
  "Database / SQL",
  "Web Development",
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">

      <div className="container">

        <p className="section-label">
          CERTIFICATIONS
        </p>

        <h2 className="section-title">
          Certifications & Achievements
        </h2>

        <div className="certification-grid">

          {certifications.map((certificate) => (
            <div
              className="certification-card"
              key={certificate}
            >
              <h3>{certificate}</h3>
              <p>
                Certification / achievement description.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}