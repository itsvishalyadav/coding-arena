import Logo from "../Header/Logo";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["logo-left"]}>
          <Logo />
          <div>Made with ❤️ and caffeine.</div>
          <div className={styles.social}>
            <Link to="https://github.com/">
              <FaGithub />
            </Link>
            <Link to="https://instagram.com/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
