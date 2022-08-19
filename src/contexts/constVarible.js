import { useState, useEffect } from "react";

// const TABLET_SIZE = 1024;
export const NAVBAR_MOBILE_SIZE = 510;
const MOBILE_SIZE = 610;

export function useConstVariable() {
  const [IS_MOBILE, SET_IS_MOBILE] = useState(false);
  const [IS_MOBILE_DEVICE, SET_IS_MOBILE_DEVICE] = useState(false);
  const MOBILE_DEVICE_SIZE = 1024;

  let IS_MOBILE__ = false;
  let IS_MOBILE_DEVICE__ = false;

  function IS_MOBILE_DEVICE_fn() {
    IS_MOBILE_DEVICE__ = window.innerWidth < MOBILE_SIZE;

    return IS_MOBILE_DEVICE__;
  }

  function IS_MOBILE_fn() {
    IS_MOBILE__ = window.innerWidth < MOBILE_DEVICE_SIZE;

    return IS_MOBILE__;
  }

  useEffect(() => {
    SET_IS_MOBILE(IS_MOBILE_fn());
    SET_IS_MOBILE_DEVICE(IS_MOBILE_DEVICE_fn());

    window.addEventListener("resize", () => SET_IS_MOBILE(IS_MOBILE_fn()));
    window.addEventListener("resize", () =>
      SET_IS_MOBILE_DEVICE(IS_MOBILE_DEVICE_fn())
    );
    return () => {
      window.removeEventListener("resize", () => SET_IS_MOBILE(IS_MOBILE_fn()));
      window.removeEventListener("resize", () =>
        SET_IS_MOBILE_DEVICE(IS_MOBILE_DEVICE_fn())
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    IS_MOBILE,
    IS_MOBILE_DEVICE,
  };
}
