export default function Contact() {
  return (
    <section id="contact" className="section section-dark">

      <div className="container contact-container">

        <p className="section-label">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's Work Together
        </h2>

        <p className="contact-description">
          If you would like to discuss a project,
          internship or development opportunity,
          feel free to contact me.
        </p>

        <div className="contact-links">

          <a href="mailto:your-email@example.com">
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}