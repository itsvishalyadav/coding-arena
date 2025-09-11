import styles from "./Tagline.module.css";
import { useNavigate } from "react-router-dom";
import GetStarted from "./GetStarted";

export default function Tagline() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className={styles["tagline-call-btn"]}>
        <div className={styles.tagline}>
          Enter The
          <span>
            Arena. <span className={styles.cursive}>Compete</span>
          </span>
          And Code
        </div>
        <div className={styles.callFeatures}>
          Battle in real-time challenges to prove skills and become champions.
        </div>
        <GetStarted onClick={handleClick} />
      </div>
    </>
  );
}
