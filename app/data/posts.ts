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
    slug: "silent-rise-d2c-brands",
    title: "The Silent Rise of D2C Brands That Don’t Advertise",
    excerpt:
      "Everyone assumes growth needs advertising. Some of the most interesting brands today never ran an ad campaign — and the pattern behind their growth is more replicable than most founders realize.",
    category: "Brand Strategy",
    date: "May 27, 2025",
    readTime: "8 min read",
    featured: true,
    href: "https://akshaylakra.medium.com/the-silent-rise-of-d2c-brands-that-dont-advertise-b3c2186fa61a",
  },
  {
    slug: "liquid-death-kids",
    title: "Kids Drink ‘Liquid Death’ and Everyone’s Okay With It. Here’s Why.",
    excerpt:
      "A death metal can of water that kids love, parents approve, and investors funded at a $700M valuation. The real question isn’t why Liquid Death works — it’s why no one tried it sooner.",
    category: "Brand Identity",
    date: "Mar 8, 2023",
    readTime: "6 min read",
    href: "https://akshaylakra.medium.com/kids-drink-liquid-death-everyone-s-okay-with-it-here-s-why-8ad5a71ac1fe",
  },
  {
    slug: "burger-king-guerrilla",
    title:
      "Burger King’s Formula for the Biggest Guerrilla Marketing Move in Fast Food",
    excerpt:
      "Burger King didn’t outspend McDonald’s. They out-provoked them. This is the formula behind one of the cleverest marketing stunts in the industry — and why it worked beyond the headlines.",
    category: "Campaign Analysis",
    date: "Mar 10, 2023",
    readTime: "7 min read",
    href: "https://akshaylakra.medium.com/heres-burger-king-s-formula-for-the-biggest-guerilla-marketing-which-annoyed-mcdonald-s-big-time-fb0f682a77ce",
  },
  {
    slug: "dont-take-logo-seriously",
    title: "Don’t Take Your Logo Too Seriously. Here’s Why.",
    excerpt:
      "Most founders spend weeks agonizing over a logo. Almost none of them ask the more important question — what actually builds a brand? The answer is less glamorous and more actionable.",
    category: "Opinion · Branding",
    date: "Apr 13, 2023",
    readTime: "5 min read",
    href: "https://akshaylakra.medium.com/dont-take-your-logos-too-seriously-never-here-s-why-i-say-this-b1415a2b4f71",
  },
];
