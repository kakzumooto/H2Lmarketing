import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/clickMarketing.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-25 flex justify-between items-center">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <img src={logo} alt="Click Marketing" className="h-25 w-auto object-contain" />
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 font-bold text-[#333333] uppercase text-sm tracking-widest">
            <li><a href="#inicio" className="hover:text-[#E30613] transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-[#E30613] transition-colors">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-[#E30613] transition-colors">Contacto</a></li>
          </ul>
          <a href="#contacto" className="bg-[#E30613] text-white px-8 py-2.5 rounded-full font-black hover:bg-[#333333] transition-all shadow-lg">
            COTIZAR
          </a>
        </div>

        {/* Icono Hamburguesa Mobile */}
        <div className="md:hidden text-3xl text-[#333333] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 gap-4 font-bold shadow-xl animate-fade-in-down">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg">Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)} className="text-lg">Servicios</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-lg text-[#E30613]">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;