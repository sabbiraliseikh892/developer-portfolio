import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        {/* Home */}
        <section
          id="home"
          className="flex min-h-screen items-center bg-slate-950 px-6 pt-20"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-4xl animate-fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Senior Software Developer
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-7xl">
                Sabbir Ali Seikh
              </h1>

              <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-4xl">
                Full Stack Developer
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                I build enterprise applications and modern web solutions using
                .NET, ASP.NET Core, React, SQL Server, Azure, Google Cloud,
                Generative AI and Agentic AI.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                >
                  View My Projects
                </a>

                <a
                  href="/Sabbir-Ali-Seikh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                >
                  View Resume
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  ".NET",
                  "React",
                  "SQL Server",
                  "Azure",
                  "Google Cloud",
                  "Generative AI",
                  "Agentic AI",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
