const experiences = [
  {
    company: "ITC Infotech India Ltd.",
    role: "Associate IT Consultant (Grade IS1)",
    period: "Sep 2022 – Present",
    client: "ITC Limited",
    achievements: [
      "Architected 3 enterprise systems: HRMS, Meal Booking and Treasury, serving 5,000+ employees.",
      "Built a .NET ETL solution processing 1M+ rows per run from Excel, CSV and TXT files.",
      "Designed and optimized 50+ SQL procedures and queries supporting Power BI dashboards.",
      "Led code reviews and testing practices to improve software quality and release reliability.",
    ],
    technologies: [".NET", "C#", "SQL Server", "Power BI", "ETL", "React"],
  },
  {
    company: "Disaster Management & Civil Defence Dept., Govt. of W.B.",
    role: "Software Developer",
    period: "Sep 2018 – Sep 2022",
    achievements: [
      "Developed the Online COVID-19 Ex-Gratia Application for relief fund distribution.",
      "Built an incident-reporting MIS, reducing manual reporting time by approximately 50%.",
      "Integrated real-time external data feeds into disaster management systems.",
      "Developed dashboards supporting faster decision-making during emergency operations.",
    ],
    technologies: [".NET", "C#", "ASP.NET", "SQL Server", "JavaScript"],
  },
  //   {
  //     company: "Envertis Infosoft Pvt. Ltd.",
  //     role: "Software Developer",
  //     period: "May 2018 – Sep 2018",
  //     achievements: [
  //       "Developed web applications using ASP.NET and JavaScript.",
  //       "Improved application performance through code optimization and reviews.",
  //     ],
  //     technologies: ["ASP.NET", "C#", "JavaScript", "SQL"],
  //   },
  //   {
  //     company: "Princess Jyotsana Software",
  //     role: "Software Developer",
  //     period: "Dec 2016 – Mar 2018",
  //     achievements: [
  //       "Developed and maintained software applications.",
  //       "Integrated a payment gateway to improve transaction security.",
  //     ],
  //     technologies: ["ASP.NET", "C#", "JavaScript", "SQL"],
  //   },
];

function Experience() {
  return (
    <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Career
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <div key={experience.company} className="relative md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-cyan-400 md:flex" />

                {/* Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:border-cyan-400">
                  <div className="flex flex-col justify-between gap-3 md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {experience.company}
                      </h3>

                      <p className="mt-1 font-medium text-cyan-400">
                        {experience.role}
                      </p>

                      {experience.client && (
                        <p className="mt-1 text-sm text-slate-500">
                          Client: {experience.client}
                        </p>
                      )}
                    </div>

                    <span className="text-sm font-medium text-slate-500">
                      {experience.period}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="mt-6 space-y-3">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span className="mt-1 text-cyan-400">▹</span>

                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
