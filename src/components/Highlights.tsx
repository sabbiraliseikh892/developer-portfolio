const highlights = [
  {
    value: "8+",
    title: "Years Experience",
    description: "Building enterprise and full-stack applications",
  },
  {
    value: "5,000+",
    title: "Users Served",
    description: "Enterprise systems supporting ITC employees",
  },
  {
    value: "1M+",
    title: "Rows Processed",
    description: "Large-volume ETL processing per run",
  },
  {
    value: "50+",
    title: "SQL Solutions",
    description: "Stored procedures, functions and optimized queries",
  },
];

function Highlights() {
  return (
    <section className="bg-slate-950 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <p className="text-4xl font-bold text-cyan-400">{item.value}</p>

            <h3 className="mt-3 font-semibold text-white">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
