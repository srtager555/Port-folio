import Wl from "wrapping-letters-react";

import styles from "@sass/resumeStyles/home/descriptionStyles.module.sass";

export function ProfileDescription() {
  return (
    <p>
      <Wl
        text="A brief explanation of who I am, what I do and how I do it."
        textOptions={{
          SelectClass: {
            wordToSearch: ["what", "who", "I", "am", "do", "how", "it"],
            classToAdd: styles["italic-letters"],
          },
        }}
      />
    </p>
  );
}
