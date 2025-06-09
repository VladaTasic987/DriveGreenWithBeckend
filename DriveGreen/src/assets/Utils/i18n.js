import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      langBar: "ENG",
      pinLegend: "Pin Legend",
      clickForMore: "Click for more",
      termsOfBusiness: "Terms of Business",
    }
  },
  sr: {
    translation: {
      langBar: "SR",
      pinLegend: "Legenda pinova",
      clickForMore: "Klikni za više",
      termsOfBusiness: "Uslovi poslovanja",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;