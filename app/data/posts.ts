export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  href: string;
};

export const posts: Post[] = [
  {
    slug: "b2b-gtm-playbook",
    title: "The B2B GTM Playbook Nobody Talks About",
    excerpt:
      "Most go-to-market advice is recycled from the same five SaaS blogs. Here's the messy, unsexy work that actually compounds — and the order you need to do it in.",
    category: "Go-to-Market",
    date: "May 18, 2026",
    readTime: "12 min read",
    featured: true,
    href: "#",
  },
  {
    slug: "icp-probably-wrong",
    title: "Why Your ICP Is Probably Wrong",
    excerpt:
      "If your ICP fits on a slide, it's a persona — not an ICP. A field guide to finding the buyers your product actually wins for.",
    category: "Strategy",
    date: "Apr 29, 2026",
    readTime: "7 min read",
    href: "#",
  },
  {
    slug: "ai-tools-marketing",
    title: "AI Tools I Actually Use for Marketing",
    excerpt:
      "The five tools that survived the hype cycle on my stack, what I use each for, and the prompt patterns that earned them a permanent slot.",
    category: "Tools",
    date: "Apr 12, 2026",
    readTime: "9 min read",
    href: "#",
  },
  {
    slug: "positioning-unknown-product",
    title: "Positioning a Product Nobody Has Heard Of",
    excerpt:
      "Category creation is a meme. Here's how to position a brand-new product against the alternative most buyers default to — doing nothing.",
    category: "Positioning",
    date: "Mar 24, 2026",
    readTime: "8 min read",
    href: "#",
  },
];
