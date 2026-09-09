export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container contact-container">

        <p className="contact-label">
          CONTACT
        </p>

        <div className="contact-divider"></div>

        <p className="contact-subtitle">
          ✧ &nbsp; SEND AN INQUIRY
        </p>

        <h2 className="contact-title">
          LET'S BUILD SOMETHING.
        </h2>

        <div className="contact-title-line"></div>

        <p className="contact-description">
          For inquiries, stamp your details below.
        </p>

        <form className="contact-form">

          <div className="contact-form-row">

            <div className="form-group">
              <label htmlFor="name">
                FULL NAME
              </label>

              <input
                id="name"
                type="text"
                placeholder="Jayant Parihar"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

          </div>

          <div className="form-group message-group">

            <label htmlFor="message">
              MESSAGE
            </label>

            <textarea
              id="message"
              rows="7"
              placeholder="Tell me about your project, role or idea..."
            />

          </div>

          <button
            type="submit"
            className="contact-send"
          >
            <span className="send-icon">➤</span>
            <span>STAMP SEND</span>
          </button>

        </form>

      </div>

    </section>
  );
}