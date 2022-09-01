import { useState, useEffect } from "react";

import Wl from "wrapping-letters-react";

import styles from "@sass/resumeStyles/home/descriptionStyles.module.sass";

function SpecialTag({ letter }) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 100);
  }, []);
  return (
    <div
      className={`${styles["inline-container"]} ${styles["down-animation"]}${
        animation ? ` ${styles["normal-position"]}` : ""
      }`}
    >
      <span className={styles["italic-letters"]}>{letter}</span>
    </div>
  );
}

export function ProfileDescription() {
  const words = ["what", "who", "I", "am,", "do", "how", "it."];

  return (
    <p>
      <Wl
        text="A brief explanation of who I am, what I do and how I do it."
        textOptions={{
          SpecialWrapp: {
            wordToSearch: words,
            structureToAdd: SpecialTag,
          },
          PerWord: true,
        }}
      />
    </p>
  );
}
