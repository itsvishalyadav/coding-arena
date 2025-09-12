import { Link } from "react-router-dom";
import Logo from "../components/Header/Logo";
import styles from "./Signup.module.css";
export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <Logo />

        <div className={styles.mainContent}>
          <div className={styles.heading}>Welcome Back </div>
          <div className={styles.smallText}>Login Your Account</div>

          <form action="">
            <div className={styles.form}>
              <input
                className={`${styles.inputs} ${styles.email} `}
                type="email"
                placeholder="Email"
              />
              <input
                className={`${styles.inputs} ${styles.password} `}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.smallText}>
              Not a member? <Link to="/signup">Signup</Link>
            </div>
            <button className={styles.submitBtn} type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
