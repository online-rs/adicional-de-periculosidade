import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
              Casos Reais, Resultados Reais
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Recentemente, analisamos o caso de um operador que trocava o gás apenas 3 vezes na semana. A empresa negava o pagamento alegando "tempo reduzido".
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Com base no Tema 87 do TST, revertemos a situação.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-navy-800 p-6">
              <p className="font-bold text-navy-900 mb-1">Resultado do Processo (Estimado)</p>
              <p className="text-3xl font-bold text-navy-800">R$ 26.000,75</p>
              <p className="text-sm text-gray-500 mt-2">
                *Valor referente a 5 anos de retroativo para um salário base de R$ 1.800,00.
              </p>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gold-100 rounded-xl transform rotate-2"></div>
             <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">O que diz a Lei?</h3>
                <blockquote className="italic text-gray-600 border-l-2 border-gold-500 pl-4 my-4">
                  "Faz jus ao adicional de periculosidade o empregado que se expõe permanentemente ou que, de forma intermitente, sujeita-se a condições de risco..."
                </blockquote>
                <p className="text-right font-bold text-navy-800">- Súmula 364 do TST</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;