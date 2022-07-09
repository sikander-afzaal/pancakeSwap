import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faEllipsis,
  faGear,
  faGlobe,
  faMoneyBillTrendUp,
  faSackDollar,
  faShapes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import logoDesk from "../../Assets/logo-desk.png";
import logoMob from "../../Assets/logo-mob.png";
import small from "../../Assets/small-ico.svg";
function Header() {
  const [menu, setMenu] = useState("");
  const [lang, setLang] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <Link className={styles.logo} to={"/"}>
            <img src={logoDesk} alt="" />
          </Link>
          <Link className={styles.logoMob} to={"/"}>
            <img src={logoMob} alt="" />
          </Link>
          <div className={`${styles.navLink}  ${styles.navLink1}`}>
            <Link className={styles.mainNav} to={"/Trade/"}>
              Trade
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu1}`}>
              <Link to={"/Trade/"}>Swap</Link>
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
          <div className={`${styles.navLink}  ${styles.navLink2}`}>
            <Link className={styles.mainNav} to={"/"}>
              Earn
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu2}`}>
              <Link to={"/"}>Farms</Link>
              <Link to={"/"}>Pools</Link>
            </div>
          </div>
          <div className={`${styles.navLink}  ${styles.navLink3}`}>
            <Link className={styles.mainNav} to={"/"}>
              Win
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu3}`}>
              <Link to={"/"}>Trading Competition</Link>
              <Link to={"/"}>Prediction (BETA)</Link>
              <Link to={"/"}>Lottery</Link>
            </div>
          </div>
          <div className={`${styles.navLink}  ${styles.navLink4}`}>
            <Link className={styles.mainNav} to={"/"}>
              NFT
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu4}`}>
              <Link to={"/"}>Overview</Link>
              <Link to={"/"}>Collections</Link>
              <Link to={"/"}>Activity</Link>
            </div>
          </div>
          <div className={`${styles.navLink}  ${styles.navLink5}`}>
            <div className={styles.mainNav}>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>

            <div className={`${styles.dropMenu} ${styles.dropMenu5}`}>
              <Link to={"/"}>Info</Link>
              <Link to={"/"}>IFO</Link>
              <Link to={"/"}>Voting</Link>
              <Link to={"/"} className={styles.border}>
                Leaderboard
              </Link>
              <Link to={"/"}>
                Blog{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span>
              </Link>
              <Link to={"/"}>
                Docs{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.amount}>
            <img src={small} alt="" className={styles.small} />
            <p>$3.54</p>
          </div>
          <div
            onClick={() =>
              setLang((prev) => {
                return !prev;
              })
            }
            className={styles.languageDiv}
          >
            <FontAwesomeIcon icon={faGlobe} />
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
          <FontAwesomeIcon icon={faGear} />
          <button className={styles.connect}>Connect Wallet</button>
        </div>
      </div>

      {/* bottom bar starts here ------------------------------  */}
      <div
        onClick={() => setMenu("")}
        className={`${styles.overlay} ${menu !== "" ? styles.openOverlay : ""}`}
      ></div>
      <div className={styles.bottomBar}>
        <div className={`${styles.mobLink}`}>
          <FontAwesomeIcon icon={faMoneyBillTrendUp} />
          <p>Trade</p>
        </div>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "EARN") {
                return "";
              }
              return "EARN";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink2}`}
        >
          <FontAwesomeIcon icon={faSackDollar} />
          <p>Earn</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "EARN" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/"}>Farms</Link>
            <Link to={"/"}>Pools</Link>
          </div>
        </div>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "WIN") {
                return "";
              }
              return "WIN";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink3}`}
        >
          <FontAwesomeIcon icon={faTrophy} />
          <p>Win</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "WIN" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/"}>Trading Competition</Link>
            <Link to={"/"}>Prediction (BETA)</Link>
            <Link to={"/"}>Lottery</Link>
          </div>
        </div>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "NFT") {
                return "";
              }
              return "NFT";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink4}`}
        >
          <FontAwesomeIcon icon={faShapes} />
          <p>Nft</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "NFT" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/"}>Overview</Link>
            <Link to={"/"}>Collections</Link>
            <Link to={"/"}>Activity</Link>
          </div>
        </div>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "MENU") {
                return "";
              }
              return "MENU";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink5}`}
        >
          <FontAwesomeIcon icon={faEllipsis} />
          <div
            className={`${styles.dropMenu}  ${
              menu === "MENU" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/"}>Info</Link>
            <Link to={"/"}>IFO</Link>
            <Link to={"/"}>Voting</Link>
            <Link to={"/"} className={styles.border}>
              Leaderboard
            </Link>
            <Link to={"/"}>
              Blog{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
            <Link to={"/"}>
              Docs{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
