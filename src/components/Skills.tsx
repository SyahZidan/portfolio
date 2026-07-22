import React, { useMemo } from "react";
import { useApp } from "../context/AppContext";
import { skills } from "../data/portfolioData";
import LogoLoop, { type LogoItem } from "./ui/LogoLoop";

export const Skills: React.FC = () => {
  const { theme } = useApp();

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
      <h2 className="skills-logo-title">Tools</h2>
      <LogoLoop
        logos={skillLogos}
        speed={86}
        direction="left"
        logoHeight={74}
        gap={82}
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
