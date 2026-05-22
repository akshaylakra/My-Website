export default function Footer() {
  return (
    <footer className="bg-black px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-xs text-white/60">
          © 2025 Akshay Kumar Lakra
        </p>
        <p className="text-xs text-white/60">
          Built with intention <span className="mx-2">·</span>
          <a
            href="#top"
            className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
