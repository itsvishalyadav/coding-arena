import styles from "./Tagline.module.css";

export default function Tagline() {
  return (
    <>
      <div className={styles.tagline}>
        Craft Your{" "}
        <span>
          Dream <span className={styles.cursive}>Website</span>
        </span>{" "}
        With Decode
      </div>
    </>
  );
}
