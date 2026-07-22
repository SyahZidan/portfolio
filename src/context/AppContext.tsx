import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { portfolioContent } from "../data/portfolioData";

type Language = "en" | "id";
type Theme = "dark" | "light";
export type Page = "home" | "projects";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (path: string) => string;
  localize: (value: any) => string;
  currentPage: Page;
  navigate: (page: Page) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return (saved === "en" || saved === "id") ? saved : "en";
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light" ? "light" : "dark";
  });

  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Sync theme with body data attribute
  useEffect(() => {
    if (theme === "light") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.removeAttribute("data-theme");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Sync language with document attribute
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page === "projects") {
      window.history.pushState({}, "", "/projects");
    } else {
      window.history.pushState({}, "", "/");
    }
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const isProjects = window.location.pathname === "/projects";
      setCurrentPage(isProjects ? "projects" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    if (window.location.pathname === "/projects") {
      setCurrentPage("projects");
    }
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const t = useCallback((path: string): string => {
    const result = path.split(".").reduce(
      (value: any, key) => (value ? value[key] : undefined),
      portfolioContent[language]
    );
    return typeof result === "string" ? result : "";
  }, [language]);

  const localize = useCallback((value: any): string => {
    if (value && typeof value === "object" && !Array.isArray(value) && ("en" in value || "id" in value)) {
      return value[language] || value.en || "";
    }
    return typeof value === "string" ? value : "";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, theme, toggleTheme, t, localize, currentPage, navigate }),
    [language, theme, currentPage, setLanguage, toggleTheme, t, localize, navigate]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
