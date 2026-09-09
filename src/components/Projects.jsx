import Image from "next/image";
const projects = [
  {
    title: "Sani Sweets",
    description:
      "A responsive sweets and bakery website designed to showcase products and provide customers with an easy-to-use browsing experience.",
    tech: "React, JavaScript, CSS",
    demo: "https://saini-sweets-u17h.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/saini-sweets",
    image: "/images/SaniSweets.png", 
  },
  {
    title: "F1 PARTS",
    description:
      "An e-commerce platform for Formula 1 racing components, featuring product browsing and a modern, performance-focused interface.",
    tech: "Next.js, Node.js, SQL",
    demo: "https://original-f1-new.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/original-f1-new",
    image: "/images/F1.png", 
    // Add the image path for Project Two
  },
  {
    title: "AEGIS TRADE APP",
    description:
      "A modern trading dashboard that provides users with portfolio insights, market data, performance metrics, and trading analytics.",
    tech: "Next.js,Zustand,FastAPI,WebSockets,scikit-learn",
    demo: "https://trade-control-iota.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/trade-control",
    image: "/images/TradeApp.png", 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-dark">

      <div className="container">

        <p className="section-label">
          PROJECTS
        </p>

        <h2 className="section-title">
          My Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={350}
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <span>
                  {project.tech}
                </span>

                <div className="project-links">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}