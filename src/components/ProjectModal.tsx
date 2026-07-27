import React, { useState, useEffect } from "react";
import type { Project } from "../types/portfolio";
import { useApp } from "../context/AppContext";
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { t, localize } = useApp();
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!project?.gallery || project.gallery.length <= 1) return;
      if (e.key === "ArrowLeft") {
        setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : project.gallery!.length - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveImgIndex((prev) => (prev < project.gallery!.length - 1 ? prev + 1 : 0));
      }
    };

    if (isOpen) {
      document.body.classList.add("modal-open");
      (window as any).lenis?.stop();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("modal-open");
      (window as any).lenis?.start();
    }

    return () => {
      document.body.classList.remove("modal-open");
      (window as any).lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const hasGallery = Boolean(project.gallery && project.gallery.length > 0);
  const currentGalleryItem = hasGallery ? project.gallery![activeImgIndex] : null;

  const currentMediaSrc = project.embed
    ? null
    : hasGallery
    ? currentGalleryItem?.image.startsWith("http")
      ? currentGalleryItem?.image
      : `/${currentGalleryItem?.image}`
    : project.image.startsWith("http")
    ? project.image
    : `/${project.image}`;

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project.gallery) return;
    setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : project.gallery!.length - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project.gallery) return;
    setActiveImgIndex((prev) => (prev < project.gallery!.length - 1 ? prev + 1 : 0));
  };

  const hasValidLink = Boolean(project.link && project.link.trim() !== "" && project.link !== "#");

  return (
    <div className="modal is-open" id="project-modal" aria-hidden="false" data-lenis-prevent>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-panel modal-panel-project" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-lenis-prevent>
        <button className="modal-close" onClick={onClose} aria-label={t("ui.closeProjectDetails")}>
          <X size={20} />
        </button>

        {/* Media / Gallery Section */}
        <div className="modal-media-wrap">
          <div className="modal-media-frame">
            {project.embed ? (
              <iframe
                id="modal-video"
                className="modal-video is-visible"
                src={project.embed}
                title="Project video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  key={currentMediaSrc}
                  src={currentMediaSrc!}
                  alt={`${localize(project.title)} preview ${activeImgIndex + 1}`}
                  id="modal-image"
                  className="modal-image is-visible"
                  decoding="async"
                />

                {hasGallery && project.gallery!.length > 1 && (
                  <>
                    <button
                      className="gallery-nav-btn gallery-nav-prev"
                      onClick={handlePrevImg}
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="gallery-nav-btn gallery-nav-next"
                      onClick={handleNextImg}
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="gallery-counter">
                      {activeImgIndex + 1} / {project.gallery!.length}
                    </div>
                  </>
                )}

                {currentGalleryItem?.caption && (
                  <div className="gallery-caption">
                    <span>{localize(currentGalleryItem.caption)}</span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Gallery Thumbnails Strip */}
          {hasGallery && project.gallery!.length > 1 && (
            <div className="gallery-thumbs-container">
              <div className="gallery-thumbs">
                {project.gallery!.map((item, idx) => {
                  const thumbSrc = item.image.startsWith("http") ? item.image : `/${item.image}`;
                  const isActive = idx === activeImgIndex;
                  return (
                    <button
                      key={idx}
                      className={`gallery-thumb-btn ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveImgIndex(idx)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={thumbSrc} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="modal-kicker" id="modal-meta">
          {localize(project.meta)}
        </div>
        <h3 id="modal-title">{localize(project.title)}</h3>
        <p className="modal-summary" id="modal-summary">
          {localize(project.summary)}
        </p>

        <div className="modal-detail-grid">
          <div>
            <span className="detail-label">{t("ui.role")}</span>
            <p id="modal-role">{localize(project.role)}</p>
          </div>
          <div>
            <span className="detail-label">{t("ui.impact")}</span>
            <p id="modal-impact">{localize(project.impact)}</p>
          </div>
          <div>
            <span className="detail-label">{t("ui.stack")}</span>
            <p id="modal-stack">{project.stack.join(" / ")}</p>
          </div>
          <div>
            <span className="detail-label">{t("ui.about")}</span>
            <p id="modal-description">{localize(project.description)}</p>
          </div>
        </div>

        {/* Key Features Section if present */}
        {project.features && project.features.length > 0 && (
          <div className="modal-features-section">
            <h4 className="features-section-title">
              {t("ui.explanation") || "Key Features & Research Highlights"}
            </h4>
            <div className="modal-features-grid">
              {project.features.map((feat, i) => (
                <div key={i} className="modal-feature-card">
                  <div className="feature-card-header">
                    <CheckCircle2 size={16} className="feature-icon" />
                    <span className="feature-title">{localize(feat.title)}</span>
                  </div>
                  <p className="feature-desc">{localize(feat.description)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Open Reference Button (Hidden if link is empty or "#") */}
        {hasValidLink && (
          <a
            className="btn btn-solid modal-link"
            id="modal-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            {t("ui.openReference")}
          </a>
        )}
      </div>
    </div>
  );
};

