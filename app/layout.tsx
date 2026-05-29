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
  metadataBase: new URL("https://akshaylakra.com"),
  title: "Akshay Lakra — Marketer & Creator",
  description:
    "B2B marketer and creator behind @akshay_decodes. Writing about GTM strategy, demand generation, and the hidden patterns behind brands and markets.",
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
    title: "Akshay Lakra — Marketer & Creator",
    description:
      "B2B marketer and creator behind @akshay_decodes. Writing about GTM strategy, demand generation, and the hidden patterns behind brands and markets.",
    url: "https://akshaylakra.com",
    siteName: "Akshay Lakra",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Lakra — Marketer & Creator",
    description:
      "B2B marketer and creator behind @akshay_decodes. Writing about GTM strategy, demand generation, and the hidden patterns behind brands and markets.",
    creator: "@akshaylkr",
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
