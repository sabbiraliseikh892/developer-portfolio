function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <p className="text-7xl font-bold text-cyan-400">404</p>

        <h1 className="mt-6 text-3xl font-bold">Page Not Found</h1>

        <p className="mt-4 max-w-md text-slate-400">
          The page you are looking for does not exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}

export default NotFound;
