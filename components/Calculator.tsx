import React, { useState } from 'react';
import { IconDollarSign, IconClock } from './icons';

const Calculator: React.FC = () => {
  const [salary, setSalary] = useState<number>(2000);
  const [months, setMonths] = useState<number>(60);
  const [showDetails, setShowDetails] = useState(false);

  // Logic for Open Calculation
  const monthlyHazard = salary * 0.30;
  const principal = monthlyHazard * months;
  
  // Reflexes Estimation Logic
  // 13º Salário: 1/12 per month approx
  const reflexo13 = principal / 12;
  // Férias + 1/3: 1/12 per month * 1.333
  const reflexoFerias = (principal / 12) * 1.3333; 
  // FGTS (8%) + Multa (40%) -> 11.2% on the total remuneration (Principal + 13º + Férias)
  const baseParaFGTS = principal + reflexo13 + reflexoFerias;
  const reflexoFGTS = baseParaFGTS * 0.112; 
  
  const totalReflexes = reflexo13 + reflexoFerias + reflexoFGTS;
  const total = principal + totalReflexes;

  const handleCalculate = () => {
    setShowDetails(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section id="calculadora" className="py-16 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6">Quanto você pode recuperar?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Faça uma simulação detalhada dos valores retroativos. O cálculo abaixo considera o Adicional de Periculosidade (30%) e seus reflexos nas verbas trabalhistas (13º, Férias e FGTS).
            </p>
            <div className="bg-navy-800/50 p-6 rounded-lg border border-navy-700">
                <h3 className="font-bold text-gold-500 mb-3 flex items-center">
                    <IconClock className="w-5 h-5 mr-2"/>
                    Entenda o período
                </h3>
                <p className="text-sm text-gray-300">
                    O prazo legal para cobrança (prescrição) é de até <strong>60 meses (5 anos)</strong> retroativos à data de entrada da ação.
                </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white text-navy-900 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Seu Salário Base (R$)</label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">R$</span>
                        <input 
                        type="number" 
                        value={salary} 
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white text-gray-900"
                        placeholder="Ex: 2000"
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Tempo na Função (Meses)</label>
                    <div className="relative">
                         <input 
                            type="number" 
                            min="1" 
                            max="60"
                            value={months} 
                            onChange={(e) => setMonths(Number(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white text-gray-900"
                        />
                        <span className="absolute right-3 top-3 text-gray-400 text-sm pointer-events-none">Max: 60</span>
                    </div>
                    <input 
                        type="range"
                        min="1"
                        max="60"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                        className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-800"
                    />
                </div>
              </div>

              <button 
                onClick={handleCalculate}
                className="w-full bg-navy-800 hover:bg-navy-900 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <IconDollarSign className="w-5 h-5 mr-2" />
                Calcular Estimativa Detalhada
              </button>

              {showDetails && (
                <div className="mt-8 transition-opacity duration-500 ease-in-out">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b border-gray-200">
                        <h4 className="font-bold text-navy-900 flex items-center justify-between">
                            Demonstrativo do Cálculo
                            <span className="text-xs font-normal text-gray-500 bg-white px-2 py-1 rounded border">Estimado</span>
                        </h4>
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                            <span className="text-gray-600">Adicional Mensal (30%)</span>
                            <span className="font-mono font-bold text-navy-800">{formatCurrency(monthlyHazard)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                            <span className="text-gray-600">Valor Principal ({months} meses)</span>
                            <span className="font-mono font-bold text-navy-800">{formatCurrency(principal)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                            <span className="text-gray-600">Reflexos (13º, Férias, FGTS)</span>
                            <span className="font-mono font-bold text-green-600">
                                + {formatCurrency(totalReflexes)}
                            </span>
                        </div>
                        
                        <div className="pt-3 mt-2 bg-green-50 -mx-4 -mb-4 p-4 flex justify-between items-center">
                            <span className="font-bold text-navy-900 text-lg">Total Estimado</span>
                            <span className="font-bold text-2xl text-green-700">{formatCurrency(total)}</span>
                        </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    *Este cálculo é uma simulação ilustrativa com base no Tema 87 do TST e não substitui o cálculo pericial oficial. O cálculo de reflexos inclui estimativas de 13º salário, 1/3 de férias e multa de 40% do FGTS.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;