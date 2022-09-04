import Wl from "wrapping-letters-react";

import styles from "@sass/resumeStyles/home/descriptionStyles.module.sass";

export function ExperienceDescription() {
  return (
    <p>
      <Wl
        text="I've been working on a few projects that give me some experience on
      this topic, check them out."
        textOptions={{
          SelectClass: {
            wordToSearch: ["experience on this topic", "projects"],
            classToAdd: styles["italic-letters"],
          },
          PerWord: false,
        }}
      />
    </p>
  );
}
