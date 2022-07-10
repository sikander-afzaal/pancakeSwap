import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faChevronDown,
  faCircleCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "./FarmRow.module.css";
import Button from "../../Components/Button/Button";
import goTo from "../../Assets/go-to-arrow.svg";
function FarmRow({
  image,
  icon,
  core,
  earned,
  apr,
  liquidity,
  multiplier,
  contractUrl,
  getUrl,
  pairInfoUrl,
  cakeEarned,
  name,
}) {
  const [openRow, setOpenRow] = useState(false);
  return (
    <div className={styles.farmRow}>
      <div
        onClick={() => setOpenRow((prev) => !prev)}
        className={styles.farmRowTop}
      >
        <div className={styles.rowImg}>
          <div className={styles.absDiv}>
            <img src={image} className={styles.absImg} alt="" />
            <img src={icon} alt="" />
          </div>
          <h1>{name}</h1>
        </div>
        {core ? (
          <div className={styles.check}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>Core</p>
          </div>
        ) : (
          <div className={styles.redCheck}>
            <FontAwesomeIcon icon={faUsers} />
            <p>Farm Auction</p>
          </div>
        )}
        <div className={styles.rowCol}>
          <p>Earned</p>
          <h5>{earned}</h5>
        </div>
        <div className={styles.rowCol}>
          <p>APR</p>
          <h5>
            {apr} <FontAwesomeIcon icon={faCalculator} />
          </h5>
        </div>
        <div className={styles.rowColDesk}>
          <p>Liquidity</p>
          <h5>
            {liquidity} <FontAwesomeIcon icon={faQuestionCircle} />
          </h5>
        </div>
        <div className={styles.rowColDesk}>
          <p>Multiplier</p>
          <h5>
            {multiplier} <FontAwesomeIcon icon={faQuestionCircle} />
          </h5>
        </div>
        <div className={styles.detailsDiv}>
          <h2>Details</h2>
          <FontAwesomeIcon
            className={`${openRow && styles.rotate}`}
            icon={faChevronDown}
          />
        </div>
      </div>
      <div
        className={`${styles.farmRowBottom} ${openRow && styles.farmRowOpen}`}
      >
        <div className={styles.rowLinks}>
          <a href={getUrl}>
            Get CAKE-BNB LP <img src={goTo} alt="" />
          </a>
          <a href={contractUrl}>
            View Contract
            <img src={goTo} alt="" />
          </a>
          <a href={pairInfoUrl}>
            See Pair Info <img src={goTo} alt="" />
          </a>
        </div>
        <div className={styles.btnDiv}>
          <div className={styles.earnedDiv}>
            <h5>Cake Earned</h5>
            <div className={styles.earnRow}>
              <p>{cakeEarned}</p>
              <button className={styles.harvest}>HARVEST</button>
            </div>
          </div>
          <div className={styles.earnedDiv}>
            <h5>START FARMING</h5>
            <Button text={"Connect Wallet"} />
          </div>
        </div>

        <div className={styles.bottomRowCol}>
          <div className={styles.rowCol}>
            <p>APR</p>
            <h5>
              {apr} <FontAwesomeIcon icon={faCalculator} />
            </h5>
          </div>
          <div className={styles.rowCol}>
            <p>Liquidity</p>
            <h5>
              {liquidity} <FontAwesomeIcon icon={faQuestionCircle} />
            </h5>
          </div>
          <div className={styles.rowCol}>
            <p>Multiplier</p>
            <h5>
              {multiplier} <FontAwesomeIcon icon={faQuestionCircle} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmRow;
