import { useEffect, useState } from "react";

import { ProfileDescription } from "./Descriptions/profile";

import styles from "@sass/resumeStyles/home.module.sass";

export function InteractiveContent({
  setLoader,
  interactiveContentRef,
  classChanger,
  ICClasses,
}) {
  const [descriptionToShow, setDescriptionToShow] = useState(<Component1 />);
  // const [showDescription, setShowDescription] = useState(true);
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
    let element = interactiveContentRef.current;

    let classListArray = element.className.split(" ");

    if (!classListArray.includes(styles.hidden))
      element.className += ` ${styles.hidden}`;

    setTimeout(() => setDescriptionToShow(component), 200);
    setTimeOutAnimtion(
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
    if (timeOutAnimtion) clearTimeout(timeOutAnimtion);

    if (ICClasses[1] === styles.profile) {
      handleAnimationToChangeDescription(<ProfileDescription />);
    } else if (ICClasses[1] === styles.sq) {
      handleAnimationToChangeDescription(<Component2 />);
    } else if (ICClasses[1] === styles.experience) {
      handleAnimationToChangeDescription(<Component3 />);
    } else if (ICClasses[1] === styles.moreInfo) {
      handleAnimationToChangeDescription(<Component4 />);
    }
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
