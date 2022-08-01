import { useState } from "react";

import styles from "@sass/projects/links.module.sass";

export function Links({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.links}>
      <div
        className={`${styles["links--title"]}${
          hover ? ` ${styles.visible}` : ""
        }`}
      >
        <span>Idk what animation to put here Xd</span>
      </div>
      <div className={styles["links--content"]}>
        {project.map((link, index) => (
          <div
            key={`${link} - ${index}`}
            className={styles["links-content--item"]}
          >
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              href={link[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link[0]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
