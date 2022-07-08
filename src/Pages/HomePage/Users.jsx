import React from "react";
import {
  faUsers,
  faMoneyBillTrendUp,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/Users.module.css";
import img from "../../Assets/purple-ico.svg";
import UserBox from "../../Components/UserBox/UserBox";

function Users() {
  return (
    <div className={styles.userCont}>
      <div className={styles.users}>
        <img src={img} alt="" className={styles.icon} />
        <h1>
          Used by millions. <br /> Trusted with billions.
        </h1>
        <p className={styles.userDesc}>
          PancakeSwap has the most users of any decentralized platform, ever.
          And those users are now entrusting the platform with over $3.5 billion
          in funds.
        </p>
        <p className={styles.userWhy}>WIll you join them?</p>
        <div className={styles.boxRow}>
          <UserBox
            head={"2.3 million"}
            span={"users"}
            color={"rgb(118, 69, 217)"}
            desc={"in the last 30 days"}
            icon={faUsers}
          />
          <UserBox
            head={"24 million"}
            span={"trades"}
            color={"rgb(31, 199, 212)"}
            desc={"made in the last 30 days"}
            icon={faMoneyBillTrendUp}
          />
          <UserBox
            head={"$3.5 billion"}
            span={"staked"}
            color={"rgb(237, 75, 158)"}
            desc={"Total Value Locked"}
            icon={faChartColumn}
          />
        </div>
      </div>
      <svg
        viewBox="0 0 1660 48"
        preserveAspectRatio="none"
        color="text"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.patt}
      >
        <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
      </svg>
    </div>
  );
}

export default Users;
