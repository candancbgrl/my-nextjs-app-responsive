import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faConfluence,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <div className={styles.footHeader}>Linux</div>
            <div className={styles.footText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatum delectus vero eveniet repellendus ad labore
              debitis ullam, illum nisi?
            </div>
            <div className={styles.footerItems}>
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.facebook}
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} className={styles.twitter} />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instagram}
                />
              </div>
            </div>
          </div>
          <div className={styles.div3}>
            <div>
              <FontAwesomeIcon
                icon={faConfluence}
                className={styles.confluence}
              />
              Lorem, ipsum dolor
            </div>
            <div>
              <FontAwesomeIcon
                icon={faConfluence}
                className={styles.confluence}
              />
              Sit amet consectetur
            </div>

            <div>
              <FontAwesomeIcon
                icon={faConfluence}
                className={styles.confluence}
              />
              Adipisicing elit.
            </div>
          </div>
          <div className={styles.div4}>
            <div>
              <FontAwesomeIcon
                icon={faConfluence}
                className={styles.confluence}
              />
              Lorem, ipsum dolor
            </div><div>
              <FontAwesomeIcon
                icon={faConfluence}
                className={styles.confluence}
              />
              Lorem, ipsum dolor
            </div><div>
              <FontAwesomeIcon
                icon={faConfluence}
                className={styles.confluence}
              />
              Lorem, ipsum dolor
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
