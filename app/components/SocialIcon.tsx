import { SVGProps } from "react";

type IconName = "linkedin" | "twitter" | "youtube" | "instagram";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export default function SocialIcon({ name, ...rest }: Props) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };

  switch (name) {
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 10v7" />
          <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
          <path d="M11 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
          <path d="M11 10v7" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M4 4l7.5 10L4.5 20H7l6-6.4L17.5 20H20l-7.8-10.5L19.5 4H17L12 9.7 7.5 4z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="3.2" />
          <path d="M10.5 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
