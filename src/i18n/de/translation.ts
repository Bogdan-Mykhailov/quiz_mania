export default {
  '1': {
    title: "Was ist Ihre bevorzugte Sprache?",
    description: "Sprache wählen",
    params: ["Englisch", "Französisch", "Deutsch", "Spanisch"],
    type: "single-select",
  },
  '2': {
    title: "Mit welchem Geschlecht identifizieren Sie sich?",
    description: "Bitte teilen Sie uns mit, wie Sie sich identifizieren",
    params: ["Weiblich", "Männlich", "Andere"],
    type: "single-select-image",
    images: ['👩🏼', '👨🏻', '🧔🏻‍♀️'],
  },
  '3': {
    title: "Wie alt sind Sie?",
    params: ['18-29 Jahre', '30-39 Jahre', '40-49 Jahre', '50+'],
    type: 'single-select',
  },
  '4': {
    title: "Was hassen Sie am meisten an einem Buch?",
    params: ["Logikmangel", "Langsames Tempo", "Mangel an Humor", "Zu allgemeines Ende"],
    type: "multiple-select"
  },
  '5': {
    title: "Was sind deine Lieblingsthemen?",
    description: "Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen",
    params: ["Werwolf", "Romantik", "Action", "Junge Erwachsene", "Königliche Besessenheit", "Böser Junge", "Milliardär"],
    images: ["🐺", "🥰", "💃", "💁‍♀️", "👑", "🤠", "🤑"],
    type: 'bubble',
  },
  'progressbar': {
    title: 'Sammlungen für Sie finden...'
  },
  'email': {
    title: 'E-Mail',
    description: 'Geben Sie Ihre E-Mail-Adresse ein, um vollen Zugang zu erhalten',
    terms: 'Durch die Fortsetzung stimme ich der Datenschutzrichtlinie und den Nutzungsbedingungen zu.',
    type: 'email',
    placeholder: 'Ihre E-Mail'
  },
  "button": {
    next: "Weiter",
    "retake-quiz": "Quiz wiederholen"
  },
  "greetings": {
    title: "Danke",
    subtitle: "für Ihre Unterstützung und das Bestehen des Quiz",
    download: "Meine Antworten herunterladen"
  },
  "not-found": {
    oops: "Ups!... Nicht gefunden"
  }
}
