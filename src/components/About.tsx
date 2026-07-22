import React from "react";
import { useApp } from "../context/AppContext";
import { siteProfile } from "../data/portfolioData";
import { motion } from "framer-motion";
import BorderGlow from "./ui/BorderGlow";
import { getGlowTheme } from "../utils/glowTheme";

export const About: React.FC = () => {
  const { t, localize, theme } = useApp();
  const glow = getGlowTheme(theme);

  const principlesRaw = t("about.principles") as unknown as Array<{
    number: string;
    title: string;
    text: string;
  }>;
  const principles = Array.isArray(principlesRaw) ? principlesRaw : [];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="about section" id="about">
      <div className="section-label">{t("about.sectionLabel")}</div>
      <div className="section-grid about-grid">
        <div className="about-content-col">
          <h2>{t("about.title")}</h2>
          <p className="lead">{t("about.lead")}</p>

          <div className="pill-row" id="strength-pills">
            {siteProfile.strengths.map((item, index) => (
              <motion.span
                className="pill"
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                {localize(item)}
              </motion.span>
            ))}
          </div>

          <div className="principles" id="principles-grid">
            {principles.map((item, index) => (
              <motion.div
                className="glow-card-shell"
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
              >
                <BorderGlow
                  {...glow}
                  className="principle-card"
                  borderRadius={24}
                  glowRadius={28}
                >
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
