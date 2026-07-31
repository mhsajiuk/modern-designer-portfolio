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
  title: "Aura Studio | Portofolio Desainer Visual & Pengembang Web",
  description: "Portofolio Aura Studio - Desainer Visual & Pengembang Web menampilkan desain produk, identitas brand, pengarahan seni, dan aplikasi web berkinerja tinggi.",
  keywords: ["Desainer Visual", "Pengembang Web", "Desain UI/UX", "Desain Produk", "Art Direction", "Portofolio React Next.js"],
  authors: [{ name: "Aura Studio" }],
  openGraph: {
    title: "Aura Studio | Desainer Visual & Pengembang Web",
    description: "Menciptakan pengalaman digital yang indah, identitas brand yang kuat, dan aplikasi web berkinerja tinggi.",
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
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${epilogue.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#2D2D2D] antialiased selection:bg-[#2D2D2D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
