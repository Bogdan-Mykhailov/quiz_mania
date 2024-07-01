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
  '5': {
    title: "Quels sont vos sujets préférés?",
    description: "Choisissez jusqu'à 3 sujets que vous aimez",
    params: ["Loup-garou", "Romance", "Action", "Jeune adulte", "Obsession royale", "Mauvais garçon", "Milliardaire"],
    images: ["🐺", "🥰", "💃", "💁‍♀️", "👑", "🤠", "🤑"],
    type: 'bubble',
  },
  'progressbar': {
    title: "Recherche de collections pour vous..."
  },
  'email': {
    title: 'E-mail',
    description: 'Entrez votre adresse e-mail pour obtenir un accès complet',
    terms: "En continuant, j'accepte la Politique de confidentialité et les Conditions d'utilisation.",
    type: 'email',
    placeholder: 'Votre e-mail'
  },
  "button": {
    next: "Suivant",
    "retake-quiz": "Repasser le quiz"
  },
  "gratings": {
    title: "Merci",
    subtitle: "de nous soutenir et de passer le quiz",
    download: "Télécharger mes réponses"
  }
}
