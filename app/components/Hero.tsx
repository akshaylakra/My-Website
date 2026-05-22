import Image from "next/image";
import SocialIcon from "./SocialIcon";
import Reveal from "./Reveal";

const socials = [
  { name: "linkedin" as const, label: "LinkedIn", href: "https://www.linkedin.com/in/akshayklakra" },
  { name: "twitter" as const, label: "Twitter / X", href: "https://twitter.com/akshayklakra" },
  { name: "youtube" as const, label: "YouTube", href: "https://youtube.com/@akshayklakra" },
  { name: "newsletter" as const, label: "Newsletter", href: "#channels" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-white px-5 pt-28 pb-20 sm:px-8"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-border-soft bg-off-white sm:h-24 sm:w-24">
            <Image
              src="/akshay.jpg"
              alt="Akshay Lakra"
              width={192}
              height={192}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-text-light">
            Akshay Lakra
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1
            className="headline-display text-black"
            style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)" }}
          >
            <span className="underline-stroke">Decoding</span> Marketing One
            Story At A Time
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-mid sm:text-lg">
            B2B marketer at a tech startup. I write about growth, go-to-market,
            and the unglamorous craft of turning a product nobody knows about
            into one people choose.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#blog"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black hover:ring-1 hover:ring-black"
            >
              Read the Blog
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              Let&apos;s Connect
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-12 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-black transition-colors hover:bg-black hover:text-white"
              >
                <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-text-light"
      >
        Scroll
      </div>
    </section>
  );
}
