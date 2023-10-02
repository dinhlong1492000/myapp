import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";

import common_vi from "./translations/vi/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      translation: common_en
    },
    vi: {
      translation: common_vi
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
