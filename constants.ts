export const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbz8xsagqcsKahuaWU6huQ9gciXkKx35T6LiZ0NsD_kLA4Xhw4EAAMbgDSDnnxDER379/exec";

const YOUTUBE_VIDEO_IDS: string[] = [
  "dQw4w9WgXcQ", 
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ"
];

export const YOUTUBE_VIDEO_TITLES: string[] = [
  "Aula 0 - Introdução",
  "Aula 1 - O \"Porquê\" do Gerenciamento em Tempo Real",
  "Aula 2 - O Cérebro (Inputs e Metas do Dashboard)",
  "Aula 3 - A Análise (Métricas de Desempenho e Qualidade)",
  "Aula 4 - A Decisão (Projeção e Alertas Visuais)"
];

export const COURSE_IMAGE_URLS: string[] = [
  "https://images.unsplash.com/photo-1651525670099-f828fb5478a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1680303237111-35809e47fcc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539992190939-08f22d7ebaad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop"
];

// Helper to create the final video links for the component
export const COURSE_VIDEOS = YOUTUBE_VIDEO_IDS.map((id, index) => ({
    id: id,
    title: YOUTUBE_VIDEO_TITLES[index] || `Aula ${index}`,
    imageUrl: COURSE_IMAGE_URLS[index]
}));
