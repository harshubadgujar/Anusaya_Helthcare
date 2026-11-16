"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Language = "en" | "mr";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("ahcs-language-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("ahcs-language-change", callback);
  };
}

function getSnapshot(): Language {
  return window.localStorage.getItem("ahcs-language") === "mr" ? "mr" : "en";
}

function getServerSnapshot(): Language { return "en"; }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLanguage = (next: Language) => {
    window.localStorage.setItem("ahcs-language", next);
    window.dispatchEvent(new Event("ahcs-language-change"));
  };
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
export function useCopy() {
  const { language } = useLanguage();
  return (en: string, mr: string) => language === "mr" ? mr : en;
}
