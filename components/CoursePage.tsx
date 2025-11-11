import React from 'react';
import { YOUTUBE_VIDEO_IDS, YOUTUBE_VIDEO_TITLES } from '../constants';

interface CoursePageProps {
  studentName: string;
}

const SheetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a2 2 0 012-2h9.586a2 2 0 011.414.586l4.414 4.414A2 2 0 0121 7.586V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm10-1V7h4L13 2zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);


const CoursePage: React.FC<CoursePageProps> = ({ studentName }) => {
  const firstName = studentName.split(' ')[0];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <img
        src="https://unicv.edu.br/wp-content/uploads/2023/10/unicv-logo-site.png"
        alt="Logo UniCV"
        className="h-16 mx-auto mb-8"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Bem-vindo(a), <span className="text-brand-amber-400">{firstName}</span>!
      </h1>
      <p className="text-lg text-slate-400 text-center mb-12">
        Siga as aulas abaixo para construir seu dashboard de produção do zero.
      </p>

      <div className="bg-brand-dark-800 p-6 rounded-lg mb-12 text-center max-w-3xl mx-auto border border-slate-700">
        <h2 className="text-xl font-bold text-white mb-3">Sua Ferramenta de Trabalho: A Planilha Modelo</h2>
        <p className="text-slate-300 mb-5">
          Para acompanhar as aulas, você precisa da sua própria cópia da planilha. É simples:
          <br />
          <strong className="text-brand-amber-400">Clique no botão abaixo e, na página que abrir, vá em "Arquivo" &gt; "Fazer uma cópia".</strong>
        </p>
        <a 
          href="https://docs.google.com/spreadsheets/d/1x-hsZ51gQB83S6q6uVhM0O5jp-r35XAFG_QBAuSB1Vc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark-800 focus:ring-green-500 transition-all duration-300"
        >
          <SheetIcon className="h-5 w-5 mr-2" />
          ACESSAR PLANILHA MODELO
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {YOUTUBE_VIDEO_IDS.map((videoId, index) => (
          <a
            key={videoId + index}
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-brand-dark-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={YOUTUBE_VIDEO_TITLES[index]}
              className="w-full object-cover aspect-video"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Title at the bottom */}
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="font-bold text-white">{YOUTUBE_VIDEO_TITLES[index] || `Aula ${index}`}</h3>
            </div>

            {/* Centered play icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <PlayIcon className="h-16 w-16 text-white" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;