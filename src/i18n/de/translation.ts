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
  }
}
