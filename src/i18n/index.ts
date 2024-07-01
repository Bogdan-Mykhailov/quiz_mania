import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {LOCALE} from "./languiges.ts";
import EN from "./en/translation";
import FR from "./fr/translation";
import DE from "./de/translation";
import ES from "./es/translation";

const resources = {
  [LOCALE.EN]: {
    translation: EN,
  },

  [LOCALE.FR]: {
    translation: FR,
  },

  [LOCALE.DE]: {
    translation: DE,
  },

  [LOCALE.ES]: {
    translation: ES,
  },};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
