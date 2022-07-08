import React from "react";
import Button from "../../Components/Button/Button";
import styles from "./styles/Hero.module.css";
import img from "../../Assets/hero.webp";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.leftHero}>
        <h1>The moon is made of pancakes.</h1>
        <p>
          Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy.
        </p>
        <div className={styles.buttonDiv}>
          <Button text={"Connect Wallet"} />
          <Button inverse text={"Trade Now"} />
        </div>
      </div>
      <div className={styles.rightHero}>
        <img src={img} className={styles.heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
