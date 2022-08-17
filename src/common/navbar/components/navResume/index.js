import { useState, useEffect } from "react";
import Link from "next/link";

// import { MenuButton } from "./menuButton";

import styles from "@sass/resumeStyles/navbar.module.sass";

export function NavResume({ navbarProps }) {
  const { currentPage, pagesNameList, handleClickChangePage } = navbarProps;

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [pageIndex, setPageIndex] = useState(undefined);
  const [previusPage, setPreviusPage] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  function NavButton({ path, children }) {
    return (
      <button onClick={() => handleClickChangePage(`/${path}`)}>
        {children}
      </button>
    );
  }

  function openMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  useEffect(() => {
    setPageIndex(pagesNameList.indexOf(currentPage));

    setPreviusPage(
      pagesNameList[pageIndex - 1] || pagesNameList[pagesNameList.length - 1]
    );
    setNextPage(pagesNameList[pageIndex + 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageIndex]);

  if (currentPage === "home") return null;

  return (
    <>
      <nav className={styles.container}>
        <NavButton path={previusPage}>{previusPage}</NavButton>
        <button
          onClick={openMenu}
          className={`${styles.menuBtnContent}${isOpenMenu ? " open" : ""}`}
        ></button>
        <NavButton path={nextPage}>{nextPage}</NavButton>
      </nav>
    </>
  );
}
