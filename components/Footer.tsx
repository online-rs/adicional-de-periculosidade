import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-bold text-lg mb-4">Direito Trabalhista Especializado</h4>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Somos um escritório focado na defesa dos direitos de operadores de máquinas e trabalhadores industriais. Nossa missão é garantir que a lei seja cumprida, especialmente em casos de periculosidade e insalubridade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
            <ul className="text-sm space-y-2">
              <li>WhatsApp: (51) 99352-5391</li>
              <li>Email: contato@seuescritorio.com.br</li>
              <li>Escritório 100% digital. Advogado Trabalhista.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Links Úteis</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#o-direito" className="hover:text-gold-500">Entenda o Direito</a></li>
              <li><a href="#calculadora" className="hover:text-gold-500">Calculadora</a></li>
              <li><a href="#como-funciona" className="hover:text-gold-500">Checklist de Provas</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-xs text-gray-500 text-center">
          <p className="mb-2">
            <strong>Aviso Legal:</strong> Este site tem caráter meramente informativo e não substitui a consulta jurídica formal. Os valores apresentados na calculadora são estimativas baseadas na jurisprudência atual (Tema 87 TST) e podem variar conforme as particularidades de cada caso e análise pericial. Não prometemos resultado de causa.
          </p>
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados. Marketing Jurídico em conformidade com o Código de Ética da OAB.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;