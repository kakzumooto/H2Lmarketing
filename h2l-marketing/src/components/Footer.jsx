const Footer = () => {
  return (
    <footer className="bg-[#333333] py-16 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
        <div data-aos="fade-up">
          <h3 className="text-2xl font-black font-montserrat italic">Click  <span className="text-[#E30613]">Marketing</span></h3>
          <p className="text-gray-400 mt-4 leading-relaxed">Transformamos la presencia digital de las empresas en México con resultados reales e impacto visual.</p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-4 font-bold font-montserrat text-sm tracking-widest">
          <a href="#inicio" className="hover:text-[#E30613] transition-colors">INICIO</a>
          <a href="#servicios" className="hover:text-[#E30613] transition-colors">SERVICIOS</a>
          <a href="#contacto" className="hover:text-[#E30613] transition-colors">CONTACTO</a>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="text-gray-400">
          <p className="font-bold text-white mb-2">Click Marketing</p>
          <p className="text-sm italic">"Creando ideas, creando impacto."</p>
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-xs">© 2026 HéctorDev Portfolio Project.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;