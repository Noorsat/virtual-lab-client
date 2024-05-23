import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'kz',
  lng: 'kz',
  resources: {
    kz: {
      login: require('./locales/kz/login.json'),
      main: require('./locales/kz/main.json'),
      register: require('./locales/kz/register.json'),
      aboutus: require('./locales/kz/aboutus.json'),
      lessons: require('./locales/kz/lessons.json'),
      formulas: require('./locales/kz/formulas.json'),
      theory: require('./locales/kz/theory.json'),
    },
    ru: {
      login: require('./locales/ru/login.json'),
      main: require('./locales/ru/main.json'),
      register: require('./locales/ru/register.json'),
      aboutus: require('./locales/ru/aboutus.json'),
      lessons: require('./locales/ru/lessons.json'),
      formulas: require('./locales/ru/formulas.json'),
      theory: require('./locales/ru/theory.json'),
    },
    eng: {
      login: require('./locales/eng/login.json'),
      main: require('./locales/eng/main.json'),
      register: require('./locales/eng/register.json'),
      aboutus: require('./locales/eng/aboutus.json'),
      lessons: require('./locales/eng/lessons.json'),
      formulas: require('./locales/eng/formulas.json'),
      theory: require('./locales/eng/theory.json'),
    },
  }
});

i18n.languages = ['kz', 'ru', 'eng'];

export default i18n;