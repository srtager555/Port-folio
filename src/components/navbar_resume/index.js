import { useState, useEffect } from "react";
import Link from "next/link";

// import { MenuButton } from "./menuButton";

import styles from "@sass/resumeStyles/navbar.module.sass";

export function Navbar({ currentPage, pagesNameList }) {
  const [pageIndex, setPageIndex] = useState(
    pagesNameList.indexOf(currentPage)
  );
  const [previusPage, setPreviusPage] = useState(
    pagesNameList[pageIndex - 1] || pagesNameList[pagesNameList.length - 1]
  );
  const [nextPage, setNextPage] = useState(pagesNameList[pageIndex + 1]);

  useEffect(() => {
    setPageIndex(pagesNameList.indexOf(currentPage));

    setPreviusPage(
      pagesNameList[pageIndex - 1] || pagesNameList[pagesNameList.length - 1]
    );
    setNextPage(pagesNameList[pageIndex + 1]);
  }, [currentPage]);

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.menu}>{}</div>
        <Link href={`/resume/${previusPage}`}>
          <a>{previusPage}</a>
        </Link>
        <Link href={`/resume/${nextPage}`}>
          <a>{nextPage}</a>
        </Link>
      </nav>
    </>
  );
}
