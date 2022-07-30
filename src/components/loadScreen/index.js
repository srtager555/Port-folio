import { useState, useEffect, useLayoutEffect } from "react";
import { getRandomPhrase } from "@contexts/randomPhrases";

import styles from "@sass/LoadScreen.module.sass";

export function LoadScreen({ loaded, inPath }) {
  const [arrClassAnimeCont, setArrClassAnimeCont] = useState([]);
  const [arrClassRoutes, setArrClassRoutes] = useState([]);
  const [arrClassAnimExit, setArrClassAnimExit] = useState([]);
  const [randomPhrase, setRandomPhrase] = useState("");

  function handleLoadEnd() {
    setArrClassAnimExit(["loader--placeholder--loaderEnded"]);
    setTimeout(() => {
      setArrClassAnimeCont(["loader--exit"]); // loader--exit
      setTimeout(() => {
        setArrClassAnimeCont([""]); // ""
        setArrClassAnimExit([""]); // ""
      }, 2100);
    }, 1000);
  }

  useEffect(() => {
    if (inPath === "home") setArrClassRoutes(["home--style"]);
    else setArrClassRoutes([""]);
  }, [inPath]);

  useLayoutEffect(() => {
    setArrClassAnimeCont(["loading"]);
  }, [loaded]);

  useEffect(() => {
    if (loaded) handleLoadEnd();
    else setRandomPhrase(getRandomPhrase());
  }, [loaded]);

  return (
    <div
      className={`container ${styles.loader} ${arrClassAnimeCont} ${arrClassRoutes}`}
    >
      <div className={`container ${styles["loader--background"]}`}></div>
      <div className={`${styles["loader--successText"]} ${arrClassAnimExit}`}>
        <span>Loaded</span>
      </div>
      <div
        className={`container ${styles["loader--placeholder"]} ${arrClassAnimExit}`}
      >
        <div className={styles["loader--placeholder--innerLetter"]}>
          <span>&&&&&&&&&&</span>
        </div>
        <div className={styles["loader--placeholder--innerLetter"]}>
          <span>&&&&&&&&&&</span>
        </div>
      </div>

      <div className={styles["loader--randomPhrase"]}>
        <span>{randomPhrase}</span>
      </div>
    </div>
  );
}
