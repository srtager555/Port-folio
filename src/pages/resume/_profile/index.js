import { useEffect, useLayoutEffect } from "react";

export function profile({ handleClickChangePage, setLoader, chagePath }) {
  // setLoader(false);

  useLayoutEffect(() => {
    chagePath("resume");

    return () => chagePath(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => setLoader(true), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>profile</div>;
}
