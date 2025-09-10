import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <Link to="">Pricing</Link>
        </li>
        <li>
          <Link to="">Features</Link>
        </li>
        <li>
          <Link to="">Products</Link>
        </li>
      </ul>
    </>
  );
}
