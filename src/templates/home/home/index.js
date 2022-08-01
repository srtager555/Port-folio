import { useState, useEffect, useLayoutEffect } from "react";
import WrappingLetters from "wrapping-letters-react";

import styles from "@sass/HomeContainer.module.sass";

export function HomeContainer({ l }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  const handleIsMobile = () => {
    if (window.innerWidth > 510) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useLayoutEffect(() => {
    var userAgent = navigator.userAgentData || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
      setIsAppleDevice(true);
    }
  }, []);

  useEffect(() => {
    handleIsMobile();
    window.addEventListener("resize", handleIsMobile);
    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);

  return (
    <>
      <div ref={l} className={`container ${styles["container-home"]}`}>
        <div
          className={`${styles["container__title"]} ${
            isAppleDevice ? styles.apple0_0 : ""
          }`}
        >
          {isMobile ? (
            <div
              className={`${styles["container__title-image"]} ${styles.mobile}`}
            >
              <img
                src="https://i.ibb.co/YDnX5r8/mobile-home-image.jpg"
                alt="kda Ahri"
              />
            </div>
          ) : (
            <div className={styles["container__title-image"]}>
              <img
                src="https://i.ibb.co/f8RVct5/home-image.jpg"
                alt="kda Ahri"
              />
            </div>
          )}
          <div className={styles["container__title-hero"]}>
            <div className={styles.container__name}>
              <span>Carlos Ponce</span>
            </div>
            <div className={styles.container__job}>
              <span>Front-end Developer</span>
            </div>
          </div>
        </div>
        <div className={styles.container__description}>
          <div className={styles.container__text}>
            <span>
              Hello! I’m a young developer, my specialty is front-end
              development. I invite you to see my projects are simple, but
              interesting.
            </span>
          </div>
          <div className={styles.container__slider}>
            <span className={styles["container__slider-item"]}>
              <WrappingLetters
                text={`PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022`}
                textOptions={{
                  ClassToAdd: styles["slider-words"],
                  PerWord: true,
                }}
              />
            </span>
            <span className={styles["container__slider-item"]}>
              <WrappingLetters
                text={`PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022 PORTFOLIO 2022`}
                textOptions={{
                  ClassToAdd: styles["slider-words"],
                  PerWord: true,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
