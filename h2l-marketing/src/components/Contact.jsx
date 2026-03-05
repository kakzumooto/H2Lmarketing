import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const clientEmail = "kakzumooto22@gmail.com"; 
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${clientEmail}`, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setEnviado(true);
        form.reset();
        // El mensaje de éxito se queda 6 segundos
        setTimeout(() => setEnviado(false), 5000);
      }
    } catch (error) {
      console.error("Error al enviar", error);
      alert("Hubo un error al enviar el mensaje. Intenta por WhatsApp.");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16" data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-[#333333] font-montserrat uppercase tracking-tighter">
            ¿Hacemos algo <span className="text-[#E30613]">increíble?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info de Contacto */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-[#E30613] shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-[#333333] font-montserrat">Canales Directos</h3>
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-md text-[#E30613]"><FaEnvelope size={20}/></div>
                <p className="font-bold text-gray-700">{clientEmail}</p>
              </div>
              <a href="https://wa.me/525588088873" className="mt-10 w-full bg-[#25D366] text-white flex items-center justify-center gap-3 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-lg font-montserrat">
                <FaWhatsapp size={24}/> WHATSAPP AGENCIA
              </a>
            </div>
          </div>

          {/* Formulario Premium */}
          <div data-aos="fade-left" data-aos-delay="200" className="bg-[#333333] p-8 md:p-12 rounded-[2.5rem] shadow-2xl min-h-[460px] flex items-center justify-center relative overflow-hidden">
            
            {enviado ? (
              <div className="text-center space-y-4 animate-bounce-slow">
                <FaCheckCircle className="text-[#E30613] text-7xl mx-auto" />
                <h3 className="text-white text-2xl font-black font-montserrat uppercase">¡Enviado con éxito!</h3>
                <p className="text-gray-400 font-medium">En breve un consultor de H2L se pondrá en contacto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-5 relative z-10">
                {/* CONFIGURACIÓN PARA CORREO ESTÉTICO */}
                <input type="hidden" name="_subject" value="NUEVA SOLICITUD - H2L MEDIA & ADS" />
                <input type="hidden" name="_template" value="table" /> {/* ESTO HACE QUE EL MAIL SE VEA BIEN */}
                <input type="hidden" name="_captcha" value="false" />

                <input name="Nombre" type="text" placeholder="Tu Nombre" required className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:border-[#E30613] focus:bg-white/20 transition-all" />
                <input name="Email" type="email" placeholder="Correo corporativo" required className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:border-[#E30613] focus:bg-white/20 transition-all" />
                <textarea name="Mensaje" placeholder="Háblanos de tu negocio..." required className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none h-32 focus:border-[#E30613] focus:bg-white/20 transition-all resize-none"></textarea>
                
                <button type="submit" className="w-full bg-[#E30613] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#E30613] transition-all font-montserrat uppercase tracking-widest shadow-xl">
                  ENVIAR MENSAJE <FaPaperPlane />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;