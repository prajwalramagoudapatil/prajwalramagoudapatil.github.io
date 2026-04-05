import React, { useState, useEffect, useRef } from "react";
import "./Typewriter.css";

const TYPING_SPEED = 80;    // ms per char (typing)
const ERASING_SPEED = 40;   // ms per char (erasing)
const PAUSE_AFTER_TYPE = 1800; // ms pause when fully typed
const PAUSE_AFTER_ERASE = 400; // ms pause after fully erased

export default function Typewriter({ strings = [] }) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase]             = useState("typing");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = strings[stringIndex];

    if (phase === "typing") {
      if (charIndex < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(i => i + 1);
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(
          () => setPhase("erasing"), PAUSE_AFTER_TYPE
        );
      }
    }

    if (phase === "erasing") {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(i => i - 1);
        }, ERASING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setStringIndex(i => (i + 1) % strings.length);
          setPhase("typing");
        }, PAUSE_AFTER_ERASE);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [phase, charIndex, stringIndex, strings]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor" aria-hidden="true">|</span>
    </span>
  );
}