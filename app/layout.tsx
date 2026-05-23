import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
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
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">{children}</body>
    </html>
  );
}
