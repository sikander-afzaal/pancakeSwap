import React from "react";
import patt from "../../Assets/hero-patt.svg";
import Slider from "../../Components/Slider/Slider";
import Hero from "./Hero";
import styles from "./styles/Home.module.css";
import Users from "./Users";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.heroBg}>
        <Slider />
        <Hero />
        <img src={patt} className={styles.heroPatt} alt="" />
      </div>
      <Users />
    </div>
  );
}

export default Home;
