import Reveal from "./Reveal";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshaylakra/" },
  { label: "Instagram", href: "https://instagram.com/akshay_decodes" },
  { label: "YouTube", href: "https://www.youtube.com/@akshay_decodesYT" },
  { label: "Twitter / X", href: "https://x.com/akshaylkr" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
            Contact
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="headline-display text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Let&apos;s <span className="underline-stroke">Talk</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Working on B2B GTM, hiring for marketing, or just want to argue
            about positioning over coffee? My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href="mailto:hello@akshaylakra.com"
            className="mt-12 inline-block break-all underline decoration-white/30 decoration-2 underline-offset-[10px] transition-colors hover:text-white hover:decoration-white"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            hello@akshaylakra.com
          </a>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
