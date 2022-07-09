import React from "react";
import styles from "./styles/Cake.module.css";
import bean1 from "../../Assets/bean1.webp";
import bean2 from "../../Assets/bean2.webp";
import bean3 from "../../Assets/bean3.webp";
import coin from "../../Assets/bean-coin.webp";
import Button from "../../Components/Button/Button";
function Cake() {
  return (
    <div className={styles.cakeCont}>
      <div className={styles.cake}>
        <div className={styles.leftCake}>
          <h1>
            <span>CAKE</span> makes our world <br /> go round.
          </h1>
          <p>
            CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win
            it, farm it, spend it, stake it... heck, you can even vote with it!
          </p>
          <div className={styles.btnDiv}>
            <Button text={"Buy CAKE"} />
            <a href="#">Learn</a>
          </div>
        </div>
        <div className={styles.rightCake}>
          <img src={bean1} alt="" />
          <img src={bean2} alt="" />
          <img src={bean3} alt="" />
          <img src={coin} alt="" />
        </div>
      </div>
      <div className={styles.switchDiv}>
        <div className={styles.switchCol}>
          <h4>Circulating Supply</h4>
          <h2>144,223,766</h2>
        </div>
        <div className={styles.switchCol}>
          <h4>Total supply</h4>
          <h2>310,405,281</h2>
        </div>
        <div className={styles.switchCol}>
          <h4>Max Supply</h4>
          <h2>750,000,000</h2>
        </div>
        <div className={styles.switchCol}>
          <h4>Market cap</h4>
          <h2>$460 million</h2>
        </div>
        <div className={styles.switchCol}>
          <h4>Burned to date</h4>
          <h2>508,904,887</h2>
        </div>
        <div className={styles.switchCol}>
          <h4>Current emissions</h4>
          <h2>13.75/block</h2>
        </div>
      </div>
    </div>
  );
}

export default Cake;
