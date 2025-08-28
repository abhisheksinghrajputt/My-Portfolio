import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal responsive portfolio built with React and Tailwind CSS.",
    img: "https://source.unsplash.com/600x400/?website,design", // placeholder image
    demo: "#",
    github: "#",
  },
  {
    title: "Todo Web App",
    description: "A modern todo list app with local storage and responsive design.",
    img: "https://source.unsplash.com/600x400/?coding,app",
    demo: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with Markdown support and user authentication.",
    img: "https://source.unsplash.com/600x400/?blog,technology",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          My Projects
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of some of my recent work. Each project is built with a
          focus on performance, responsiveness, and clean design.
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-green-400 hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
