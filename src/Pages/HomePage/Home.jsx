import React from "react";
import Slider from "../../Components/Slider/Slider";
import styles from "./styles/Home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <Slider />
    </div>
  );
}

export default Home;
