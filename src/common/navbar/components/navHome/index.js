import { useState, useEffect } from "react";

import { NAVBAR_MOBILE_SIZE } from "@contexts/constVarible";

import Link from "next/link";

import styles from "@sass/NavbarHome.module.sass";

export function NavHome({ handleResetScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  const handleIsMobile = () => {
    if (window.innerWidth > NAVBAR_MOBILE_SIZE) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };
  useEffect(() => {
    handleIsMobile();
    window.addEventListener("resize", handleIsMobile);
    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.nav__background} ${isOpen ? styles.open : ""}`}
      ></div>
      <nav className={`${styles.nav__container} ${styles.home}`}>
        <div className={styles.nav__logo}>
          <Link href="/">
            <a onClick={handleResetScroll}>&&</a>
          </Link>
        </div>
        {!isMobile ? (
          <>
            <div className={styles.nav__links}>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#lest-talk">Lest Talk!</a>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={handleOpenMenu}
              className={`${styles["nav__button--open__menu"]} ${
                isOpen ? "open" : ""
              }`}
            >
              <span className={styles["nav__button--open__menu-word"]}>
                {!isOpen ? "Menu" : "Close"}
              </span>
            </div>
            <div className={`${styles.nav__content} ${isOpen ? "open" : ""}`}>
              <div className={styles.nav__links}>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#lest-talk">Lest Talk!</a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
