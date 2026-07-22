import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { portfolioContent } from "../data/portfolioData";

export const Identity: React.FC = () => {
  const { t, language } = useApp();

  const principles = portfolioContent[language]?.identity?.principles || [];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="identity section" id="identity">
      <div className="section-label">{t("identity.sectionLabel")}</div>
      <div className="identity-shell">
        <div className="identity-overview">
          <motion.div
            className="identity-hero-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0}
          >
            <p className="skills-kicker">{t("identity.kicker")}</p>
            <h2>{t("identity.title")}</h2>
            <p className="lead">{t("identity.lead")}</p>
          </motion.div>

          <motion.div
            className="identity-stage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0.1}
          >
            <div className="identity-stage-frame">
              <div className="identity-stage-orbit identity-stage-orbit-outer" aria-hidden="true"></div>
              <div className="identity-stage-orbit identity-stage-orbit-inner" aria-hidden="true"></div>
              <div className="identity-stage-beam identity-stage-beam-a" aria-hidden="true"></div>
              <div className="identity-stage-beam identity-stage-beam-b" aria-hidden="true"></div>
              <div className="identity-logo-lockup">
                <img src="/assets/brand/logo-full-hijau.webp" alt="AstralDevX full logo" className="identity-logo-main identity-logo-main-dark" loading="lazy" decoding="async" />
                <img src="/assets/brand/logo-full-hitam.webp" alt="AstralDevX full logo" className="identity-logo-main identity-logo-main-light" loading="lazy" decoding="async" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="identity-showcase-row">
          <motion.div
            className="identity-symbol-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0}
          >
            <img src="/assets/brand/logo-saja-putih.webp" alt="AstralDevX symbol" className="identity-logo-symbol logo-symbol-dark" loading="lazy" decoding="async" />
            <img src="/assets/brand/logo-saja-hitam.webp" alt="AstralDevX symbol" className="identity-logo-symbol logo-symbol-light" loading="lazy" decoding="async" />
          </motion.div>

          <motion.div
            className="identity-focus-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0.08}
          >
            <span className="identity-focus-kicker">{t("identity.focusKicker")}</span>
            <h3>{t("identity.focusTitle")}</h3>
            <p>{t("identity.focusLead")}</p>
            <div className="identity-focus-metrics">
              <span>{t("identity.focusMetricOne")}</span>
              <span>{t("identity.focusMetricTwo")}</span>
            </div>
          </motion.div>

          <motion.div
            className="identity-mockup-window"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0.1}
          >
            <div className="identity-mockup-copy">
              <span className="ai-badge">{t("identity.usageKicker")}</span>
              <h3>{t("identity.usageTitle")}</h3>
              <p>{t("identity.usageLead")}</p>
            </div>
            <div className="identity-mockup-reel">
              <div className="reel-item">
                <img src="/assets/identity/mockup-hoodie.webp" alt="Hoodie" loading="lazy" decoding="async" />
              </div>
              <div className="reel-item">
                <img src="/assets/identity/mockup-kaos.webp" alt="Shirt" loading="lazy" decoding="async" />
              </div>
              <div className="reel-item">
                <img src="/assets/identity/mockup-tumbler.webp" alt="Tumbler" loading="lazy" decoding="async" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="identity-anatomy">
          <p className="skills-kicker">{t("identity.anatomyKicker")}</p>
          <h2>{t("identity.anatomyTitle")}</h2>
          
          <div className="identity-anatomy-grid" id="identity-points">
            {principles.map((item, index) => (
              <motion.article
                className="identity-point"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                custom={index * 0.08}
              >
                {item.image && (
                  <div className="identity-point-media">
                    <img src={item.image.startsWith("http") ? item.image : `/${item.image}`} alt={item.title} className="identity-point-image" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className="identity-point-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
