import { useEffect } from "react";

import styles from "@sass/resumeStyles/home.module.sass";

export function InteractiveContent({
  setLoader,
  interactiveContentRef,
  classChanger,
}) {
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
        <p>Aqui se resumira que es cada section uwuw</p>
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
