import styles from "./Tagline.module.css";
import { useNavigate } from "react-router-dom";
import GetStarted from "./GetStarted";
import TypedText from "./TypeWriterText";

export default function Tagline() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className={styles["tagline-call-btn"]}>
        <div className={styles.tagline}>
          <div>Enter The</div>
          <div>
            Arena. <TypedText />
          </div>
          <div>And Learn</div>
        </div>
        <div className={styles.callFeatures}>
          Battle in real-time challenges to prove skills and become champions.
        </div>
        <GetStarted onClick={handleClick} />
      </div>
    </>
  );
}
