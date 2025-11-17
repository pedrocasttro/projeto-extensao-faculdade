import React from 'react';
import { COURSE_VIDEOS, MATERIAL_URL } from '../constants';

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

const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
        <h2 className="text-xl font-bold text-white mb-3">Seus Materiais de Apoio</h2>
        <p className="text-slate-300">
          Para acompanhar as aulas, você precisa da sua própria cópia da planilha e do guia de fórmulas.
          <br />
          <strong className="text-brand-amber-400">Para a planilha, clique em "Arquivo" &gt; "Fazer uma cópia" na página que abrir.</strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5">
            <a 
              href="https://docs.google.com/spreadsheets/d/1x-hsZ51gQB83S6q6uVhM0O5jp-r35XAFG_QBAuSB1Vc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-800 focus-visible:ring-green-500 transition-all duration-300"
            >
              <SheetIcon className="h-5 w-5 mr-2" />
              ACESSAR PLANILHA MODELO
            </a>
            <a 
              href={MATERIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-brand-amber-500 text-brand-amber-500 font-bold py-3 px-6 rounded-md hover:bg-brand-amber-500 hover:text-brand-dark-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-800 focus-visible:ring-brand-amber-500 transition-all duration-300"
            >
              <DocumentIcon className="h-5 w-5 mr-2" />
              FÓRMULAS DO CURSO
            </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSE_VIDEOS.map((video) => (
          <div
            key={video.id + video.title}
            className="group relative bg-brand-dark-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Assistir ${video.title}`}
              className="block rounded-lg overflow-hidden"
            >
              <img
                src={video.imageUrl}
                alt={video.title}
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <PlayIcon className="h-16 w-16 text-white" />
              </div>
            </a>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-lg"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center gap-2 pointer-events-none">
              <h3 className="font-bold text-white flex-1">{video.title}</h3>
              {video.materialUrl && (
                  <a
                    href={video.materialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/tooltip relative z-10 flex-shrink-0 inline-flex items-center justify-center p-2 rounded-full bg-brand-amber-500 text-brand-dark-900 hover:bg-brand-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-400 transition-all duration-300 pointer-events-auto"
                    aria-label={`Acessar material para ${video.title}`}
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs font-semibold text-white bg-slate-700 rounded-md opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-opacity duration-300 pointer-events-none">
                      Ver material
                    </span>
                  </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;