import React, { useState, useMemo, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { featuredProjects } from "../data/portfolioData";
import type { Project } from "../types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ChevronLeft, ChevronRight, ArrowUpRight,
  Code2, Wifi, Video, Palette, Layers
} from "lucide-react";

interface ProjectsPageProps {
  onOpenProject: (project: Project) => void;
}

type FilterGroup = "all" | "original" | "iot" | "video" | "redesign";

const filterLabels: Record<FilterGroup, { en: string; id: string }> = {
  all:      { en: "All",           id: "Semua" },
  original: { en: "Original",      id: "Original" },
  iot:      { en: "IoT",           id: "IoT" },
  video:    { en: "Video & Film",  id: "Video & Film" },
  redesign: { en: "Redesign",      id: "Redesign" },
};
const filterOrder: FilterGroup[] = ["all", "original", "iot", "video", "redesign"];

const CARDS_PER_PAGE = 9; // 3 columns × 3 rows

const CategoryIcon: React.FC<{ group: Project["group"] }> = ({ group }) => {
  const size = 14;
  switch (group) {
    case "iot":      return <Wifi    size={size} />;
    case "video":    return <Video   size={size} />;
    case "redesign": return <Palette size={size} />;
    case "original": return <Layers  size={size} />;
    default:         return <Code2   size={size} />;
  }
};

const extractYear = (meta: string) => meta.split("/")[0].trim();

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProject }) => {
  const { localize, language, navigate } = useApp();
  const [activeFilter, setActiveFilter] = useState<FilterGroup>("all");
  const [currentPage, setCurrentPage]   = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return featuredProjects;
    return featuredProjects.filter((p) => p.group === activeFilter);
  }, [activeFilter]);

  useEffect(() => { setCurrentPage(0); }, [activeFilter]);

  const totalPages  = Math.ceil(filteredProjects.length / CARDS_PER_PAGE);
  const pageProjects = useMemo(() => {
    const start = currentPage * CARDS_PER_PAGE;
    return filteredProjects.slice(start, start + CARDS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));

  const cardVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    }),
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <main className="projects-page">

      {/* ── Page Header ── */}
      <div className="projects-page-header">
        <div className="projects-page-header-inner">
          <motion.button
            className="projects-back-btn"
            onClick={() => navigate("home")}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </motion.button>

          <motion.div
            className="projects-page-title-block"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="projects-page-eyebrow">Works &amp; Projects</div>
            <h1 className="projects-page-h1">
              Things I've<br /><em>built &amp; made.</em>
            </h1>
            <p className="projects-page-lead">
              {language === "id"
                ? "Kumpulan proyek dari berbagai bidang — frontend, IoT, video, sampai platform digital."
                : "A collection of work across different domains — frontend, IoT, video, and digital platforms."}
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            className="projects-filter-bar"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {filterOrder.map((group) => (
              <button
                key={group}
                className={`projects-filter-tab${activeFilter === group ? " is-active" : ""}`}
                onClick={() => setActiveFilter(group)}
              >
                <span>{filterLabels[group][language as "en" | "id"]}</span>
                {group !== "all" && (
                  <span className="projects-filter-count">
                    {featuredProjects.filter((p) => p.group === group).length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Grid Area ── */}
      <div className="projects-grid-area">

        {/* Top bar: count label + nav arrows (top-right) */}
        <div className="projects-grid-topbar">
          <span className="projects-grid-count-label">
            {filteredProjects.length}&nbsp;
            {language === "id" ? "proyek" : "projects"}
          </span>

          {totalPages > 1 && (
            <div className="projects-grid-nav">
              <button
                className="projects-nav-arrow"
                onClick={handlePrev}
                disabled={currentPage === 0}
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="projects-nav-counter">
                <strong>{currentPage + 1}</strong>
                <span className="sep">/</span>
                {totalPages}
              </span>
              <button
                className="projects-nav-arrow"
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1}
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* 3×3 Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentPage}`}
            className="projects-grid-3x3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {pageProjects.map((project, index) => {
              const globalIndex = currentPage * CARDS_PER_PAGE + index;
              const year = extractYear(localize(project.meta));

              return (
                <motion.div
                  className="pj-card"
                  key={`${project.title.en}-${activeFilter}`}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => onOpenProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && onOpenProject(project)}
                >
                  {/* Image */}
                  <div className="pj-card-media">
                    <img
                      src={project.image.startsWith("http") ? project.image : `/${project.image}`}
                      alt={localize(project.title)}
                      className="pj-card-img"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Year badge – top left */}
                    <span className="pj-card-year">{year}</span>
                    {/* Expand icon – top right */}
                    <span className="pj-card-expand" aria-hidden="true">
                      <ArrowUpRight size={13} />
                    </span>
                    {/* Category icon badge – bottom left, overlapping */}
                    <span className="pj-card-icon-badge">
                      <CategoryIcon group={project.group} />
                    </span>
                  </div>

                  {/* Body */}
                  <div className="pj-card-body">
                    <div className="pj-card-category">{localize(project.category)}</div>
                    <div className="pj-card-title-row">
                      <h3 className="pj-card-title">{localize(project.title)}</h3>
                      <span className="pj-card-arrow" aria-hidden="true">→</span>
                    </div>
                    <p className="pj-card-summary">{localize(project.summary)}</p>
                    <div className="pj-card-stack">
                      {project.stack.map((s, i) => (
                        <span key={i} className="pj-card-tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pj-card-footer">
                    <span>View Project Details</span>
                    <span className="pj-card-num">
                      {String(globalIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {pageProjects.length === 0 && (
              <div className="projects-empty">No projects in this category yet.</div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom progress bar */}
        {totalPages > 1 && (
          <div className="projects-progress-row">
            <div className="projects-progress-track">
              <div
                className="projects-progress-fill"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>
            <span className="projects-progress-label">
              {currentPage + 1}&nbsp;/&nbsp;{totalPages}
            </span>
          </div>
        )}
      </div>

    </main>
  );
};
