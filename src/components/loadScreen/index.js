import { useState, useEffect, useLayoutEffect } from "react";
import { getRandomPhrase } from "@contexts/randomPhrases";

import "../../styles/LoadScreen.css";

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
    <div className={`container loader ${arrClassAnimeCont} ${arrClassRoutes}`}>
      <div className={`container loader--background`}></div>
      <div className={`loader--successText ${arrClassAnimExit}`}>
        <span>Loaded</span>
      </div>
      <div className={`container loader--placeholder ${arrClassAnimExit}`}>
        <div className="loader--placeholder--innerLetter">
          <span>&&&&&&&&&&</span>
        </div>
        <div className="loader--placeholder--innerLetter">
          <span>&&&&&&&&&&</span>
        </div>
      </div>

      <div className="loader--randomPhrase">
        <span>{randomPhrase}</span>
      </div>
    </div>
  );
}
