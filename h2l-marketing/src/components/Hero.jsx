const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto con entrada que se repite al scrolear */}
        <div 
          className="md:w-3/5 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <span className="text-[#E30613] font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-montserrat">
            Marketing & Publicidad Digital
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#333333] leading-tight mb-6 font-montserrat">
            Creando ideas, <br />
            <span className="text-[#E30613] italic underline decoration-gray-200">creando impacto.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
            Impulsamos el crecimiento de tu negocio con estrategias digitales que sí funcionan. 
            No solo hacemos publicidad, creamos resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            
            <a 
              href="#contacto" 
              className="bg-[#E30613] text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-[0_20px_40px_rgba(227,6,19,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-lg font-montserrat tracking-tight"
            >
              Iniciar Proyecto
            </a>
            <a 
              href="#servicios" 
              className="border-2 border-[#333333] text-[#333333] px-10 py-4 rounded-full font-black text-lg hover:bg-[#333333] hover:text-white active:scale-95 transition-all duration-300 font-montserrat tracking-tight"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Elemento visual con AOS repetible */}
        <div 
          className="md:w-2/5 relative"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <div className="relative animate-bounce-slow">
            <div className="w-full aspect-square bg-gradient-to-tr from-[#E30613] to-[#333333] rounded-[3rem] rotate-3 shadow-2xl flex items-center justify-center p-1">
              <div className="bg-white w-full h-full rounded-[2.8rem] -rotate-3 flex items-center justify-center p-8 text-center border-2 border-gray-100">
                <p className="text-[#333333] font-black text-3xl leading-snug font-montserrat italic">
                  "La publicidad que tu negocio necesita"
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#E30613] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;