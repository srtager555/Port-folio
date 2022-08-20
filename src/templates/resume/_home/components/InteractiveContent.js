import { useEffect, useState } from "react";

import styles from "@sass/resumeStyles/home.module.sass";

export function InteractiveContent({
  setLoader,
  interactiveContentRef,
  classChanger,
  ICClasses,
}) {
  const [descriptionToShow, setDescriptionToShow] = useState(<Component1 />);

  function Component1() {
    return <p>This is the component number one</p>;
  }
  function Component2() {
    return <p>This is the component number two</p>;
  }
  function Component3() {
    return <p>This is the component number three</p>;
  }
  function Component4() {
    return <p>This is the component number four</p>;
  }

  useEffect(() => {
    if (ICClasses[1] === styles.profile) {
      setDescriptionToShow(<Component1 />);
    } else if (ICClasses[1] === styles.sq) {
      setDescriptionToShow(<Component2 />);
    } else if (ICClasses[1] === styles.experience) {
      setDescriptionToShow(<Component3 />);
    } else if (ICClasses[1] === styles.moreInfo) {
      setDescriptionToShow(<Component4 />);
    }
    console.log(ICClasses);
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
        <div className={styles.loaderHolder}></div>
        {descriptionToShow}
      </div>

      <div className={styles["introduction--container__aboutMe"]}></div>
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
