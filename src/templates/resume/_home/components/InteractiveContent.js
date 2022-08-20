import { useEffect, useState } from "react";

import styles from "@sass/resumeStyles/home.module.sass";

export function InteractiveContent({
  setLoader,
  interactiveContentRef,
  classChanger,
  ICClasses,
}) {
  const [descriptionToShow, setDescriptionToShow] = useState(<Component1 />);
  const [showDescription, setShowDescription] = useState(true);
  const [timeOutAnimtion, setTimeOutAnimtion] = useState(undefined);

  function Component1() {
    return (
      <p>
        This is the component number one, Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        industry's standard dummy text ever since the 1500s,{" "}
      </p>
    );
  }
  function Component2() {
    return (
      <p>
        This is the component number two, Lorem Ipsum is simply dummy text of
        the printing and typesetting industry.{" "}
      </p>
    );
  }
  function Component3() {
    return (
      <p>
        This is the component number three, Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the standard
        dummy text ever since the 1500s,{" "}
      </p>
    );
  }
  function Component4() {
    return (
      <p>
        This is the component number four, Lorem Ipsum is simply dummy text of
      </p>
    );
  }

  function handleAnimationToChangeDescription(component) {
    // I need fix this.
    clearTimeout(setTimeOutAnimtion);
    setShowDescription(false);

    setTimeout(() => setDescriptionToShow(component), 250);
    setTimeOutAnimtion(setTimeout(() => setShowDescription(true), 300));
  }

  useEffect(() => {
    if (ICClasses[1] === styles.profile) {
      handleAnimationToChangeDescription(<Component1 />);
    } else if (ICClasses[1] === styles.sq) {
      handleAnimationToChangeDescription(<Component2 />);
    } else if (ICClasses[1] === styles.experience) {
      handleAnimationToChangeDescription(<Component3 />);
    } else if (ICClasses[1] === styles.moreInfo) {
      handleAnimationToChangeDescription(<Component4 />);
    }
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
        className={`${styles["introduction--container__description"]} ${
          !showDescription ? styles["hidden"] : ""
        }`}
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
