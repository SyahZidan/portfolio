import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { Sun, Moon } from "lucide-react";
import StaggeredMenu from "./ui/StaggeredMenu";

export const Navbar: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, t, navigate, currentPage } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync menu state with body class
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleWorkNav = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    navigate("projects");
  };

  const handleHomeNav = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    navigate("home");
  };

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    closeMenu();
    if (currentPage === "projects") {
      navigate("home");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(el, { offset: -96, duration: 1.4 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 150); // slight delay to allow App to switch route & render home page
    } else {
      const el = document.querySelector(hash);
      if (el) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(el, { offset: -96, duration: 1.4 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navItems = [
    { label: t("nav.about"), ariaLabel: `Go to ${t("nav.about")}`, link: "#about", onClick: (e: React.MouseEvent) => handleNavClick(e, "#about") },
    { label: t("nav.work"), ariaLabel: `Go to ${t("nav.work")}`, link: "/projects", onClick: handleWorkNav },
    { label: t("nav.journey"), ariaLabel: `Go to ${t("nav.journey")}`, link: "#journey", onClick: (e: React.MouseEvent) => handleNavClick(e, "#journey") },
    { label: t("nav.skills"), ariaLabel: `Go to ${t("nav.skills")}`, link: "#skills", onClick: (e: React.MouseEvent) => handleNavClick(e, "#skills") },
    { label: t("nav.certifications"), ariaLabel: `Go to ${t("nav.certifications")}`, link: "#certifications", onClick: (e: React.MouseEvent) => handleNavClick(e, "#certifications") },
    { label: t("nav.identity"), ariaLabel: `Go to ${t("nav.identity")}`, link: "#identity", onClick: (e: React.MouseEvent) => handleNavClick(e, "#identity") },
    { label: t("nav.contact"), ariaLabel: `Go to ${t("nav.contact")}`, link: "#contact", onClick: (e: React.MouseEvent) => handleNavClick(e, "#contact") },
  ];

  return (
    <>
      <div className="mobile-staggered-menu" aria-label="Mobile navigation">
        <StaggeredMenu
          position="right"
          isFixed
          items={navItems}
          displaySocials={false}
          displayItemNumbering
          closeOnClickAway
          logoUrl="/assets/brand/logo-saja-hitam.webp"
          colors={theme === "light" ? ["#fbfaf4", "#e8e7db", "#d4ff3f"] : ["#0a0d08", "#172407", "#d4ff3f"]}
          menuButtonColor={theme === "light" ? "rgba(17, 17, 17, 0.64)" : "rgba(244, 241, 234, 0.72)"}
          openMenuButtonColor={theme === "light" ? "rgba(17, 17, 17, 0.64)" : "rgba(244, 241, 234, 0.72)"}
          changeMenuColorOnOpen
          accentColor="#d4ff3f"
          onMenuOpen={() => setMenuOpen(true)}
          onMenuClose={() => setMenuOpen(false)}
        />
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-container">
        <a href="/" className="brand" aria-label="Astrals home" onClick={handleHomeNav}>
          {/* Dark Mode Logos */}
          <img src="/assets/brand/logo-full-putih.webp" alt="Astrals logo" className="brand-logo brand-logo-full brand-logo-dark" decoding="async" />
          <img src="/assets/brand/logo-saja-putih.webp" alt="Astrals symbol" className="brand-logo brand-logo-mark brand-logo-dark" decoding="async" />

          {/* Light Mode Logos */}
          <img src="/assets/brand/logo-full-hitam.webp" alt="Astrals logo" className="brand-logo brand-logo-full brand-logo-light" decoding="async" />
          <img src="/assets/brand/logo-saja-hitam.webp" alt="Astrals symbol" className="brand-logo brand-logo-mark brand-logo-light" decoding="async" />
        </a>

        <nav className="site-nav" id="site-menu">
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, "#about")}>
            {t("nav.about")}
          </a>
          <a href="/projects" className="nav-link" onClick={handleWorkNav}>
            {t("nav.work")}
          </a>
          <a href="#journey" className="nav-link" onClick={(e) => handleNavClick(e, "#journey")}>
            {t("nav.journey")}
          </a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, "#skills")}>
            {t("nav.skills")}
          </a>
          <a href="#certifications" className="nav-link" onClick={(e) => handleNavClick(e, "#certifications")}>
            {t("nav.certifications")}
          </a>
          <a href="#identity" className="nav-link" onClick={(e) => handleNavClick(e, "#identity")}>
            {t("nav.identity")}
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, "#contact")}>
            {t("nav.contact")}
          </a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label="Language switch">
            <button
              className={`lang-option ${language === "en" ? "is-active" : ""}`}
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              className={`lang-option ${language === "id" ? "is-active" : ""}`}
              type="button"
              onClick={() => setLanguage("id")}
              aria-pressed={language === "id"}
            >
              ID
            </button>
          </div>

          <button
            className="theme-toggle-btn"
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={t("ui.themeToggle")}
          >
            {theme === "dark" ? <Sun size={18} className="sun-icon" /> : <Moon size={18} className="moon-icon" />}
          </button>

        </div>
      </div>
      </header>
    </>
  );
};
