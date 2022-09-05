import Wl from "wrapping-letters-react";

import styles from "@sass/resumeStyles/home/descriptionStyles.module.sass";

function letter({ letter, cssClass, specialWrapp, index }) {
  const { hasCustomWrapp, NewWrappStructure } = specialWrapp;

  return hasCustomWrapp ? (
    <NewWrappStructure letter={letter} index={index} />
  ) : (
    <span className={cssClass}>{letter}</span>
  );
}

function CustomTag({ letter, index }) {
  let customStyles = { animationDelay: `${index * 100 - 5400}ms` };

  return (
    <span className={styles["levelUp-animation"]} style={customStyles}>
      {letter}
    </span>
  );
}

export function ExperienceDescription() {
  return (
    <p>
      <Wl
        text="I've been working on a few projects that give me some experience on
      this topic, check them out."
        textOptions={{
          SelectClass: {
            wordToSearch: "projects",
            classToAdd: styles["italic-letters"],
          },

          SpecialWrapp: {
            wordToSearch: "experience on this topic",
            structureToAdd: CustomTag,
          },
        }}
        structure={letter}
      />
    </p>
  );
}
