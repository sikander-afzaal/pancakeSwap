import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faEllipsis,
  faGear,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import logoDesk from "../../Assets/logo-desk.png";
import small from "../../Assets/small-ico.svg";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <Link to={"/"}>
          <img src={logoDesk} alt="" />
        </Link>
        <div className={styles.navLink}>
          <Link className={styles.mainNav} to={"/"}>
            Trade
          </Link>
          <div className={styles.dropMenu}>
            <Link to={"/"}>Swap</Link>
            <Link to={"/"}>Limit</Link>
            <Link to={"/"}>Liquidity</Link>
            <Link to={"/"}>
              Perpetual{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.navLink}>
          <Link className={styles.mainNav} to={"/"}>
            Earn
          </Link>
          <div className={styles.dropMenu}>
            <Link to={"/"}>Swap</Link>
            <Link to={"/"}>Limit</Link>
            <Link to={"/"}>Liquidity</Link>
            <Link to={"/"}>
              Perpetual{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.navLink}>
          <Link className={styles.mainNav} to={"/"}>
            Win
          </Link>
          <div className={styles.dropMenu}>
            <Link to={"/"}>Swap</Link>
            <Link to={"/"}>Limit</Link>
            <Link to={"/"}>Liquidity</Link>
            <Link to={"/"}>
              Perpetual{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.navLink}>
          <Link className={styles.mainNav} to={"/"}>
            NFT
          </Link>
          <div className={styles.dropMenu}>
            <Link to={"/"}>Swap</Link>
            <Link to={"/"}>Limit</Link>
            <Link to={"/"}>Liquidity</Link>
            <Link to={"/"}>
              Perpetual{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.navLink}>
          <div className={styles.mainNav}>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>

          <div className={styles.dropMenu}>
            <Link to={"/"}>Swap</Link>
            <Link to={"/"}>Limit</Link>
            <Link to={"/"}>Liquidity</Link>
            <Link to={"/"} className={styles.border}>
              Leaderboard
            </Link>
            <Link to={"/"}>
              Perpetual{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
            <Link to={"/"}>
              Perpetual{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.amount}>
          <img src={small} alt="" />
          <p>$3.54</p>
        </div>
        <div className={styles.languageDiv}>
          <FontAwesomeIcon icon={faGlobe} />
          <div className={styles.languageDrop}>
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
        <FontAwesomeIcon icon={faGear} />
        <button className={styles.connect}>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Header;
