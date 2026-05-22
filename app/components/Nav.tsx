"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#files", label: "Files" },
  { href: "#channels", label: "Channels" },
  { href: "#contact", label: "Contact" },
];

function formatTime(d: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(d);
}

export default function Nav() {
  const [time, setTime] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-black sm:text-[15px]"
        >
          Akshay Kumar Lakra
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-mid transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div
            className="flex items-center gap-2 rounded-full border border-border-soft px-3 py-1.5"
            aria-label="Availability"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-black" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-mid">
              Open to connect
            </span>
          </div>
          <span
            suppressHydrationWarning
            className="font-mono text-xs tabular-nums text-text-light"
            aria-label="Current time in India"
          >
            {time || "--:--:-- --"}
          </span>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`absolute h-px w-6 bg-black transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-black transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-black transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-white px-6 pb-12 pt-24 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="headline-display text-5xl text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t border-border-soft pt-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-black" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-mid">
              Open to connect
            </span>
          </div>
          <span
            suppressHydrationWarning
            className="font-mono text-xs tabular-nums text-text-light"
          >
            {time || "--:--:-- --"}
          </span>
        </div>
      </div>
    </header>
  );
}
