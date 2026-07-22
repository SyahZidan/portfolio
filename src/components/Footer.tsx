import React from "react";
import { useApp } from "../context/AppContext";

export const Footer: React.FC = () => {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-panel">
          <div className="footer-brand-block">
            <a href="#home" className="footer-brand" aria-label="Astrals home">
              <img src="/assets/brand/logo-full-putih.webp" alt="Astrals logo" className="brand-logo brand-logo-full brand-logo-dark" loading="lazy" decoding="async" />
              <img src="/assets/brand/logo-full-hitam.webp" alt="Astrals logo" className="brand-logo brand-logo-full brand-logo-light" loading="lazy" decoding="async" />
            </a>
            <p className="footer-lead">{t("footer.lead")}</p>
            <div className="footer-status">
              <span className="footer-status-dot" aria-hidden="true"></span>
              <span>{t("footer.status")}</span>
            </div>
          </div>

          <div className="footer-nav-block">
            <span className="footer-heading">{t("footer.navigation")}</span>
            <nav className="footer-nav">
              <a href="#about">{t("nav.about")}</a>
              <a href="#work">{t("nav.work")}</a>
              <a href="#journey">{t("nav.journey")}</a>
              <a href="#education">{t("nav.education")}</a>
              <a href="#skills">{t("nav.skills")}</a>
              <a href="#contact">{t("nav.contact")}</a>
            </nav>
          </div>

          <div className="footer-note-block">
            <span className="footer-heading">{t("footer.noteTitle")}</span>
            <p className="footer-note">{t("footer.note")}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            Copyright {currentYear} M. Syah Zidan. All rights reserved.
          </p>
          <a href="#home" className="footer-top-link">
            {t("footer.backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
};
