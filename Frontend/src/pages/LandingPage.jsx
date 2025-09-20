import Header from "../components/Header/Header";
import styles from "./LandingPage.module.css";
import Tagline from "../components/Landing/Tagline";
import Footer from "../components/Footer/Footer";
import Features from "../components/Features/Features";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Tagline />
        <div className={styles.image}>
          <img src="/bbb.png" alt="Image" width={790} />
        </div>
      </div>
      <Features/>
      <Footer />
    </>
  );
}
