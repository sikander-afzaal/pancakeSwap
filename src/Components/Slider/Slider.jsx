import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Slider.module.css";
import img1 from "../../Assets/slider/slide1.webp";
import img2 from "../../Assets/slider/slide2.webp";
function Slider() {
  return (
    <div className="slider">
      <Splide
        options={{
          rewind: true,
          width: "100%",
          perPage: 1,
          perMove: 1,
          arrows: false,
          pagination: true,
          type: "fade",
          autoplay: true,
          speed: 1000,
        }}
      >
        <SplideSlide>
          <div className={styles.slideBox}>
            <div className={styles.leftSlide}>
              <h1>Win $105,095 in Lottery</h1>
              <div className={styles.timer}>
                <div className={styles.time}>
                  <h1>0</h1>
                  <p>h</p>
                </div>
                <div className={styles.time}>
                  <h1>00</h1>
                  <p>m</p>
                </div>
                <div className={styles.time}>
                  <h1>00</h1>
                  <p>s</p>
                </div>
              </div>

              <button className={styles.mainBtn}>
                Play Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className={styles.rightSlide2}>
              <img src={img1} alt="" />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slideBox}>
            <div className={styles.leftSlide}>
              <h4>Perpetual Futures</h4>
              <h2>UP TO 100× LEVERAGE</h2>
              <button className={styles.mainBtn}>
                Trade Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className={styles.rightSlide1}>
              <img src={img2} alt="" />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
