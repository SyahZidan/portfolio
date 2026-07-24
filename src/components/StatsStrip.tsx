import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import BorderGlow from "./ui/BorderGlow";
import { getGlowTheme } from "../utils/glowTheme";

export const StatsStrip: React.FC = () => {
  const { language, theme } = useApp();
  const glow = getGlowTheme(theme);

  const stats = [
    {
      value: "03+",
      label: language === "id" ? "Tahun Eksplorasi AI & Web" : "Years AI & Web Exploration",
      highlight: true,
    },
    {
      value: "15+",
      label: language === "id" ? "Proyek & Eksperimen" : "Projects & Experiments",
      highlight: false,
    },
    {
      value: "100%",
      label: language === "id" ? "Dedikasi & Inovasi" : "Passion & Innovation",
      highlight: false,
    },
    {
      value: "ID / GMT+7",
      label: language === "id" ? "Berbasis di Indonesia" : "Based in Indonesia",
      badge: true,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="stats-strip-section" aria-label="Key statistics">
      <div className="stats-strip-container">
        <BorderGlow
          {...glow}
          className="stats-strip-card"
          borderRadius={24}
          glowRadius={28}
        >
          <div className="stats-strip-grid">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="stats-strip-item"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="stats-strip-val-wrap">
                  {item.badge && <span className="stats-strip-dot" aria-hidden="true" />}
                  <span className={`stats-strip-value ${item.highlight ? "is-highlight" : ""}`}>
                    {item.value}
                  </span>
                </div>
                <span className="stats-strip-label">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </BorderGlow>
      </div>
    </section>
  );
};
