import React from "react";
import FilterHeader from "../../Components/FilterHeader/FilterHeader";
import styles from "./styles/Pools.module.css";
function Pools() {
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
        <FilterHeader pool={true} />
        {/* {filter header ends here-----------------------------------------------} */}
      </div>
    </div>
  );
}

export default Pools;
