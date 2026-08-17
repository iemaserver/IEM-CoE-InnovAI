/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./Tribute.css";
import portrait from "../assets/president-tribute.jpg";

/* ----------------------------------------------------------------------------
   Tribute copy — edit these four lines to change what the screen says.
   `lifespan` is optional: set it to something like "1948 – 2025" to show the
   years under the role, or leave it empty to omit that line entirely.
---------------------------------------------------------------------------- */
const EYEBROW = "In remembrance";
const NAME = "Prof. (Dr.) Satyajit Chakrabarti";
const ROLE = "President, Institute of Engineering & Management";
const LIFESPAN = "";
const TRIBUTE_LINE = "The institution he built is the lesson he left.";

/* Total time on screen, including the closing fade. */
const HOLD_MS = 3600;
const FADE_MS = 700;

function Tribute({ onDone }) {
  const [closing, setClosing] = useState(false);
  const finished = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      setClosing(true);
      window.setTimeout(onDone, FADE_MS);
    };

    const hold = window.setTimeout(finish, HOLD_MS);
    const onKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") finish();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(hold);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onDone]);

  return (
    <div
      className={`tribute${closing ? " tribute--closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${EYEBROW}: ${NAME}, ${ROLE}`}
    >
      <div className="tribute__inner">
        <div className="tribute__portrait">
          <img src={portrait} alt={NAME} />
          {/* The site's loader spins two rings forever. This one is drawn once
              and comes to rest — a circle completed. */}
          <svg className="tribute__ring" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="97" />
          </svg>
        </div>

        <p className="tribute__eyebrow">{EYEBROW}</p>
        <h1 className="tribute__name">{NAME}</h1>
        <p className="tribute__role">{ROLE}</p>
        {LIFESPAN && <p className="tribute__lifespan">{LIFESPAN}</p>}
        <p className="tribute__line">{TRIBUTE_LINE}</p>
      </div>
    </div>
  );
}

export default Tribute;
