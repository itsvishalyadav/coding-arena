import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";
export default function Logo() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <div onClick={handleLogoClick} className={styles.logo}>
        <div className={styles.logoImg}>
          <img src="/logo.png" alt="Logo" width={60} />
        </div>
        <div className={styles["logo-name"]}>coding</div>
      </div>
    </>
  );
}
