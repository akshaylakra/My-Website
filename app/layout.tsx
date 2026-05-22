import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akshayklakra.com"),
  title: "Akshay Lakra — B2B Marketer",
  description:
    "Akshay Lakra is a B2B marketer at a tech startup. Writing about GTM strategy, demand generation, and positioning that actually moves markets.",
  keywords: [
    "Akshay Lakra",
    "B2B marketing",
    "GTM strategy",
    "demand generation",
    "product marketing",
    "SaaS marketing",
  ],
  authors: [{ name: "Akshay Lakra" }],
  creator: "Akshay Lakra",
  openGraph: {
    title: "Akshay Lakra — B2B Marketer",
    description:
      "B2B marketer writing about GTM, demand gen, and positioning that moves markets.",
    url: "https://akshayklakra.com",
    siteName: "Akshay Lakra",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Lakra — B2B Marketer",
    description:
      "B2B marketer writing about GTM, demand gen, and positioning that moves markets.",
    creator: "@akshayklakra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">{children}</body>
    </html>
  );
}
