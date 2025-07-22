// src/app/page.tsx
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Products from '@/components/Products';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Products /> 
      <Footer />
    </main>
  );
}
