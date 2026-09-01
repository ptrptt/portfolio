import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundCircles from "@/components/BackgroundCircles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phattharaphon Tangtaeng | Software Tester & QA Engineer",
  description:
    "Portfolio of Phattharaphon Tangtaeng — Software Engineering student specializing in Software Testing, QA, and Quality Assurance. Open to internship opportunities.",
  keywords: [
    "Software Tester",
    "QA Engineer",
    "Software Testing",
    "Quality Assurance",
    "Software Engineering",
    "Internship",
    "Phattharaphon Tangtaeng",
  ],
  authors: [{ name: "Phattharaphon Tangtaeng" }],
  creator: "Phattharaphon Tangtaeng",
  robots: "index, follow",
  openGraph: {
    title: "Phattharaphon Tangtaeng | Software Tester & QA Engineer",
    description:
      "Portfolio of Phattharaphon Tangtaeng — Software Engineering student specializing in Software Testing and Quality Assurance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phattharaphon Tangtaeng | Software Tester",
    description:
      "Software Engineering student specializing in QA and Software Testing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F3FCFB] text-slate-900 antialiased selection:bg-[#BFF7F1] selection:text-[#075E59] relative">
        <BackgroundCircles />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
