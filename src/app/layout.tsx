import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Narmatha A | Aspiring Full Stack Developer Portfolio",
  description: "Professional portfolio of Narmatha A, a driven Computer Science Engineering student and Aspiring Full Stack Developer. Discover projects, internships, achievements, and publications.",
  keywords: ["Narmatha A", "Full Stack Developer", "Software Engineer Portfolio", "Computer Science Student", "SNS College of Engineering", "E-Commerce Rating Detector", "IoT Threat Recognition Patent"],
  authors: [{ name: "Narmatha A" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
