import { Link } from "react-router-dom";
import Logo from "../components/Header/Logo";
import styles from "./Signup.module.css";
export default function Signup() {
  return (
    <>
      <div className={styles.signup}>
        <Logo />

        <div className={styles.mainContent}>
          <div className={styles.smallText}>Start For Free</div>
          <div className={styles.heading}>Create New Account </div>
          <div className={styles.smallText}>
            Already a member? <Link to="/login">Login</Link>
          </div>

          <form action="">
            <div className={styles.form}>
              <div className={`${styles.nameInput} `}>
                <input
                  className={`${styles.inputs} ${styles.firstName} `}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className={`${styles.inputs} ${styles.lastName} `}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
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
