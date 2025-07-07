import { ReviewOnScroll } from "../ReviewOnScroll";

export const Projects = () => {
  // Step 1: Project data array
  const projectList = [
    {
      title: "Booking Web App",
      description: "Hotel room booking platform with search, filter, and secure payment.",
      tech: ["React", "javascript", "Tailwind"],
      url: "https://booking-web-mauve.vercel.app/",
    },
    {
      title: "VirtualR Landing page",
      description: "Build immersive VR experiences with intuitive tools designed for developers and creators.",
      tech: ["React", "javascript", "Tailwind"],
      url: "https://virtualr-landing-page-six.vercel.app/",
    },
  
    {
      title: "Estate website",
      description: "Real estate platform for listing, viewing, and managing properties.",
      tech: ["React", "javascript", "Tailwind"],
      url: "https://dam-estate.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Step 2: Loop through the project array */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
