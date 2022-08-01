import { useEffect, useState } from "react";
import styles from "@sass/ScrollProgress.module.sass";

export function ScrollProgress() {
  const [barWidth, setBarWidth] = useState({ width: 0 });

  function handleScrollPercent() {
    let windowScroll = window.scrollY;
    let windowTotalScroll = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = (windowScroll / windowTotalScroll) * 100;
    setBarWidth({ width: `${scrollPercent}%` });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
  }, []);

  return (
    <div className={styles.container__scrollProgress}>
      <div
        style={barWidth}
        className={styles.container__scrollProgress__bar}
      ></div>
      <div className={styles.container__scrollProgress__smallBar}></div>
    </div>
  );
}
