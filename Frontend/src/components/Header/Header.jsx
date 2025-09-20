import styles from "./Header.module.css";
import Logo from "./Logo";
import GetStarted from "./GetStarted";
import NavBar from "./NavBar";
import { useNavigate, Link } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className={styles.header}>
        <Logo />
        <NavBar />
        <div className={styles.buttons}>
          <Link to="/login" className={styles["login-btn"]}>
            Login
          </Link>
          <GetStarted onClick={handleSignupClick} />
        </div>
      </div>
    </>
  );
}
