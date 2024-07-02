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
  '4': {
    title: "¿Qué es lo que más odias de un libro?",
    params: ["Falta de lógica", "Lentitud", "Falta de humor", "Final demasiado genérico"],
    type: "multiple-select"
  },
  '5': {
    title: "¿Cuáles son tus temas favoritos?",
    description: "Elige hasta 3 temas que te gusten",
    params: ["Hombre lobo", "Romance", "Acción", "Jóvenes Adultos", "Obsesión Real", "Chico Malo", "Multimillonario"],
    images: ["🐺", "🥰", "💃", "💁‍♀️", "👑", "🤠", "🤑"],
    type: 'bubble',
  },
  'progressbar': {
    title: "Encontrando colecciones para ti..."
  },
  'email': {
    title: 'Correo electrónico',
    description: 'Ingrese su correo electrónico para obtener acceso completo',
    terms: 'Al continuar, acepto la Política de privacidad y los Términos de uso.',
    type: 'email',
    placeholder: 'Tu correo electrónico'
  },
  "button": {
    next: "Siguiente",
    "retake-quiz": "Volver a hacer la prueba"
  },
  "greetings": {
    title: "Gracias",
    subtitle: "por apoyarnos y pasar la prueba",
    download: "Descargar mis respuestas"
  },
  "not-found": {
    oops: "¡Vaya!... No encontrado"
  }
}
