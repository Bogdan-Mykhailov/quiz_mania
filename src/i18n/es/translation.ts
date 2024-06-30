export default {
  '1': {
    title: "¿Cuál es su lengua preferida?",
    description: "Elegir idioma",
    params: ["Inglés", "Francés", "Alemán", "Español"],
    type: "single-select",
  },
  '2': {
    title: "¿Con qué género te identificas?",
    description: "Por favor, comparte cómo te identificas",
    params: ["Femenino", "Masculino", "Otro"],
    type: "single-select-image",
    images: ['👩🏼', '👨🏻', '🧔🏻‍♀️'],
  },
  '3': {
    title: "¿Cuál es tu edad?",
    params: ['18-29 años', '30-39 años', '40-49 años', '50+'],
    type: 'single-select',
  },
}
