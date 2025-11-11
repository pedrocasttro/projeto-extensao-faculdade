import React from 'react';
import RegistrationForm from './RegistrationForm';
import { FormData } from '../types';

interface LandingPageProps {
  onSuccess: (data: { name: string }) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


const LandingPage: React.FC<LandingPageProps> = ({ onSuccess }) => {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Coluna 1: Texto/Copy */}
        <div className="animate-fade-in-up">
          <img 
            src="https://unicv.edu.br/wp-content/uploads/2023/10/unicv-logo-site.png" 
            alt="Logo UniCV"
            className="h-16 mb-8"
          />
          <p className="text-brand-amber-400 font-bold mb-2">MINI-CURSO 100% GRATUITO</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Deixe de 'Apagar Incêndios'. <span className="text-brand-amber-400">Domine sua Linha de Produção com Dados.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-6">
            Aprenda a usar o Google Sheets para transformar a gestão da sua equipe e tomar decisões mais inteligentes.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-brand-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Medir Disponibilidade:</strong> Identifique e reduza o tempo de máquina parada.</span>
            </li>
            <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-brand-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Calcular Desempenho:</strong> Saiba se sua equipe está no ritmo certo (UN/h).</span>
            </li>
            <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-brand-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Monitorar Qualidade:</strong> Controle o percentual de refugo e melhore seus processos.</span>
            </li>
            <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-brand-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Prever o Futuro:</strong> Crie dashboards com projeções e alertas automáticos (Verde/Vermelho).</span>
            </li>
          </ul>

          <div className="bg-brand-dark-800 p-4 rounded-lg border-l-4 border-brand-amber-500">
            <p className="text-slate-300">
              Uma iniciativa de extensão da <span className="font-bold text-white">UniCV (Centro Universitário Cidade Verde)</span> para capacitar profissionais da comunidade com tecnologia prática e de alto impacto.
            </p>
          </div>
        </div>

        {/* Coluna 2: Formulário */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
          <RegistrationForm onSuccess={onSuccess} />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;