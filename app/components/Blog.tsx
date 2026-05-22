import Reveal from "./Reveal";
import { posts, type Post } from "../data/posts";

function Meta({ post }: { post: Post }) {
  return (
    <p className="text-xs text-text-light">
      {post.date} <span className="mx-1.5">·</span> {post.readTime}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-off-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-text-mid">
      {children}
    </span>
  );
}

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <section id="blog" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-text-light">
                Blog
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="headline-display text-black"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                What I&apos;ve Been{" "}
                <span className="underline-stroke">Thinking</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <a
              href="#"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-black px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white sm:inline-flex"
            >
              All Posts <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured && (
            <Reveal className="lg:col-span-3">
              <a
                href={featured.href}
                className="group block overflow-hidden border border-border-soft bg-white p-6 transition-all hover:-translate-y-1 hover:border-black sm:p-10"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <Tag>{featured.category}</Tag>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-black">
                        Featured
                      </span>
                    </div>
                    <h3
                      className="headline-display mt-5 text-black"
                      style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                    >
                      {featured.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-mid">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6">
                      <Meta post={featured} />
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black text-black transition-transform group-hover:translate-x-1 group-hover:bg-black group-hover:text-white lg:flex"
                  >
                    →
                  </span>
                </div>
              </a>
            </Reveal>
          )}

          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <a
                href={post.href}
                className="group flex h-full flex-col border border-border-soft bg-white p-6 transition-all hover:-translate-y-1 hover:border-black sm:p-7"
              >
                <Tag>{post.category}</Tag>
                <h3 className="headline-display mt-5 text-2xl text-black sm:text-[1.7rem]">
                  {post.title}
                </h3>
                <p className="mt-4 grow text-sm leading-relaxed text-text-mid">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Meta post={post} />
                  <span
                    aria-hidden
                    className="text-text-mid transition-transform group-hover:translate-x-1 group-hover:text-black"
                  >
                    →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 sm:hidden">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-sm font-medium text-black"
            >
              All Posts <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
