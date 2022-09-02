import { useState } from "react";
import Image from "next/image";

import styles from "@sass/resumeStyles/home/descriptionStyles.module.sass";

/* eslint-disable react/no-unescaped-entities */
export function SQDescription({ showMeme, setShowMeme }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseEndingAnimation, setMouseEndingAnimation] = useState(false);
  const [mouseWidthOutHeight, setMouseWidthOutHeight] = useState(false);

  const HandleMouseOver = () => {
    setMouseOver(true);
    setTimeout(() => setMouseEndingAnimation(true), 2000);
    setTimeout(() => {
      setMouseWidthOutHeight(true);
      setShowMeme(false);
    }, 4000);
  };

  return (
    <>
      {showMeme ? (
        <div
          onMouseOver={HandleMouseOver}
          className={`${styles["container-special__image"]}${
            mouseOver ? ` ${styles["mouse-hover"]}` : ""
          }${
            mouseEndingAnimation ? ` ${styles["mouse-ending_animation"]}` : ""
          }${mouseWidthOutHeight ? ` ${styles["mouse-widthOut-height"]}` : ""}`}
        >
          <div className={styles["container--image"]}>
            <div className={styles["image-placeholder"]}>
              <span>put your mouse here</span>
            </div>
            <Image
              src="/descriptionImage/put_your_mouse_here.JPG"
              alt=""
              layout="responsive"
              width="150"
              height="100"
            />
          </div>
        </div>
      ) : null}
      <p>Here you'll do find my skills and qualities!</p>
    </>
  );
}
