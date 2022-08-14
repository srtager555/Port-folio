import { useEffect } from "react";

export function profile({ handleClickChangePage, setLoader }) {
  // setLoader(false);

  useEffect(() => {
    console.log("hola?");
    setTimeout(() => setLoader(true), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>profile</div>;
}
