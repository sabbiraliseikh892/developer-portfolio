function About() {
  const technologies = [
    ".NET",
    "ASP.NET Core",
    "C#",
    "React",
    "TypeScript",
    "SQL Server",
    "Oracle",
    "Azure",
    "Google Cloud",
    "Power BI",
    "Generative AI",
    "Agentic AI",
  ];

  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Building Software That Solves Real Problems
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* About */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I am a Full Stack Software Developer with extensive experience
              building enterprise applications, APIs, data-driven systems and
              modern web applications.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              My primary expertise is in the Microsoft technology ecosystem,
              including .NET, ASP.NET Core, C#, SQL Server and enterprise
              application development. I also work with React and TypeScript to
              build modern front-end experiences.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              I have experience working with Azure, Google Cloud, Power BI and
              ETL solutions, and I am actively exploring Generative AI and
              Agentic AI application development.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">8+</p>
              <p className="mt-2 text-sm text-slate-400">Years Experience</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">Full Stack</p>
              <p className="mt-2 text-sm text-slate-400">Development</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">Enterprise</p>
              <p className="mt-2 text-sm text-slate-400">
                Application Development
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-3xl font-bold text-cyan-400">AI</p>
              <p className="mt-2 text-sm text-slate-400">
                Generative & Agentic AI
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-14">
          <h3 className="mb-5 text-lg font-semibold text-white">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
