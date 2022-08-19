import { useEffect } from "react";

export function useInPath(state) {
  useEffect(() => {
    state(window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
