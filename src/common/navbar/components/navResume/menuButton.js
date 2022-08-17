import { useState } from "react";

import styles from "Src/styles/cvStyles/navbar.module.sass";

export function MenuButton({ pageName, handleChangePage, pagesName }) {
  const [isOpen, setIsOpen] = useState(false);
  let conditional = isOpen ? styles.open : "";

  function HandleOpenMenu() {
    setIsOpen(!isOpen);
  }

  let buttons = pagesName.map((element, index) => {
    return (
      <button
        inpage={`${pageName === element}`}
        key={`button-${index}`}
        onClick={() => {
          handleChangePage(element);
          setTimeout(() => HandleOpenMenu(), 500);
        }}
      >
        <span className={styles.emptyLetters}>{element}</span>
        <span className={styles.fullLetters}>{element}</span>
      </button>
    );
  });

  return (
    <>
      <button
        onClick={HandleOpenMenu}
        className={`${styles.menuBtnContent} ${conditional}`}
      >
        <div className={styles.btnCircle}></div>
      </button>
      <div className={`${styles.menuContent} ${conditional}`}>
        <div className={styles["container--hero"]}>{buttons}</div>
      </div>
    </>
  );
}
