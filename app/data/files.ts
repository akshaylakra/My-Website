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
      "The one-pager I use to align product, marketing, and sales before every launch. Opinionated and built for small teams.",
    size: "PDF · 480 KB",
    type: "Template",
    icon: "◆",
    href: "#",
  },
  {
    slug: "marketing-budget-tracker",
    title: "Marketing Budget Tracker",
    description:
      "Track spend by channel with CAC and payback period built in. Simple enough that you’ll actually use it.",
    size: "XLSX · 92 KB",
    type: "Spreadsheet",
    icon: "▦",
    href: "#",
  },
  {
    slug: "icp-research-framework",
    title: "ICP Research Framework",
    description:
      "Twenty interview questions and a scoring rubric to narrow your ideal customer from a vague hypothesis to a sharp profile.",
    size: "PDF · 320 KB",
    type: "Framework",
    icon: "◎",
    href: "#",
  },
  {
    slug: "content-calendar-template",
    title: "Content Calendar Template",
    description:
      "A Notion-ready calendar for planning quarterly themes and weekly distribution — without overcomplicating it.",
    size: "Notion · Duplicate",
    type: "Template",
    icon: "▢",
    href: "#",
  },
  {
    slug: "cold-outreach-swipe-file",
    title: "Cold Outreach Swipe File",
    description:
      "Thirty cold messages that got replies, annotated with exactly what made each one work.",
    size: "PDF · 1.1 MB",
    type: "Swipe File",
    icon: "✸",
    href: "#",
  },
  {
    slug: "demand-gen-playbook",
    title: "Demand Gen Playbook",
    description:
      "A 24-page guide to building a demand engine from zero — channels, motions, and the metrics that actually matter.",
    size: "PDF · 2.4 MB",
    type: "Playbook",
    icon: "❖",
    href: "#",
  },
];
