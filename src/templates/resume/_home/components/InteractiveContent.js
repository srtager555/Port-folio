import { useEffect, useState } from "react";

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
  // const [lastClass, setLastClass] = useState(styles.profile);

  // const [showDescription, setShowDescription] = useState(true);
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
        <p>Hello there 👋!. This is my 2022 resume, I hope you like it</p>
      </div>
      <div
        ref={interactiveContentRef}
        className={styles["introduction--container__description"]}
      >
        {descriptionToShow}
      </div>

      {/* <div className={styles["introduction--container__aboutMe"]}></div> */}
      {/* <div className={styles["introduction--container__image"]}>
            <img
               // here turn off the load screen.
               onLoad={() => setLoader(true)}
               width="300"
               src="https://ttager.netlify.app/img/oaAhri4.jpg"
               alt=""
            />
         </div> */}
    </div>
  );
}
