import React from "react";
import { useApp } from "../context/AppContext";
import { certifications } from "../data/portfolioData";
import type { JourneyItem } from "../types/portfolio";
import { motion } from "framer-motion";
import BorderGlow from "./ui/BorderGlow";
import { getGlowTheme } from "../utils/glowTheme";

interface CertificatesProps {
  onOpenJourney: (item: JourneyItem) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({ onOpenJourney }) => {
  const { t, localize, theme } = useApp();
  const glow = getGlowTheme(theme);

  const handleOpenProof = (item: (typeof certifications)[0]) => {
    onOpenJourney({
      year: item.year,
      title: item.title,
      text: item.note,
      proof: {
        image: item.proofLink,
        label: item.title,
        caption: item.note,
      },
    });
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="certifications section" id="certifications">
      <div className="section-label">{t("certifications.sectionLabel")}</div>
      <div className="section-grid editorial-credentials">
        <div className="section-title-block sticky-title credentials-intro">
          <h2>{t("certifications.title")}</h2>
          <p>{t("certifications.intro")}</p>
        </div>

        <div className="credentials-panel">
          <div className="credentials-list" id="certificate-grid">
            {certifications.map((item, index) => {
              const proofDisabled = item.proofLink === "#";
              return (
                <motion.div
                  className="glow-card-shell"
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={rowVariants}
                >
                  <BorderGlow
                    {...glow}
                    className="credential-row"
                    borderRadius={24}
                    glowRadius={28}
                  >
                    <div className="credential-year">
                      <span>{item.year}</span>
                      <small>{localize(item.type)}</small>
                    </div>
                    <div className="credential-main">
                      <h3>{localize(item.title)}</h3>
                      <p>{localize(item.issuer)}</p>
                      <span className="credential-note">{localize(item.note)}</span>
                    </div>
                    <div className="credential-proof">
                      <img
                        src={item.image.startsWith("http") ? item.image : `/${item.image}`}
                        alt={`${localize(item.title)} certificate`}
                        className="credential-thumb"
                        loading="lazy"
                        decoding="async"
                      />
                      <button
                        type="button"
                        className={`btn-proof ${proofDisabled ? "is-disabled" : ""}`}
                        onClick={() => !proofDisabled && handleOpenProof(item)}
                        disabled={proofDisabled}
                      >
                        {t("ui.openProof")}
                      </button>
                    </div>
                  </BorderGlow>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
