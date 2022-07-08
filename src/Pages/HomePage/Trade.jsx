import React from "react";
import styles from "./styles/Trade.module.css";
import coin1 from "../../Assets/coin1.webp";
import coin2 from "../../Assets/coin2.webp";
import coin3 from "../../Assets/coin3.webp";
import Button from "../../Components/Button/Button";
function Trade() {
  return (
    <div className={styles.tradeCont}>
      <div className={styles.trade}>
        <div className={styles.leftTrade}>
          <h1>
            <span>Trade</span> anything. No <br /> registration, no hassle.
          </h1>
          <p>
            Trade any token on BNB Smart Chain in seconds, just by connecting
            your wallet.
          </p>
          <div className={styles.btnDiv}>
            <Button text={"Trade Now"} />
            <a href="#">Learn</a>
          </div>
        </div>
        <div className={styles.rightTrade}>
          <img src={coin1} alt="" />
          <img src={coin2} alt="" />
          <img src={coin3} alt="" />
        </div>
      </div>
      <svg
        viewBox="0 0 1660 48"
        preserveAspectRatio="none"
        color="text"
        xmlns="http://www.w3.org/2000/svg"
        class={styles.path}
      >
        <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
      </svg>
    </div>
  );
}

export default Trade;
