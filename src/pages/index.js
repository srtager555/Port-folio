import { useEffect, useLayoutEffect } from "react";

import { HomeTemplate } from "@src/templates/home";
import { HeadComponent } from "@src/components/Head.next";
// import { AboutMeContainer } from "../../containers/aboutMe";

export default function HomePage({ chagePath, setLoader }) {
  // A

  useLayoutEffect(() => {
    chagePath("home");
    setLoader(false);

    return () => chagePath(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeadComponent
        title="Carlos && Ponce"
        description="Hello!, This is my portfolio of the year 2022"
      />
      <HomeTemplate />
    </>
  );
}
