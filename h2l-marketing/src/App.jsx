import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importa tus componentes
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
  }, []);

  return (
    <div className="overflow-x-hidden bg-white font-sans text-[#333333]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;