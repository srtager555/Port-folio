import React from 'react';

import styles from "../../../styles/cv.module.scss";

export function ContainerTitle() {
    return (
        <div
        className={`${styles.container__content}  ${styles["container--title"]}`}
     >
        <img src="https://i.ibb.co/f8RVct5/home-image.jpg" alt="Hu Tao" />
        <h1>Frontend developer</h1>
        <span>Carlos Ponce</span>
     </div>
    )
}