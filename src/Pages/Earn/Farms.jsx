import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./styles/Farms.module.css";
import FilterHeader from "../../Components/FilterHeader/FilterHeader";
function Farms() {
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
        <FilterHeader />
        {/* {filter header ends here-----------------------------------------------} */}
      </div>
    </div>
  );
}

export default Farms;
