import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">
          <p className="hero-small-text">
            HELLO, I'M
          </p>

          <h1>
            Jayant Parihar
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web
            applications using React, Next.js and other
            modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/8e2d7d3b-b778-413c-90ed-6785de1d52f8.png"
            alt="Jayant Parihar"
            width={400}
            height={400}
            priority
          />
        </div>

      </div>
    </section>
  );
}