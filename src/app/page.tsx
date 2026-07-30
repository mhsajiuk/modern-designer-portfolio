import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <BrandLogos />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
