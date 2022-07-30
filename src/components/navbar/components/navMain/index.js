import { useEffect, useState } from "react";
import Link from "next/link";

import "@sass/Navbar.module.sass";

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
      <div className={`nav__background--main${isActived ? " show" : ""}`}></div>
      <div
        className={`nav__background--main secondary${isActived ? " show" : ""}`}
      ></div>
      <nav className={`nav__container--main${isActived ? " show" : ""}`}>
        <div className="nav__logo">
          <Link onClick={handleResetScroll} href="/">
            <a>&&</a>
          </Link>
        </div>
      </nav>
      <nav className={`nav__container--cta${isActived ? " show" : ""}`}>
        <a href="mailto:srtager555@gmail.com">{`let's talk!`}</a>
      </nav>
    </>
  );
}
