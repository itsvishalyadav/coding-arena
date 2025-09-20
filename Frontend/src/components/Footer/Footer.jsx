import Logo from "../Header/Logo";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import QuickNav from "./QuickNav";
export default function Footer() {
  const product = [
    "Create Contest",
    "Join Contest",
    "Team Battles",
    "Leaderboards",
  ];
  const community = [
    "Forums / Discussions",
    "Blogs / Resources",
    "Code of Conduct",
    "Discord / Slack Link",
  ];
  const support = [
    "Help Center / FAQs",
    "Contact Us",
    "Report a Bug",
    "Feature Request",
  ];
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["upperfooter"]}>
          <div className={styles.leftfooter}>
            <div className={styles["logo-left"]}>
              <Logo />
              <div>Code. Compete. Conquer.</div>
              <div className={styles.social}>
                <Link to="https://github.com/">
                  <FaGithub size={25} />
                </Link>
                <Link to="https://instagram.com/">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
            © 2025 CodingArena. All rights reserved.
          </div>
          <div className={styles.quickLinks}>
            <div className={styles.product}>
              <h2 className={styles.navHead}>Product</h2>
              <QuickNav list={product} />
            </div>
            <div className={styles.community}>
              <h2 className={styles.navHead}>Community</h2>
              <QuickNav list={community} />
            </div>
            <div className={styles.support}>
              <h2 className={styles.navHead}>Support</h2>
              <QuickNav list={support} />
            </div>
          </div>
        </div>
        <div className={styles.lowerLinks}>
          <ul className={styles.lowerLinksList}>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms and Conditions</Link>
            </li>
            <li>
              <Link>Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
