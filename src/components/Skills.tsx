import React, { useMemo } from "react";
import { useApp } from "../context/AppContext";
import { skills } from "../data/portfolioData";
import LogoLoop, { type LogoItem } from "./ui/LogoLoop";

export const Skills: React.FC = () => {
  const { language, theme } = useApp();

  const skillLogos = useMemo<LogoItem[]>(
    () =>
      skills.map((item) => ({
        src: item.icon.startsWith("http") ? item.icon : `/${item.icon}`,
        alt: item.name,
        title: item.name,
      })),
    []
  );

  return (
    <section className="skills section skills-logo-section" id="skills" aria-label="Skills and tools">
      <div className="skills-logo-heading">
        <p className="skills-logo-kicker">
          {language === "id" ? "AI, Web & Stack Harian" : "AI, Web & Daily Stack"}
        </p>
        <h2 className="skills-logo-title">
          {language === "id" ? "Tools untuk Eksplorasi" : "Tools I Explore With"}
        </h2>
        <p className="skills-logo-subtitle">
          {language === "id"
            ? "Kumpulan AI assistant, dasar web, dan software kreatif yang saya pakai untuk belajar dan bikin project."
            : "A mix of AI assistants, web basics, and creative software I use to build and learn."}
        </p>
      </div>
      <LogoLoop
        logos={skillLogos}
        speed={86}
        direction="left"
        logoHeight={68}
        gap={76}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor={theme === "light" ? "#f2efe7" : "#060606"}
        ariaLabel="Skills and tools"
        className="skills-logo-loop"
      />
    </section>
  );
};
