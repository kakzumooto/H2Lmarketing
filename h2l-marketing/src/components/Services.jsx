import { FaBullhorn, FaChartLine, FaPaintBrush, FaRocket } from 'react-icons/fa';

const Services = () => {
  const servicios = [
    { title: "Marketing Digital", desc: "Estrategias personalizadas para dominar el mercado.", icon: <FaBullhorn /> },
    { title: "Publicidad (Ads)", desc: "Campañas de alto impacto en Google y redes sociales.", icon: <FaChartLine /> },
    { title: "Branding", desc: "Diseñamos la identidad visual que tu marca merece.", icon: <FaPaintBrush /> },
    { title: "Crecimiento", desc: "Escalamos tu negocio con resultados medibles.", icon: <FaRocket /> }
  ];

  return (
    <section id="servicios" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Título con animación de zoom */}
        <h2 
          data-aos="zoom-in" 
          className="text-4xl font-black text-[#333333] mb-16"
        >
          Nuestros <span className="text-[#E30613]">Servicios</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {servicios.map((s, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={i * 200} 
              className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left border-b-4 hover:border-b-[#E30613]"
            >
              <div className="text-[#E30613] text-4xl mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#333333]">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;