export const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbz8xsagqcsKahuaWU6huQ9gciXkKx35T6LiZ0NsD_kLA4Xhw4EAAMbgDSDnnxDER379/exec";

const YOUTUBE_VIDEO_IDS: string[] = [
  "W4InqMX_IbQ", 
  "nXsOuZ_qcO0",
  "pDorYgrMyeo",
  "9g9GRF9g9jw",
  "fEbeOj0pCHQ"
];

export const YOUTUBE_VIDEO_TITLES: string[] = [
  "Aula 0 - O \"Porquê\" do Gerenciamento em Tempo Real",
  "Aula 1 - As Fundações (Abas CONFIG e LANÇAMENTOS)",
  "Aula 2 - O Cérebro (Inputs e Metas do Dashboard)",
  "Aula 3 - A Análise (Métricas de Desempenho e Qualidade)",
  "Aula 4 - A Decisão (Projeção e Alertas Visuais)"
];

// Helper to create the final video links for the component
export const COURSE_VIDEOS = YOUTUBE_VIDEO_IDS.map((id, index) => ({
    id: id,
    title: YOUTUBE_VIDEO_TITLES[index] || `Aula ${index}`,
    // Generate the YouTube thumbnail URL directly from the video ID
    imageUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}));
