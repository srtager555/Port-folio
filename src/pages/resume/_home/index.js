import React, { useRef, useEffect, useLayoutEffect } from "react";

import { ButtonsMap } from "./components/ButtonsMap";
import { Background } from "./components/Background";
import { InteractiveContent } from "./components/InteractiveContent";
import { HeadComponent } from "@components/Head.next";

import upLetter from "@animations/defaultAnimation/upLetter";
import downLetter from "@animations/defaultAnimation/downLetter";

import styles from "@sass/resumeStyles/home.module.sass";

export function Home({ handleClickChangePage, setLoader, chagePath }) {
  // here declare the REF of the elements

  const mainRef = useRef(null);
  const classChanger = useRef(null);
  const goToRef = useRef(null);
  const goToContainerRef = useRef(null);
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const moreInfoRef = useRef(null);

  // this array is for adding events for each element
  let refArray = [profileRef, skillsRef, experienceRef, moreInfoRef];

  // Information for the routing
  const pageNames = ["profile", "sq", "experience", "more Info"];
  const pageLinks = ["profile", "sq", "experience", "moreInfo"];

  // handleEnvets

  // when the mouse is over of a link
  // the effect of the cursor will change position
  // and its opacity becomes to 1
  function handleLinkHover(e) {
    // the code'll start with the letters animation
    const arr = [styles.profile, styles.sq, styles.experience, styles.moreInfo];
    const classesContainer = classChanger.current.className.split(" ");

    // Is easy, the code only need change the css classes
    let a = classesContainer.map((element) => {
      if (arr.indexOf(element) != -1) return "";
      else return element;
    });
    a.pop();
    a.push(
      arr[Object.values(e.target.parentElement.childNodes).indexOf(e.target)]
    );

    classChanger.current.className = a.join(" ");

    // here the code add the new position for the cursor effect
    goToRef.current.style.top = `${
      e.target.getBoundingClientRect().top -
      mainRef.current.getBoundingClientRect().top +
      e.target.offsetHeight / 2
    }px`;

    goToContainerRef.current.className += ` ${styles["links--container__pointer--hover"]}`;
  }

  // When the mouse enters the target,
  // it will pick up each target child and
  // send it to an animation function.
  function handleMouseEnter(e, index) {
    const element = refArray[index].current.children[1].children;

    upLetter(element, () => handleLinkHover(e));
  }

  // here return the opacity of the cursor effect to 0
  // and run the leave animation funtion
  function handleMouseLeave(index) {
    const element = refArray[index].current.children[1].children;

    downLetter(element, () => {
      const a = goToContainerRef.current.className.replace(
        ` ${styles["links--container__pointer--hover"]}`,
        ""
      );
      goToContainerRef.current.className = a;
    });
  }

  useLayoutEffect(() => {
    chagePath(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // here add listeners for the handle events
  useEffect(() => {
    // here add the first position for the cursor follower
    goToRef.current.style.top = `${
      refArray[0].current.getBoundingClientRect().top +
      refArray[0].current.offsetHeight / 2
    }px`;

    // here it'll add to each element 2 listeners
    refArray.forEach((element, index) => {
      element.current.addEventListener("mouseenter", (e) =>
        handleMouseEnter(e, index)
      );
      element.current.addEventListener("mouseleave", () =>
        handleMouseLeave(index)
      );
    });

    // clean up uwu
    // return () => {
    //   // here remove each listener
    //   refArray.forEach((element, index) => {
    //     console.log(element);
    //     element.current.removeEventListener("mouseenter", (e) =>
    //       handleMouseEnter(e, index)
    //     );
    //     element.current.removeEventListener("mouseleave", () =>
    //       handleMouseLeave(index)
    //     );
    //   });
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeadComponent title="The && Resume" />
      <div className={styles.home}>
        <Background />
        <main ref={mainRef} className={styles[`main--container`]}>
          <InteractiveContent
            setLoader={setLoader}
            classChanger={classChanger}
          />
          <div className={styles["links--container"]}>
            <div className={styles["links--container__links"]}>
              <ButtonsMap
                handleClickChangePage={handleClickChangePage}
                refArray={refArray}
                pageNames={pageNames}
                pageLinks={pageLinks}
              />
            </div>
            <div
              ref={goToContainerRef}
              className={`${styles["links--container__pointer"]}`}
            >
              <span ref={goToRef} className={styles["links--word__pointer"]}>
                Go To
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
