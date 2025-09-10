import Header from "../components/Header/Header";
import styles from "./LandingPage.module.css";
import Tagline from "../components/Landing/Tagline";
export default function LandingPage() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Tagline />
        <img src="/aa.png" alt="Image" width={900}/>
      </div>
    </>
  );
}
