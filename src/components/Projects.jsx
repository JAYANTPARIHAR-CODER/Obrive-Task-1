import Image from "next/image";
const projects = [
  {
    title: "Project One",
    description:
      "A modern web application built using React and JavaScript.",
    tech: "React, JavaScript, CSS",
    demo: "https://your-project-one.vercel.app",
    github: "https://github.com/yourusername/project-one",
    image: "/images/SaniSweets.png", 
  },
  {
    title: "Project Two",
    description:
      "A full-stack application focused on solving a practical problem.",
    tech: "Next.js, Node.js, SQL",
    demo: "https://your-project-two.vercel.app",
    github: "https://github.com/yourusername/project-two",
    image: "/images/F1.png", 
    // Add the image path for Project Two
  },
  {
    title: "Project Three",
    description:
      "A responsive frontend project with reusable components.",
    tech: "React, CSS",
    demo: "https://your-project-three.vercel.app",
    github: "https://github.com/yourusername/project-three",
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