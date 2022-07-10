import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./styles/Farms.module.css";
import FilterHeader from "../../Components/FilterHeader/FilterHeader";
import smallIco from "../../Assets/bnb.svg";
import small from "../../Assets/small-ico.svg";
import FarmRow from "../../Components/FarmRow/FarmRow";
import FarmBox from "../../Components/FarmBox/FarmBox";

function Farms() {
  const [gridView, setGridView] = useState(false);

  const data = [
    {
      icon: smallIco,
      image: small,
      core: true,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: false,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: true,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: true,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: false,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: true,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: true,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: true,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
    {
      icon: smallIco,
      image: small,
      core: false,
      earned: 0,
      apr: "20.3%",
      liquidity: "$134,077,947",
      multiplier: "40x",
      contractUrl: "#",
      getUrl: "#",
      pairInfoUrl: "#",
      cakeEarned: 0,
      name: "Cake-Bnb",
    },
  ];

  return (
    <div className={styles.mainCont}>
      <div className={styles.headCont}>
        <div className={styles.head}>
          <h1>Farms</h1>
          <p>Stake LP tokens to earn.</p>
          <Link to={"/Earn/Farm"}>
            Community Auctions <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <div className={styles.auctionDiv}>
        {/* {filter header starts here-----------------------------------------------} */}
        <FilterHeader setGridView={setGridView} />
        {/* {filter header ends here-----------------------------------------------} */}
        <div
          className={`${gridView ? styles.farmRowGrid : styles.farmRowCont}`}
        >
          {data.map((elem, key) => {
            return gridView ? (
              <FarmBox {...elem} key={key + "FarmRow"} />
            ) : (
              <FarmRow {...elem} key={key + "FarmRow"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Farms;
