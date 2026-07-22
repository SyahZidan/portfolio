import React, { useEffect } from "react";
import type { JourneyItem } from "../types/portfolio";
import { useApp } from "../context/AppContext";
import { X } from "lucide-react";

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: JourneyItem | null;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose, item }) => {
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

  if (!isOpen || !item || !item.proof) return null;

  return (
    <div className="modal is-open" id="journey-modal" aria-hidden="false">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-panel modal-panel-journey" role="dialog" aria-modal="true" aria-labelledby="journey-modal-title">
        <button className="modal-close" onClick={onClose} aria-label={t("ui.closeJourneyProof")}>
          <X size={20} />
        </button>
        <div className="journey-modal-grid">
          <div className="modal-media-frame journey-frame">
            <img
              src={item.proof.image.startsWith("http") ? item.proof.image : `/${item.proof.image}`}
              alt={localize(item.proof.label)}
              id="journey-modal-image"
              className="modal-image is-visible"
              decoding="async"
            />
          </div>
          <div className="journey-modal-copy">
            <div className="modal-kicker" id="journey-modal-year">
              {item.year}
            </div>
            <h3 id="journey-modal-title">{localize(item.title)}</h3>
            <p className="modal-summary" id="journey-modal-caption">
              {localize(item.proof.caption)}
            </p>
            {item.proof.detail && (
              <div className="journey-proof-note" style={{ display: "block" }}>
                <span className="detail-label">{t("ui.explanation")}</span>
                <p id="journey-modal-detail">{localize(item.proof.detail)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
