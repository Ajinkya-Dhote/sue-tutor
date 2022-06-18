import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "login": "Login",
      "personal-info": "Personal Info",
      "name": "Name",
      "middleName": "Middle Name",
      "surname": "Surname",
      "age": "Age",
      "gender": "Gender",
      "female": "Female",
      "male": "Male",
      "contact-details": "Contact Details",
      "email": "Email",
      "phone-number": "Phone Number",
      "location": "Location",
      "academic-info": "Academic Information",
      "education-board": "Education Board",
      "academic-qualification": "Academic Qualification",
      "academic-year": "Academic Year",
      "prefered-subjects": "Prefered Subjects",
      "select-prefered-subjects": "Select prefered Subjects"
    }
  },
  hi: {
    translation: {
        "welcome": "स्वागत",
        "login": "लॉगिन",
        "personal-info": "व्यक्तिगत जानकारी",
        "name": "नाम",
        "middleName": "मध्य नाम",
        "surname": "उपनाम",
        "age": "आयु",
        "gender": "लिंग",
        "female": "महिला",
        "male": "पुरुष",
        "contact-details": "सम्पर्क करने का विवरण",
        "email": "ईमेल",
        "phone-number": "फ़ोन नंबर",
        "location": "जगह",
        "academic-info": "शैक्षणिक सूचना",
        "academic-qualification": "शैक्षिक योग्यता",
        "academic-year": "शैक्षणिक वर्ष",
        "prefered-subjects": "पसंदीदा विषय",
        "select-prefered-subjects": "पसंदीदा विषय चुनें"
    }
  },
  mr: {
    translation: {
      "welcome": "स्वागत",
      "login": "लॉगिन",
      "personal-info": "वैयक्तिक माहिती",
      "name": "नाव",
      "middleName": "मधले नाव",
      "surname": "आडनाव",
      "age": "वय",
      "gender": "लिंग",
      "female": "स्त्री",
      "male": "पुरुष",
      "contact-details": "संपर्काची माहिती",
      "email": "ईमेल",
      "phone-number": "फोन नंबर",
      "location": "स्थान",
      "academic-info": "शैक्षणिक माहिती",
      "academic-qualification": "शैक्षणिक पात्रता",
      "academic-year": "शैक्षणिक वर्ष",
      "prefered-subjects": "पसंतीचे विषय",
      "select-prefered-subjects": "पसंतीचे विषय निवडा"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "mr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;