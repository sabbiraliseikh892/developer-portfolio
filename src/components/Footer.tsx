function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Sabbir Ali Seikh. All rights reserved.
        </p>

        <p>Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
