import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ProofSection from './components/ProofSection';
import Calculator from './components/Calculator';
import ChecklistSection from './components/ChecklistSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Agende sua Análise Gratuita");

  const openModal = (title?: string) => {
    if (title) setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <Header onContactClick={() => openModal("Fale com um Especialista")} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => openModal("Agende sua Análise de Viabilidade")} />
        
        <InfoSection />
        
        <ProofSection />
        
        <Calculator />
        
        <ChecklistSection onDownloadClick={() => openModal("Receber Checklist por Email")} />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
              Não deixe seu direito acumular prejuízo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A janela de oportunidade para recuperar valores retroativos está aberta. Converse com um especialista hoje mesmo.
            </p>
            <button 
              onClick={() => openModal("Análise Final de Caso")}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-navy-900 bg-gold-500 hover:bg-gold-600 shadow-lg transform transition-all hover:scale-105"
            >
              Falar com Advogado Agora (Gratuito)
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={modalTitle}
      />
    </div>
  );
};

export default App;