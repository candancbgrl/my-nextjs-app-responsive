import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinux
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/" className={styles.logo}>
        <FontAwesomeIcon
                icon={faLinux}
                className={styles.linuxLogo}
              />Linux
        </Link>
        <nav className={styles.navbar}>
          <div>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <Link href="/post" className={styles.navItem}>
              Posts
            </Link>
           
            <Link href="/contact" className={styles.navItem}>
              Contact
            </Link>
            <Link href="/about" className={styles.navItem}>
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
