import Reveal from "./Reveal";
import SocialIcon from "./SocialIcon";

type Channel = {
  name: string;
  handle: string;
  description: string;
  icon: "linkedin" | "twitter" | "youtube" | "instagram";
  href: string;
  cta: string;
};

const channels: Channel[] = [
  {
    name: "LinkedIn",
    handle: "@akshaylakra",
    description:
      "Where I post most often — short notes on B2B marketing, GTM, and what's working in the field.",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/akshaylakra/",
    cta: "Follow",
  },
  {
    name: "Instagram",
    handle: "@akshay_decodes",
    description:
      "Reels and quick visual takes on marketing — frameworks, campaigns, and what's catching my eye.",
    icon: "instagram",
    href: "https://instagram.com/akshay_decodes",
    cta: "Follow",
  },
  {
    name: "YouTube",
    handle: "@akshay_decodesYT",
    description:
      "Long-form breakdowns of campaigns, frameworks, and tools — when the topic deserves more than a thread.",
    icon: "youtube",
    href: "https://www.youtube.com/@akshay_decodesYT",
    cta: "Subscribe",
  },
  {
    name: "Twitter / X",
    handle: "@akshaylkr",
    description:
      "Faster, sharper, more half-formed. Threads about positioning, demand, and the marketing internet.",
    icon: "twitter",
    href: "https://x.com/akshaylkr",
    cta: "Follow",
  },
];

export default function Channels() {
  return (
    <section id="channels" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-text-light">
            Channels
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="headline-display mx-auto max-w-3xl text-black"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Find Me <span className="underline-stroke">Everywhere</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full flex-col border border-border-soft bg-white p-6 transition-all hover:-translate-y-1 hover:border-black"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black text-black transition-colors group-hover:bg-black group-hover:text-white"
                >
                  <SocialIcon name={c.icon} className="h-[20px] w-[20px]" />
                </span>

                <h3 className="headline-display mt-6 text-xl text-black">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-text-light">{c.handle}</p>
                <p className="mt-4 grow text-sm leading-relaxed text-text-mid">
                  {c.description}
                </p>

                <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-black px-3.5 py-1.5 text-xs font-medium text-black transition-colors group-hover:bg-black group-hover:text-white">
                  {c.cta}
                  <span aria-hidden>→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
