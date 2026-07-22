import React from "react";
import { useApp } from "../context/AppContext";
import { siteProfile } from "../data/portfolioData";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const { t, localize } = useApp();

  const revealVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">{t("contact.sectionLabel")}</p>
        <h2>{t("contact.title")}</h2>
        <p className="contact-copy">{t("contact.intro")}</p>
        
        <div className="contact-links" id="contact-links">
          {siteProfile.contact.map((item, index) => {
            const isExternal = item.href.startsWith("http");
            return (
              <motion.a
                className="contact-link"
                href={item.href}
                key={index}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noreferrer" : ""}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>{localize(item.label)}</span>
                <strong>{item.value}</strong>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
