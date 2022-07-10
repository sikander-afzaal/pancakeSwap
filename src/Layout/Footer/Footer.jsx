import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faMedium,
  faReddit,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.css";
import logo from "../../Assets/logoFooter.svg";
import small from "../../Assets/small-ico.svg";
import Button from "../../Components/Button/Button";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
function Footer() {
  const [lang, setLang] = useState(false);
  return (
    <div className={styles.footerCont}>
      <img src={logo} className={styles.logoMob} alt="" />
      <div className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h1>About</h1>
            <a style={{ color: "rgb(255, 178, 55)" }} href="#">
              Contact
            </a>
            <a href="#">Brand</a>
            <a href="#">Blog</a>
            <a href="#">Community </a>
            <a href="#">Litepaper</a>
            <hr />
            <a href="#">Online Store</a>
          </div>
          <div className={styles.footerCol}>
            <h1>HELP</h1>
            <a href="#">Customer Support</a>
            <a href="#">Troubleshooting</a>
            <a href="#">Guides</a>
          </div>
          <div className={styles.footerCol}>
            <h1>DEVELOPERS</h1>
            <a href="#">Github</a>
            <a href="#">Documentation</a>
            <a href="#">Bug Bounty</a>
            <a href="#">Audits</a>
            <a href="#">Careers</a>
          </div>
          <img src={logo} className={styles.logo} alt="" />
        </div>
        <div className={styles.footerSocial}>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faReddit} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.leftFooter}>
          <div className={styles.darkMode}>
            <input type="checkbox" className={styles.checkbox} id="checkbox" />
            <label htmlFor="checkbox" className={styles.label}>
              <FontAwesomeIcon className={styles.faMoon} icon={faMoon} />
              <FontAwesomeIcon className={styles.faSun} icon={faSun} />
              <div className={styles.ball} />
            </label>
          </div>
          <div
            onClick={() =>
              setLang((prev) => {
                return !prev;
              })
            }
            className={styles.languageDiv}
          >
            <p>
              <FontAwesomeIcon icon={faGlobe} />
              EN
            </p>
            <div
              className={`${styles.languageDrop} ${
                lang ? styles.displayFlex : ""
              }`}
            >
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
            </div>
          </div>
        </div>
        <div className={styles.rightFooter}>
          <div className={styles.amount}>
            <img src={small} alt="" className={styles.small} />
            <p>$3.54</p>
          </div>
          <Button arrow text={"Buy Cake"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
