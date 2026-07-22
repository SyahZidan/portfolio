import React, { createContext, useContext, useState, useEffect } from "react";
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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page === "projects") {
      window.history.pushState({}, "", "/projects");
    } else {
      window.history.pushState({}, "", "/");
    }
  };

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

  const t = (path: string): string => {
    const result = path.split(".").reduce(
      (value: any, key) => (value ? value[key] : undefined),
      portfolioContent[language]
    );
    return typeof result === "string" ? result : "";
  };

  const localize = (value: any): string => {
    if (value && typeof value === "object" && !Array.isArray(value) && ("en" in value || "id" in value)) {
      return value[language] || value.en || "";
    }
    return typeof value === "string" ? value : "";
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t, localize, currentPage, navigate }}>
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
