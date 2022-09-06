import { useEffect, useState } from "react";

import Wl from "wrapping-letters-react";

import { ProfileDescription } from "./Descriptions/profile";
import { SQDescription } from "./Descriptions/sq";
import { ExperienceDescription } from "./Descriptions/experience";
import { MoreInfoDescription } from "./Descriptions/moreInfo";

import styles from "@sass/resumeStyles/home/home.module.sass";

export function InteractiveContent({
  setLoader,
  interactiveContentRef,
  classChanger,
  ICClasses,
  showMeme,
  setShowMeme,
}) {
  const [descriptionToShow, setDescriptionToShow] = useState(
    <ProfileDescription />
  );
  const [timeOutAnimation, setTimeOutAnimation] = useState(undefined);

  function handleAnimationToChangeDescription(component) {
    let element = interactiveContentRef.current;

    let classListArray = element.className.split(" ");

    if (!classListArray.includes(styles.hidden))
      element.className += ` ${styles.hidden}`;

    setTimeout(() => setDescriptionToShow(component), 200);

    setTimeOutAnimation(
      setTimeout(() => {
        const indexClass = classListArray.indexOf(styles.hidden);
        if (indexClass != -1) {
          classListArray.splice(indexClass, indexClass + 1);
        }
        element.className = classListArray.join(" ");
      }, 300)
    );
  }

  function customStructure({ letter, cssClass, index, specialWrapp }) {
    const { hasCustomWrapp, NewWrappStructure } = specialWrapp;

    return hasCustomWrapp ? (
      <NewWrappStructure letter={letter} cssClass={cssClass} index={index} />
    ) : (
      <span className={cssClass}>{letter}</span>
    );
  }

  function specialTag({ letter, cssClass, index }) {
    return (
      <span
        className={cssClass}
        style={{ animationDelay: `${index * 100 - 2300}ms` }}
      >
        {letter}
      </span>
    );
  }

  useEffect(() => {
    clearTimeout(timeOutAnimation);

    if (ICClasses[1] === styles.profile) {
      handleAnimationToChangeDescription(<ProfileDescription />);
    } else if (ICClasses[1] === styles.sq) {
      handleAnimationToChangeDescription(
        <SQDescription showMeme={showMeme} setShowMeme={setShowMeme} />
      );
    } else if (ICClasses[1] === styles.experience) {
      handleAnimationToChangeDescription(<ExperienceDescription />);
    } else if (ICClasses[1] === styles.moreInfo) {
      handleAnimationToChangeDescription(<MoreInfoDescription />);
    }

    // setLastClass(ICClasses[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ICClasses]);

  useEffect(() => {
    setTimeout(() => setLoader(true), 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={classChanger}
      className={`${styles["introduction--container"]} ${styles["profile"]}`}
    >
      <div className={styles["introduction--container__text"]}>
        <p>
          Hello there!!!{" "}
          <span className={styles["hand-move-animation"]}>👋🏻</span>{" "}
          <Wl
            text="This is my 2022 resume, I hope you like it!!!"
            textOptions={{
              SelectClass: {
                wordToSearch: ["I hope you like it!!!", "2022", "resume"],
                classToAdd: [
                  styles["text-farwell"],
                  styles["resume-date__number"],
                  styles["resume-date"],
                ],
              },
              SpecialWrapp: {
                wordToSearch: ["I hope you like it!!!"],
                structureToAdd: specialTag,
              },
            }}
            structure={customStructure}
          />
        </p>
      </div>
      <div
        ref={interactiveContentRef}
        className={styles["introduction--container__description"]}
      >
        {descriptionToShow}
      </div>
    </div>
  );
}
