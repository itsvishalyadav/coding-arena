import { Link } from "react-router-dom";
import Logo from "../../components/Header/Logo";
import styles from "./Signup.module.css";
export default function Signup() {
  return (
    <>
      <div className={styles.signup}>
        <Logo />

        <div className={styles.mainContent}>
          <div className={styles.heading}>Create New Account </div>
          <div className={styles.smallText}>
            Already a member? <Link to="/login">Login</Link>
          </div>

          <form action="" method="">
            <div className={styles.form}>
              <input
                className={`${styles.inputs} ${styles.name} `}
                type="text"
                placeholder="Your Name"
              />
              <input
                className={`${styles.inputs} ${styles.username} `}
                type="text"
                placeholder="Username"
              />

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
            <button className={styles.submitBtn} type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
