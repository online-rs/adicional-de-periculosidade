import React from 'react';
import { IconGavel, IconClock, IconAlertTriangle } from './icons';

const InfoSection: React.FC = () => {
  return (
    <section id="o-direito" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-900 sm:text-4xl">
            Por que você tem esse direito?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Entenda a fundamentação jurídica que garante o adicional de periculosidade para quem realiza a troca do cilindro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
              <IconAlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">O Risco de Explosão</h3>
            <p className="text-gray-600 leading-relaxed">
              O direito nasce do risco iminente na troca do Gás Liquefeito de Petróleo (GLP). O gás é extremamente volátil e a atividade expõe o trabalhador a risco de vida, independente do tempo que leva para trocar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Tema 87 TST</div>
            <div className="w-12 h-12 bg-blue-100 text-navy-800 rounded-lg flex items-center justify-center mb-6">
              <IconGavel className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Decisão do TST</h3>
            <p className="text-gray-600 leading-relaxed">
              O Tribunal Superior do Trabalho pacificou o entendimento (Tema 87): o adicional é devido mesmo que a exposição seja por tempo reduzido, aplicando-se a Súmula 364.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <IconClock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Habitualidade vs Tempo</h3>
            <p className="text-gray-600 leading-relaxed">
              Não importa se você gasta apenas 5 minutos trocando o gás. Se a troca faz parte da sua rotina (diária ou semanal), o risco é considerado parte integrante do contrato de trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;