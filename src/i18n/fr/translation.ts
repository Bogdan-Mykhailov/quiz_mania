export default {
  '1': {
    title: "Quelle est votre langue préférée?",
    description: "Choisir une langue",
    params: ["Anglais", "Français", "Allemand", "Espagnol"],
    type: "single-select",
  },
  '2': {
    title: "Quel genre vous identifiez-vous?",
    description: "Veuillez indiquer comment vous vous identifiez",
    params: ["Femme", "Homme", "Autre"],
    type: "single-select-image",
    images: ['👩🏼', '👨🏻', '🧔🏻‍♀️'],
  },
  '3': {
    title: "Quel est votre âge?",
    params: ['18-29 ans', '30-39 ans', '40-49 ans', '50+'],
    type: 'single-select',
  },
  '4': {
    title: "Qu'est-ce que vous détestez le plus dans un livre?",
    params: ["Manque de logique", "Lenteur", "Manque d'humour", "Fin trop générique"],
    type: "multiple-select"
  },
}
