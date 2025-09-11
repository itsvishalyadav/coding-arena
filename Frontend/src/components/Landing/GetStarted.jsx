import { useState } from "react";
import styles from "./GetStarted.module.css";

export default function GetStarted({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${styles.btn} ${hovered ? styles.hovered : ""}`}
      >
        Get Started
      </div>
    </>
  );
}
