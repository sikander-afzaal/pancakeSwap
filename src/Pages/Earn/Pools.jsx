import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import FilterHeader from "../../Components/FilterHeader/FilterHeader";
import styles from "./styles/Pools.module.css";
import smallIco from "../../Assets/bnb.svg";
import small from "../../Assets/small-ico.svg";
import FarmBox from "../../Components/FarmBox/FarmBox";
import PoolRow from "../../Components/PoolRow/PoolRow";
function Pools() {
  const [gridView, setGridView] = useState(false);

  const data = [
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: true,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: false,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: true,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: false,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: true,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: false,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: true,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
    {
      icon: smallIco,
      image: small,
      firstHead: "Stake Cake",
      headDesc: "Stake, Earn – And more!",
      flexible: 0,
      locked: 0,
      tokenInfo: "#",
      tutorial: "#",
      ViewContact: "#",
      name: "CAKE",
      auto: false,
      staked: 0,
      profit: 0,
      totalStaked: 0,
      totalLocked: 166392570,
      duration: "37 weeks",
      fee: "0 ~ 2%",
    },
  ];
  return (
    <div className={styles.mainCont}>
      <div className={styles.headCont}>
        <div className={styles.head}>
          <h1>Syrup Pools</h1>
          <p>Just stake some tokens to earn. High APR, low risk.</p>
        </div>
      </div>
      <div className={styles.auctionDiv}>
        {/* {filter header starts here-----------------------------------------------} */}
        <FilterHeader setGridView={setGridView} pool={true} />
        {/* {filter header ends here-----------------------------------------------} */}
        <div
          className={`${gridView ? styles.farmRowGrid : styles.farmRowCont}`}
        >
          {data.map((elem, key) => {
            return gridView ? (
              <FarmBox {...elem} key={key + "FarmRow"} />
            ) : (
              <PoolRow {...elem} key={key + "FarmRow"} />
            );
          })}
          <div onClick={() => window.scroll(0, 0)} className={styles.toTop}>
            To Top <FontAwesomeIcon icon={faChevronUp} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pools;
