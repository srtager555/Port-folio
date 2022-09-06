import { useState, useEffect } from "react";

import Wl from "wrapping-letters-react";

import styles from "@sass/resumeStyles/home/descriptionStyles.module.sass";

function SpecialTag({ letter, index }) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 50);

    return () => setAnimation(false);
  }, []);
  return (
    <span
      className={`${styles["inline-container"]} ${styles["down-animation"]}${
        animation ? ` ${styles["normal-position"]}` : ""
      }`}
    >
      <span
        style={{ transitionDelay: `${index * 25}ms` }}
        className={styles["italic-letters"]}
      >
        {letter}
      </span>
    </span>
  );
}

function template({ letter, specialWrapp, index }) {
  const { hasCustomWrapp, NewWrappStructure } = specialWrapp;

  const Default = ({ letter }) => <span>{letter}</span>;

  return hasCustomWrapp ? (
    <NewWrappStructure letter={letter} index={index} />
  ) : (
    <Default letter={letter} />
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
        structure={template}
      />
    </p>
  );
}
