const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      ".NET",
      ".NET Core",
      "C#",
      "ASP.NET Core Web API",
      "MVC",
      "WCF",
      "Web Forms",
      "Windows Forms",
      "WPF",
      "Entity Framework",
      "Dapper",
      "ADO.NET",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Database",
    skills: [
      "MS SQL Server",
      "Oracle",
      "SQL",
      "Stored Procedures",
      "Query Optimization",
      "Entity Framework",
      "Dapper",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Azure Administration",
      "Azure DevOps",
      "Google Cloud",
      "Cloud Run",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "AI & Generative AI",
    skills: [
      "Generative AI",
      "Agentic AI",
      "Google ADK",
      "Gemini",
      "Google GenAI SDK",
      "AI Agents",
    ],
  },
  {
    title: "Reporting & Data",
    skills: [
      "Power BI",
      "RDLC Reports",
      "Crystal Reports",
      "ETL",
      "Data Analysis",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technical Expertise
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Technologies and tools I use to build enterprise, web, cloud and AI
            applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
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

export default Skills;
