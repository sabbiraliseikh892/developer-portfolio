function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Interested in working together, discussing a project, or simply
            connecting? Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-xl text-cyan-400">
              ✉
            </div>

            <h3 className="mt-4 font-semibold text-white">Email</h3>

            <p className="mt-2 text-sm text-slate-400 group-hover:text-cyan-400">
              sabbir.comp@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
              in
            </div>

            <h3 className="mt-4 font-semibold text-white">LinkedIn</h3>

            <p className="mt-2 text-sm text-slate-400 group-hover:text-cyan-400">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sabbiraliseikh892"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
              GH
            </div>

            <h3 className="mt-4 font-semibold text-white">GitHub</h3>

            <p className="mt-2 text-sm text-slate-400 group-hover:text-cyan-400">
              View my projects
            </p>
          </a>
        </div>

        {/* Availability */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Open to interesting projects and professional opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
