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
  '4': {
    title: "What do you hate the most in a book?",
    params: ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'],
    type: 'multiple-select',
  },
  '5': {
    title: "What are your favorite topics?",
    description: "Choose up to 3 topics you like",
    params: ["Werewolf", "Romance", "Action", "Young Adult", "Royal Obsession", "Bad Boy", "Billionaire"],
    images: ["🐺", "🥰", "💃", "💁‍♀️", "👑", "🤠", "🤑"],
    type: 'bubble',
  },
  'progressbar': {
    title: 'Finding collections for you...'
  },
  'email': {
    title: 'Email',
    description: 'Enter your email to get full access',
    terms: 'By continuing I agree with Privacy policy and Terms of use.',
    type: 'email',
    placeholder: 'Your email'
  },
  'button': {
    next: 'Next',
    'retake-quiz': 'Retake quiz'
  },
  'greetings': {
    title: 'Thank you',
    subtitle: 'for supporting us and passing quiz',
    download: 'Download my answers'
  },
  'not-found': {
    oops: 'Oops!... Not found'
  }
}
