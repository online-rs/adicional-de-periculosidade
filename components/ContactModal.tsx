import React, { useState } from 'react';
import { IconX, IconCheck, IconArrowRight } from './icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

type Step = 'NAME' | 'IS_OPERATOR' | 'IS_EXCHANGER' | 'READY';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Agende sua Análise Gratuita" }) => {
  const [step, setStep] = useState<Step>('NAME');
  const [name, setName] = useState('');
  const [isOperator, setIsOperator] = useState<boolean | null>(null);
  const [exchangedCylinders, setExchangedCylinders] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 'NAME' && name.trim()) {
      setStep('IS_OPERATOR');
    }
  };

  const handleOperatorAnswer = (answer: boolean) => {
    setIsOperator(answer);
    if (answer) {
      setStep('IS_EXCHANGER');
    } else {
      // If not an operator, skip to ready state, but with different context
      setExchangedCylinders(false);
      setStep('READY');
    }
  };

  const handleExchangerAnswer = (answer: boolean) => {
    setExchangedCylinders(answer);
    setStep('READY');
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "5551993525391";
    let message = `Olá, meu nome é ${name}.`;

    if (isOperator) {
      message += ` Sou operador de empilhadeira GLP.`;
      if (exchangedCylinders) {
        message += ` Eu realizava a troca dos cilindros de gás.`;
      } else {
        message += ` Eu NÃO realizava a troca dos cilindros.`;
      }
    } else {
      message += ` Não atuei como operador de empilhadeira GLP, mas gostaria de tirar dúvidas.`;
    }

    message += ` Gostaria de uma análise gratuita sobre o adicional de periculosidade (Tema 87 TST).`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const resetModal = () => {
      setStep('NAME');
      setName('');
      setIsOperator(null);
      setExchangedCylinders(null);
      onClose();
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={resetModal}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button type="button" onClick={resetModal} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Fechar</span>
              <IconX className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            
            {step === 'NAME' && (
              <div className="text-center">
                 <h3 className="text-2xl leading-6 font-serif font-bold text-navy-900 mb-4">
                   Vamos iniciar sua análise
                 </h3>
                 <p className="text-gray-500 mb-6">Para começar, como podemos te chamar?</p>
                 <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu primeiro nome"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg text-center focus:ring-2 focus:ring-navy-800 mb-6"
                    onKeyDown={(e) => e.key === 'Enter' && handleNextStep()}
                 />
                 <button 
                    onClick={handleNextStep}
                    disabled={!name.trim()}
                    className="w-full bg-navy-800 text-white font-bold py-3 rounded-lg hover:bg-navy-900 disabled:opacity-50 transition-colors"
                 >
                    Próximo
                 </button>
              </div>
            )}

            {step === 'IS_OPERATOR' && (
              <div className="text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Olá, {name}!</h3>
                <p className="text-lg text-gray-600 mb-8">
                    Você trabalhou como <strong>Operador de Empilhadeira a Gás (GLP)</strong>?
                </p>
                <div className="space-y-3">
                    <button 
                        onClick={() => handleOperatorAnswer(true)}
                        className="w-full py-4 border-2 border-navy-800 bg-navy-50 text-navy-900 font-bold rounded-lg hover:bg-navy-800 hover:text-white transition-all"
                    >
                        SIM, fui Operador
                    </button>
                    <button 
                        onClick={() => handleOperatorAnswer(false)}
                        className="w-full py-4 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-all"
                    >
                        NÃO
                    </button>
                </div>
              </div>
            )}

            {step === 'IS_EXCHANGER' && (
               <div className="text-center">
               <h3 className="text-xl font-bold text-navy-900 mb-2">Pergunta Importante</h3>
               <p className="text-lg text-gray-600 mb-8">
                   Era <strong>você</strong> quem fazia a troca do cilindro de gás da empilhadeira?
               </p>
               <div className="space-y-3">
                   <button 
                       onClick={() => handleExchangerAnswer(true)}
                       className="w-full py-4 border-2 border-gold-500 bg-gold-50 text-navy-900 font-bold rounded-lg hover:bg-gold-500 hover:text-white transition-all shadow-sm"
                   >
                       SIM, eu trocava o gás
                   </button>
                   <button 
                       onClick={() => handleExchangerAnswer(false)}
                       className="w-full py-4 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-all"
                   >
                       NÃO, outra pessoa trocava
                   </button>
               </div>
             </div>
            )}

            {step === 'READY' && (
                 <div className="text-center py-6">
                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                     <IconCheck className="h-8 w-8 text-green-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-navy-900 mb-2">Tudo Pronto!</h3>
                 <p className="text-gray-600 mb-8">
                     Clique no botão abaixo para enviar suas respostas e iniciar a conversa com nosso advogado especialista no WhatsApp.
                 </p>
                 <a 
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={resetModal}
                    className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-lg px-6 py-4 bg-green-600 text-lg font-bold text-white hover:bg-green-700 focus:outline-none transform hover:scale-105 transition-all"
                 >
                     Falar com Especialista no WhatsApp
                     <IconArrowRight className="ml-2 w-5 h-5" />
                 </a>
             </div>
            )}

          </div>
          {step !== 'READY' && (
            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                 <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                        <div className={`h-2 w-2 rounded-full ${step === 'NAME' ? 'bg-navy-800' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-2 rounded-full ${step === 'IS_OPERATOR' ? 'bg-navy-800' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-2 rounded-full ${step === 'IS_EXCHANGER' ? 'bg-navy-800' : 'bg-gray-300'}`}></div>
                    </div>
                    <p className="text-xs text-gray-400">Confidencial e Seguro</p>
                 </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;