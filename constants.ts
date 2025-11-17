export const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbz8xsagqcsKahuaWU6huQ9gciXkKx35T6LiZ0NsD_kLA4Xhw4EAAMbgDSDnnxDER379/exec";

export const MATERIAL_URL: string = "https://docs.google.com/document/d/1QrB7ZWPyYs3YAQAkq2-VZHOAYKWV_cnexHvf3HSA1OE/edit?usp=sharing";

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

const LESSON_MATERIAL_URLS: (string | null)[] = [
    null, 
    "https://docs.google.com/document/d/1dqJTgkcIAWcf2u7qpMok7RCT0bOqFNbFFfAH0XomYcU/edit?usp=sharing",
    "https://docs.google.com/document/d/1ruq1wW4tlspI2y5NG1q43xMOYwd9if_-runYsU3KpSA/edit?usp=sharing",
    "https://docs.google.com/document/d/1t1vsro1s1stBvX0GRI3RMxCTuQPJbzBrbHxa7ScefUc/edit?usp=sharing",
    "https://docs.google.com/document/d/19SLstfQFBpL_roaV-xMTzMh8dM-31It5HBiyFiHccoM/edit?usp=sharing"
];
export const COURSE_VIDEOS = YOUTUBE_VIDEO_IDS.map((id, index) => ({
    id: id,
    title: YOUTUBE_VIDEO_TITLES[index] || `Aula ${index}`,
    imageUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    materialUrl: LESSON_MATERIAL_URLS[index]
}));
