const projects = [
  {
    title: "Matrimony Platform",
    description:
      "Full-stack matrimony platform with authentication, profile management, partner preferences and photo management.",
    technologies: [".NET 8", "React", "TypeScript", "Oracle", "Redis", "JWT"],
    status: "In Development",
    type: "Full Stack",
    gitlink: "https://github.com/sabbiraliseikh892/MatrimonyApp",
  },
  {
    title: "WorkStory AI",
    description:
      "AI-powered application for exploring work history, generating weekly career insights and analyzing professional growth.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Gemini",
      "Google Cloud",
      "AI Agents",
    ],
    status: "AI Project",
    type: "Generative AI",
    gitlink: "https://github.com/sabbiraliseikh892/workstory-ai",
  },
  {
    title: "Trend Analysis",
    description:
      "Trend analysis application comparing actual data with client-side changes using interactive charts and Power BI.",
    technologies: [".NET Core 3.1", "MVC", "Web API", "Power BI", "JavaScript"],
    status: "Demo Project",
    type: "Analytics",
    gitlink: "#",
  },
  {
    title: "FBD ETL & Power BI",
    description:
      "Enterprise ETL solution for processing Excel, CSV and TXT files and transforming large datasets for Power BI reporting.",
    technologies: [".NET", "SQL Server", "ETL", "Power BI", "Task Scheduler"],
    status: "Enterprise Project",
    type: "Data Engineering",
    gitlink: "#",
  },
  {
    title: "PDF Fusion",
    description:
      "Windows application for combining and managing PDF documents.",
    technologies: ["C#", ".NET", "Windows Forms", "Ghostscript"],
    status: "Open Source",
    type: "Desktop Application",
    gitlink: "https://github.com/sabbiraliseikh892/pdf-fusion",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A selection of applications and solutions I have built using modern
            technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
            >
              {/* Project Type */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  {project.type}
                </span>

                <span className="text-xs text-slate-500">{project.status}</span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-3 border-t border-slate-800 pt-5">
                <a
                  href={project.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-slate-700 px-4 py-2 text-center text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub →
                </a>
                {/* <button
                  type="button"
                  className="flex-1 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub →
                </button> */}

                {/* <button
                  type="button"
                  className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Live Demo →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
