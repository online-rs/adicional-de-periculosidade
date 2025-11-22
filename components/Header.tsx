import React from 'react';
import { IconPhone, IconScale, IconWhatsApp } from './icons';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center text-navy-800">
              {/* Mobile Icon: WhatsApp (Green) */}
              <div className="md:hidden">
                <IconWhatsApp className="h-8 w-8 mr-2 text-green-600" />
              </div>
              {/* Desktop Icon: Scale (Original) */}
              <div className="hidden md:block">
                <IconScale className="h-8 w-8 mr-2" />
              </div>
              
              <div>
                <h1 className="font-serif font-bold text-xl leading-tight">Direito Trabalhista</h1>
                <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">Especialistas em Periculosidade</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#o-direito" className="text-gray-600 hover:text-navy-800 font-medium transition-colors">O Direito</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-navy-800 font-medium transition-colors">Como Funciona</a>
            <a href="#calculadora" className="text-gray-600 hover:text-navy-800 font-medium transition-colors">Calculadora</a>
            <button 
              onClick={onContactClick}
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md font-bold shadow transition-all transform hover:scale-105"
            >
              <IconWhatsApp className="w-4 h-4 mr-2" />
              WhatsApp: (51) 99352-5391
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={onContactClick} className="text-green-600 font-bold p-2 bg-green-50 rounded-full hover:bg-green-100 transition-colors">
                <IconWhatsApp className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;