import React from "react";
import { useApp } from "../context/AppContext";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "./ui/Particles";
import BlurText from "./ui/BlurText";

export const Hero: React.FC = () => {
  const { t, theme } = useApp();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const stageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="hero" id="home">
      {/* Background Interactive Particles from ReactBits */}
      <Particles
        color={theme === "light" ? "#8fb100" : "#d4ff3f"}
        quantity={60}
        className="absolute inset-0 z-0"
      />

      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <motion.div
        className="hero-copy z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {t("hero.title").split("<br>").map((line, index, arr) => (
          <BlurText
            key={index}
            text={line.trim()}
            delay={50}
            animateBy="words"
            direction="top"
            stepDuration={0.45}
            threshold={0.1}
            className="hero-title"
            style={index < arr.length - 1 ? { marginBottom: "0.2rem" } : undefined}
          />
        ))}
        
        <BlurText
          text={t("hero.intro")}
          delay={80}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
          threshold={0.1}
          className="hero-intro"
        />
        
        <motion.p className="hero-actions-label" variants={itemVariants}>
          {t("hero.actionsLabel")}
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#work" className="hero-cta hero-cta-primary">
            <span className="hero-cta-copy">
              <span className="hero-cta-label">{t("hero.primaryCta")}</span>
              <span className="hero-cta-meta">{t("hero.primaryMeta")}</span>
            </span>
            <span className="hero-cta-icon" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </a>

          <a href="#" className="hero-cta hero-cta-doc" id="cv-link">
            <span className="hero-cta-badge">PDF</span>
            <span className="hero-cta-copy">
              <span className="hero-cta-label">{t("hero.cvCta")}</span>
              <span className="hero-cta-meta">{t("hero.cvMeta")}</span>
            </span>
            <Download size={16} />
          </a>

          <a href="#contact" className="hero-cta hero-cta-ghost">
            <span className="hero-cta-copy">
              <span className="hero-cta-label">{t("hero.secondaryCta")}</span>
              <span className="hero-cta-meta">{t("hero.secondaryMeta")}</span>
            </span>
            <span className="hero-cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </motion.div>

        <motion.div className="hero-meta" variants={itemVariants}>
          <span className="hero-meta-item">{t("hero.availability")}</span>
          <span className="hero-meta-divider" aria-hidden="true"></span>
          <span className="hero-meta-item">{t("hero.collab")}</span>
        </motion.div>
      </motion.div>

      {/* Hero Layered Stage */}
      <motion.div
        className="hero-stage z-10"
        variants={stageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-layer hero-layer-back">
          <h1 className="giant giant-top">SYAH</h1>
          <h1 className="giant giant-bottom">ZIDAN</h1>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              src="/assets/hero/profile.webp"
              alt="Portrait of M. Syah Zidan"
              className="portrait-image"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="hero-layer hero-layer-front" aria-hidden="true">
          <h1 className="giant giant-top outline">SYAH</h1>
          <h1 className="giant giant-bottom outline">ZIDAN</h1>
        </div>
      </motion.div>

      <div className="hero-side hero-side-right">
        <span>{t("hero.scrollPrompt")}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};
