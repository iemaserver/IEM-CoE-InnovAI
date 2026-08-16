/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./MediaModal.css";

function MediaModal({ isOpen, onClose, title, type, src }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="media-modal" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="media-modal__dialog" role="dialog" aria-modal="true" aria-label={title}>
        <header>
          <div><span>{type === "pdf" ? "Document viewer" : "Image viewer"}</span><h2>{title}</h2></div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={`Close ${title}`}>Close <span aria-hidden="true">×</span></button>
        </header>
        <div className={`media-modal__content media-modal__content--${type}`}>
          {type === "pdf" ? (
            <iframe src={`${src}#view=FitH&toolbar=1`} title={title} />
          ) : (
            <img src={src} alt={title} />
          )}
        </div>
      </section>
    </div>
  );
}

export default MediaModal;
