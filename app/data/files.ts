export type Resource = {
  slug: string;
  title: string;
  description: string;
  size: string;
  type: string;
  icon: string;
  href: string;
};

export const files: Resource[] = [
  {
    slug: "gtm-strategy-template",
    title: "GTM Strategy Template",
    description:
      "The same one-pager I use to align product, marketing, and sales before every launch.",
    size: "PDF · 480 KB",
    type: "Template",
    icon: "◆",
    href: "#",
  },
  {
    slug: "marketing-budget-tracker",
    title: "Marketing Budget Tracker",
    description:
      "A simple sheet for tracking spend by channel, with CAC and payback baked in.",
    size: "XLSX · 92 KB",
    type: "Spreadsheet",
    icon: "▦",
    href: "#",
  },
  {
    slug: "icp-research-framework",
    title: "ICP Research Framework",
    description:
      "Twenty interview questions and a scoring rubric for narrowing your ideal customer.",
    size: "PDF · 320 KB",
    type: "Framework",
    icon: "◉",
    href: "#",
  },
  {
    slug: "content-calendar-template",
    title: "Content Calendar Template",
    description:
      "Notion-ready calendar for planning quarterly themes and weekly distribution.",
    size: "Notion · Duplicate",
    type: "Template",
    icon: "▢",
    href: "#",
  },
  {
    slug: "cold-outreach-swipe-file",
    title: "Cold Outreach Swipe File",
    description:
      "Thirty cold messages that got replies, annotated with what made them work.",
    size: "PDF · 1.1 MB",
    type: "Swipe File",
    icon: "✺",
    href: "#",
  },
  {
    slug: "demand-gen-playbook",
    title: "Demand Gen Playbook",
    description:
      "A 24-page guide to building a demand engine from zero — channels, motions, and metrics.",
    size: "PDF · 2.4 MB",
    type: "Playbook",
    icon: "❖",
    href: "#",
  },
];
