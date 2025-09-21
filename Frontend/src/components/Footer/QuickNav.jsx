import { Link } from "react-router-dom";
import styles from "./QuickNav.module.css";
import slugify from "slugify";

export default function QuickNav({ list }) {
  return (
    <>
      <ul>
        {list.map((item) => (
          <li className={styles.listItems}>
            <Link to={`/${slugify(item, { lower: true })}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
