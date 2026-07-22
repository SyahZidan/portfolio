import React from "react";
import { useApp } from "../context/AppContext";
import { educationItems } from "../data/portfolioData";
import { motion } from "framer-motion";
import BorderGlow from "./ui/BorderGlow";
import { getGlowTheme } from "../utils/glowTheme";

export const Education: React.FC = () => {
  const { t, language, localize, theme } = useApp();
  const glow = getGlowTheme(theme);
  const currentStudy = educationItems[0];
  const foundationStudy = educationItems[1];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="education section" id="education">
      <div className="section-label">{t("education.sectionLabel")}</div>
      <div className="section-grid education-layout">
        <div className="section-title-block sticky-title">
          <h2>{t("education.title")}</h2>
          <p>{t("education.intro")}</p>
        </div>

        <div className="education-showcase" id="education-list">
          {currentStudy && (
            <motion.div
              className="glow-card-shell"
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <BorderGlow
                {...glow}
                className="education-card education-card-current"
                borderRadius={23}
                glowRadius={32}
                animated
              >
                <div className="education-card-topline">
                  <span className="education-chip">01</span>
                  <span className="education-chip education-chip-ghost">
                    {language === "id" ? "Fokus Saat Ini" : "Current Focus"}
                  </span>
                </div>
                <div className="education-card-mark" aria-hidden="true">
                  {currentStudy.logo ? (
                    <img
                      src={currentStudy.logo.startsWith("http") ? currentStudy.logo : `/${currentStudy.logo}`}
                      alt={`${localize(currentStudy.title)} logo`}
                      className="education-card-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    currentStudy.mark || "EDU"
                  )}
                </div>
                <div className="education-card-period">{localize(currentStudy.year)}</div>
                <div className="education-card-copy">
                  <h3>{localize(currentStudy.title)}</h3>
                  <p>{localize(currentStudy.text)}</p>
                </div>
                <div className="education-card-accent" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </BorderGlow>
            </motion.div>
          )}

          {foundationStudy && (
            <motion.div
              className="glow-card-shell"
              custom={0.14}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <BorderGlow
                {...glow}
                className="education-card education-card-foundation"
                borderRadius={23}
                glowRadius={32}
              >
                <div className="education-card-topline">
                  <span className="education-chip">02</span>
                  <span className="education-chip education-chip-ghost">
                    {language === "id" ? "Fondasi" : "Foundation"}
                  </span>
                </div>
                <div className="education-card-mark" aria-hidden="true">
                  {foundationStudy.logo ? (
                    <img
                      src={foundationStudy.logo.startsWith("http") ? foundationStudy.logo : `/${foundationStudy.logo}`}
                      alt={`${localize(foundationStudy.title)} logo`}
                      className="education-card-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    foundationStudy.mark || "EDU"
                  )}
                </div>
                <div className="education-card-period">{localize(foundationStudy.year)}</div>
                <div className="education-card-copy">
                  <h3>{localize(foundationStudy.title)}</h3>
                  <p>{localize(foundationStudy.text)}</p>
                </div>
              </BorderGlow>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
