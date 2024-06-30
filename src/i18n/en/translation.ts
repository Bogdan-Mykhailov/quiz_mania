export default {
  '1': {
    title: "What is your preferred language?",
    description: "Choose language",
    params: ["English", "French", "German", "Spanish"],
    type: "single-select",
  },
  '2': {
    title: "What gender do you identify with?",
    description: "Please share how do you identify yourself",
    params: ["Female", "Male", "Other"],
    type: "single-select-image",
    images: ['👩🏼', '👨🏻', '🧔🏻‍♀️'],
  },
  '3': {
    title: "What is your age?",
    params: ['18-29 years', '30-39 years', '40-49 years', '50+'],
    type: 'single-select',
  },
}
