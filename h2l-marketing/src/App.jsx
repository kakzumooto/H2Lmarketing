import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,    
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;