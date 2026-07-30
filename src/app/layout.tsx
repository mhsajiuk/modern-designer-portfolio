import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modern-designer-portfolio.vercel.app"),
  title: "Aura Studio | Modern Visual Designer & Web Portfolio",
  description: "Portfolio of Aura Studio - Visual Designer & Web Developer showcasing product design, visual branding, art direction, and high-performance web applications.",
  keywords: ["Visual Designer", "Web Developer", "UI/UX Design", "Product Design", "Art Direction", "React Next.js Portfolio"],
  authors: [{ name: "Aura Studio" }],
  openGraph: {
    title: "Aura Studio | Visual Designer & Developer",
    description: "Crafting beautiful digital experiences, brand identities, and high-performance web applications.",
    url: "https://modern-designer-portfolio.vercel.app",
    siteName: "Aura Studio Portfolio",
    images: [
      {
        url: "/images/hero_designer.png",
        width: 1200,
        height: 630,
        alt: "Aura Studio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#2D2D2D] antialiased selection:bg-[#2D2D2D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
