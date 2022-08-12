import { useEffect } from "react";

export function profile({ handleClickChangePage, setLoader }) {
  useEffect(() => {
    setLoader(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>profile</div>;
}
