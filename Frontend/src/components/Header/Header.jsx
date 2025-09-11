import styles from "./Header.module.css";
import Logo from "./Logo";
import GetStarted from "./GetStarted";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <NavBar />
        <div className={styles.buttons}>
          <a className={styles["login-btn"]} href="#">
            Login
          </a>
          <GetStarted />
        </div>
      </div>
    </>
  );
}
