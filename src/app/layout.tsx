import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport = {
  themeColor: "#FAFAFA",
};

export const metadata: Metadata = {
  title: "Huzaifa Uddin Khan — Software QA Engineer | Automation & Manual Testing",
  description:
    "Software QA Engineer at Liquid Technologies with 1.5+ years of experience specializing in manual and automation testing, Python, Selenium WebDriver, Postman API testing, and JIRA defect management.",
  keywords: [
    "Huzaifa Uddin Khan",
    "Software QA Engineer",
    "QA Automation Engineer",
    "Software Quality Assurance",
    "Selenium WebDriver",
    "Python Automation",
    "Postman API Testing",
    "JIRA Defect Tracking",
    "Liquid Technologies",
    "CodeLabs",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Huzaifa Uddin Khan", url: "https://github.com/Huzaiffauddin" }],
  openGraph: {
    type: "website",
    title: "Huzaifa Uddin Khan — Software QA Engineer",
    description:
      "1.5+ years of hands-on experience in Selenium WebDriver, Python test automation, REST API testing, and delivering defect-free software products.",
    siteName: "Huzaifa Uddin Khan Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAFAFA] text-[#171717] min-h-screen relative`}
      >
        <div className="top-ambient-glow" />
        {children}
      </body>
    </html>
  );
}
