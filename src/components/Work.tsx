import React from "react";
import { useApp } from "../context/AppContext";
import { featuredProjects } from "../data/portfolioData";
import { motion } from "framer-motion";
import type { Project } from "../types/portfolio";

interface WorkProps {
  onOpenProject: (project: Project) => void;
}

// Pick 7 projects for the mosaic preview to showcase Zidan's latest work
const mosaicImages = [
  { image: "assets/projects/project-npc.webp", label: "Redesign NPC Global", isExternal: false },
  { image: "assets/projects/project-absensi-kantor.webp", label: "Absensi & Upah Geolocation", isExternal: false },
  { image: "https://img.youtube.com/vi/MkDjJuXVT8c/hqdefault.jpg", label: "Menjadi Sesuatu", isExternal: true },
  { image: "assets/projects/project-podsi.webp", label: "Redesign PODSI", isExternal: false },
  { image: "assets/projects/project-iot-smart-home-thumb.webp", label: "IoT Smart Home", isExternal: false },
  { image: "assets/projects/astral_mart.webp", label: "Astral Marketplace", isExternal: false },
  { image: "assets/projects/astral_hub.webp", label: "AstralHub", isExternal: false },
];

export const Work: React.FC<WorkProps> = () => {
  const { t, navigate } = useApp();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section className="work section" id="work">
      <div className="section-label">{t("work.sectionLabel")}</div>

      <div className="work-teaser-layout">
        {/* Left: Text + CTA */}
        <motion.div
          className="work-teaser-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={textVariants}>
            <h2 className="work-teaser-title">{t("work.title")}</h2>
            <p className="work-teaser-intro">{t("work.intro")}</p>
          </motion.div>

          <motion.div variants={textVariants} className="work-teaser-meta">
            <span className="work-teaser-count">
              {featuredProjects.length}
              <span> projects</span>
            </span>
            <span className="work-teaser-divider">·</span>
            <span>AI · Web · IoT · Video</span>
          </motion.div>

          <motion.button
            variants={textVariants}
            className="work-teaser-cta"
            onClick={() => navigate("projects")}
          >
            <span>See All Projects</span>
            <span className="work-teaser-cta-arrow">→</span>
          </motion.button>
        </motion.div>

        {/* Right: Mosaic grid */}
        <motion.div
          className="work-teaser-mosaic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {mosaicImages.map((item, i) => (
            <motion.div
              key={i}
              className={`mosaic-item mosaic-item-${i + 1}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              onClick={() => navigate("projects")}
            >
              <div className="mosaic-img-wrap">
                <img
                  src={item.isExternal ? item.image : `/${item.image}`}
                  alt={item.label}
                  className="mosaic-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mosaic-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
