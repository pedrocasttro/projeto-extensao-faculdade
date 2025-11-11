export const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbz8xsagqcsKahuaWU6huQ9gciXkKx35T6LiZ0NsD_kLA4Xhw4EAAMbgDSDnnxDER379/exec";

const YOUTUBE_VIDEO_IDS: string[] = [
  "2R6QiLbLCP8", 
  "2R6QiLbLCP8",
  "2R6QiLbLCP8",
  "2R6QiLbLCP8",
  "2R6QiLbLCP8"
];

export const YOUTUBE_VIDEO_TITLES: string[] = [
  "Aula 0 - Introdução",
  "Aula 1 - O \"Porquê\" do Gerenciamento em Tempo Real",
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
