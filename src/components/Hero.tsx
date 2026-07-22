import React from "react";
import { useApp } from "../context/AppContext";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "./ui/Particles";
import BlurText from "./ui/BlurText";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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

        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            href="https://github.com/SyahZidan"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-syah-zidan-fadhlurrahman-9b5a33384/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/msyhzidan24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            title="Instagram"
            aria-label="Instagram Profile"
          >
            <InstagramIcon size={18} />
            <span>Instagram</span>
          </a>
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
