import React, { useEffect, useState, useRef } from "react";
import { useApp } from "../context/AppContext";
import { journeyItems } from "../data/portfolioData";
import type { JourneyItem } from "../types/portfolio";
import { motion } from "framer-motion";
import BorderGlow from "./ui/BorderGlow";
import { getGlowTheme } from "../utils/glowTheme";

interface JourneyProps {
  onOpenJourney: (item: JourneyItem) => void;
}

export const Journey: React.FC<JourneyProps> = ({ onOpenJourney }) => {
  const { t, localize, theme } = useApp();
  const glow = getGlowTheme(theme);
  const [activeYear, setActiveYear] = useState<string>("2025");
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = (entry.target as HTMLElement).dataset.year;
            if (year) setActiveYear(year);
          }
        });
      },
      { root: null, threshold: 0.55 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="journey section" id="journey">
      <div className="section-label">{t("journey.sectionLabel")}</div>
      <div className="section-grid">
        <div className="section-title-block sticky-title">
          <h2>{t("journey.title")}</h2>
          <div className="year-badge" id="active-year">
            {activeYear}
          </div>
        </div>

        <div className="timeline" id="journey-list" ref={timelineRef}>
          {journeyItems.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={index}
              data-year={item.year}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
            >
              <span className="timeline-year">{item.year}</span>
              <BorderGlow
                {...glow}
                className="timeline-copy-card"
                borderRadius={24}
                glowRadius={30}
              >
                <div className="timeline-copy">
                  <h3>{localize(item.title)}</h3>
                  <p>{localize(item.text)}</p>

                  {item.proof && (
                    <div className="timeline-proof">
                      <button
                        className="timeline-proof-button"
                        type="button"
                        onClick={() => onOpenJourney(item)}
                      >
                        <span className="timeline-proof-thumb">
                          <img
                            src={item.proof.image.startsWith("http") ? item.proof.image : `/${item.proof.image}`}
                            alt={localize(item.proof.label)}
                            className="project-image"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span className="timeline-proof-copy">
                          <strong>{localize(item.proof.label)}</strong>
                          <span>{localize(item.proof.caption)}</span>
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </BorderGlow>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
