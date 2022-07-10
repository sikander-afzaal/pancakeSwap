import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.css";
function Button({ inverse, arrow, text, plus }) {
  return (
    <button className={!inverse ? styles.mainBtn : styles.inverseBtn}>
      {plus && <FontAwesomeIcon icon={faPlus} />} {text}{" "}
      {arrow && <FontAwesomeIcon icon={faArrowRight} />}
    </button>
  );
}

export default Button;
