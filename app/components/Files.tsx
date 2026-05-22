import Reveal from "./Reveal";
import { files } from "../data/files";

export default function Files() {
  return (
    <section id="files" className="bg-off-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-text-light">
            Files
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="headline-display text-black"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Free Resources &{" "}
            <span className="underline-stroke">Templates</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-mid sm:text-lg">
            The same templates, frameworks, and swipe files I use day-to-day.
            No email gate — take what&apos;s useful, ignore the rest.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 3) * 80}>
              <a
                href={f.href}
                download
                className="group flex h-full flex-col border border-border-soft bg-white p-6 transition-all hover:-translate-y-1 hover:border-black"
              >
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 items-center justify-center border border-black text-2xl text-black transition-colors group-hover:bg-black group-hover:text-white"
                  >
                    {f.icon}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-text-light">
                    {f.type}
                  </span>
                </div>

                <h3 className="headline-display mt-6 text-xl text-black sm:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-3 grow text-sm leading-relaxed text-text-mid">
                  {f.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-4">
                  <span className="text-xs text-text-light">{f.size}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-black">
                    Download
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-y-0.5"
                    >
                      ↓
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
