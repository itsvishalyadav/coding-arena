import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logoImg}>
          <img src="/logo.png" alt="Logo" width={60} />
        </div>
        <div className={styles["logo-name"]}>coding</div>
      </div>
    </>
  );
}
