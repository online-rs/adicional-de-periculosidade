import React from 'react';
import { IconAlertTriangle, IconArrowRight, IconCalculator } from './icons';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  
  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('calculadora');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-navy-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1600/900?grayscale&blur=2"
          alt="Warehouse forklift operation"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold-600/20 border border-gold-600 text-gold-500 text-sm font-semibold mb-6 animate-pulse">
            <IconAlertTriangle className="w-4 h-4 mr-2" />
            Atenção Operadores: Tema 87 do TST
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6 shadow-sm">
            Operador de Empilhadeira: <span className="text-gold-500">Garanta o Adicional de Periculosidade</span> por Troca de Gás GLP, Agora!
          </h1>
          
          <p className="mt-4 text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Você tem direito a <strong className="text-white font-bold">30% a mais sobre o salário-base</strong> e pode recuperar valores retroativos dos últimos 5 anos. Decisão consolidada pelo TST.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto flex justify-center items-center px-6 py-4 border border-transparent text-base font-bold rounded-md text-navy-900 bg-gold-500 hover:bg-gold-600 md:text-lg md:px-8 shadow-lg transition-all hover:scale-105 ring-2 ring-offset-2 ring-offset-navy-900 ring-gold-500"
            >
              Agende sua Análise Gratuita
              <IconArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <a 
              href="#calculadora"
              onClick={scrollToCalculator}
              className="w-full sm:w-auto flex justify-center items-center px-6 py-4 border border-transparent text-base font-bold rounded-md text-white bg-green-700 hover:bg-green-800 md:text-lg md:px-8 shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <IconCalculator className="mr-2 w-5 h-5" />
              Simular Valores
            </a>

            <a 
              href="#como-funciona"
              className="w-full sm:w-auto flex justify-center items-center px-6 py-4 border border-gray-500 text-base font-medium rounded-md text-gray-200 bg-transparent hover:bg-gray-800 md:text-lg md:px-8 transition-colors"
            >
              Entenda seu Direito
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400 italic">
            *Janela de oportunidade temporária conforme regularização do mercado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;