import { createContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();
function TranslateComponent({ children }) {
  console.log(children);
  const { t } = useTranslation();

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, TranslateComponent };
