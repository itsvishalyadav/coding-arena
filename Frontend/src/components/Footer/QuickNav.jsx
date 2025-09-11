import { Link } from "react-router-dom";
import styles from "./QuickNav.module.css";

export default function QuickNav({ list }) {
  return (
    <>
      <ul>
        {list.map((item) => (
          <li className={styles.listItems}>
            <Link to="">{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
