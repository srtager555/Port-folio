import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "@sass/Navbar.module.sass";

export function NavMain({ handleResetScroll }) {
  const [isActived, setIsActived] = useState(false);

  function handleScroll() {
    let scrollY = window.scrollY;

    if (scrollY > window.innerHeight * 0.1) {
      setIsActived(true);
    } else {
      setIsActived(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles["background--main"]}${
          isActived ? ` ${styles.show}` : ""
        }`}
      ></div>
      <div
        className={`${styles["background--main"]} ${styles.secondary}${
          isActived ? ` ${styles.show}` : ""
        }`}
      ></div>
      <nav
        className={`${styles["container--main"]}${
          isActived ? ` ${styles.show}` : ""
        }`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <a onClick={handleResetScroll}>&&</a>
          </Link>
        </div>
      </nav>
      <nav
        className={`${styles["container--cta"]}${
          isActived ? ` ${styles.show}` : ""
        }`}
      >
        <a href="mailto:srtager555@gmail.com">{`let's talk!`}</a>
      </nav>
    </>
  );
}
