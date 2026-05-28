import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <a href="#top" aria-label="Akshay Lakra — back to top" className="flex items-center">
          <Image
            src="/Akshay logo black font.png"
            alt="Akshay Lakra"
            width={250}
            height={100}
            className="h-20 w-auto"
          />
        </a>
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
