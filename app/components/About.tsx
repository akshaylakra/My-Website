import Reveal from "./Reveal";

const stats = [
  { value: "3+", label: "Years in B2B marketing" },
  { value: "50+", label: "Blog posts published" },
  { value: "∞", label: "Cups of chai consumed" },
  { value: "1", label: "Startup I'm building at" },
];

const skills = [
  "GTM Strategy",
  "Content Marketing",
  "Demand Generation",
  "Product Marketing",
  "Brand Positioning",
  "B2B SaaS",
  "SEO",
  "Copywriting",
];

export default function About() {
  return (
    <section id="about" className="bg-off-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-text-light">
                About
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2
                className="headline-display text-black"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                A Marketer Who{" "}
                <span className="underline-stroke">Actually</span> Gets Tech
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 text-base leading-relaxed text-text-mid sm:text-lg">
                I&apos;ve spent the last three years inside B2B SaaS — close
                enough to engineering to read the codebase, close enough to
                sales to know which deals slip and why. That middle seat shapes
                everything I write and ship.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 text-base leading-relaxed text-text-mid sm:text-lg">
                My take: most marketing is loud, generic, and addressed to
                nobody in particular. The work I care about is quieter and
                sharper — figuring out the exact buyer, the exact moment, the
                exact reason they&apos;d switch.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 border border-black bg-white p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-text-light">
                  My Mission
                </p>
                <p className="mt-3 text-base leading-relaxed text-black sm:text-lg">
                  Help technical teams find the words and motions that turn a
                  great product into a category most people would defend.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-black bg-black">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white px-5 py-8 sm:px-7 sm:py-10"
                  >
                    <p className="headline-display text-5xl text-black sm:text-6xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm text-text-mid">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-text-light">
                What I Do
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-black bg-white px-3.5 py-1.5 text-sm text-black transition-colors hover:bg-black hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
