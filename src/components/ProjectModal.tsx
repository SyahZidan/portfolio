import React, { useEffect } from "react";
import type { Project } from "../types/portfolio";
import { useApp } from "../context/AppContext";
import { X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { t, localize } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal is-open" id="project-modal" aria-hidden="false">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-panel modal-panel-project" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label={t("ui.closeProjectDetails")}>
          <X size={20} />
        </button>
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
            <img
              src={project.image.startsWith("http") ? project.image : `/${project.image}`}
              alt={`${localize(project.title)} preview`}
              id="modal-image"
              className="modal-image is-visible"
              decoding="async"
            />
          )}
        </div>
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
        <a
          className="btn btn-solid modal-link"
          id="modal-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          {t("ui.openReference")}
        </a>
      </div>
    </div>
  );
};
