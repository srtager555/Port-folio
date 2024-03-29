// the development of this page has been canceled
// for terms to time and job
// I don't need a resume to get a Job
// I did remember the objective of this project.

import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";

import { Home } from "@templates/resume/_home";
import { profile as Profile } from "@templates/resume/_profile";
import { skills_and_qualities as Sq } from "@templates/resume/_sq";
import { experience as Experience } from "@templates/resume/_experience";
import { more_info as MoreInfo } from "@templates/resume/_moreInfo";
import NotMatch from "../404";

export default function Resume({ setLoader, chagePath, setNavbarProps }) {
  let currentPage = <Home {...pageProps} />;
  // url values
  // home, profile, sq, experience, moreInfo
  const router = useRouter();
  let { id } = router.query;

  const pageProps = {
    handleClickChangePage,
    setLoader,
    chagePath,
  };

  function handleClickChangePage(path) {
    setLoader(false);
    setTimeout(() => {
      router.push(`/resume/${path}`);
    }, 1000);
  }

  const PAGES = [
    <Home key="Home component" {...pageProps} />,
    <Profile key="Profile component" {...pageProps} />,
    <Sq key="Sq component" {...pageProps} />,
    <Experience key="Experience component" {...pageProps} />,
    <MoreInfo key="Moreinfo component" {...pageProps} />,
  ];

  const FUNCTIONS_NAMES = {
    [Home.name]: "home",
    [Profile.name]: "profile",
    [Sq.name]: "sq",
    [Experience.name]: "experience",
    [MoreInfo.name]: "moreInfo",
  };

  // list with names of the pages
  const pagesNameList = Object.values(FUNCTIONS_NAMES);

  // With that when the page changes with the browser buttons
  // the page loader is turn on
  useEffect(() => {
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useLayoutEffect(() => {
    setNavbarProps({
      currentPage: id,
      pagesNameList: pagesNameList,
      handleClickChangePage: handleClickChangePage,
    });

    return () => {
      setNavbarProps({});

      chagePath(null);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // here, the code find the page with the useParams and the variables
  // First find the name of the page

  try {
    let fnNameKeys = Object.entries(FUNCTIONS_NAMES);

    let pagesName = fnNameKeys.map((element) => {
      return element[1];
    });

    let currentPageName = pagesName.find((element) => element === id);

    // Then find the name of the function
    let currentPageFn = fnNameKeys.find(
      (element) => element[1] === currentPageName
    );
    // and finally, the find the component
    currentPage = PAGES.find((element) => {
      return element.type.name === currentPageFn[0];
    });
  } catch (error) {
    return <NotMatch chagePath={chagePath} setLoader={setLoader} />;
  }

  return <>{currentPage}</>;
}
