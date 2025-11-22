import React from 'react';
import { IconFileText, IconCheck } from './icons';

interface ChecklistProps {
    onDownloadClick: () => void;
}

const ChecklistSection: React.FC<ChecklistProps> = ({ onDownloadClick }) => {
  return (
    <section id="como-funciona" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-100 text-navy-800 mb-6">
          <IconFileText className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
          Como Provar o seu Direito?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          A maior dificuldade dos operadores é comprovar a <strong>habitualidade</strong> da troca de gás. Preparamos um checklist gratuito para te ajudar a reunir as provas necessárias antes de entrar com a ação.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-left mb-8">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">O que você vai encontrar neste guia:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <IconCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Como registrar os horários de troca de forma legal.</span>
            </li>
            <li className="flex items-start">
              <IconCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Documentos essenciais (PPRA, LTCAT).</span>
            </li>
            <li className="flex items-start">
              <IconCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Como solicitar testemunhas eficazes.</span>
            </li>
            <li className="flex items-start">
              <IconCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Fotos e vídeos: o que pode e o que não pode.</span>
            </li>
          </ul>
        </div>

        <button 
          onClick={onDownloadClick}
          className="bg-white border-2 border-navy-800 text-navy-800 hover:bg-navy-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
        >
          Baixe o Checklist de Provas (PDF Grátis)
        </button>
      </div>
    </section>
  );
};

export default ChecklistSection;