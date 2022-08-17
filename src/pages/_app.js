// import App from 'next/app'
import { useEffect, useState } from "react";

import { Navbar } from "@common/navbar";
import { Background } from "@components/background";
import { LoadScreen } from "@components/loadScreen";
// import { useInPath } from "../hooks/useInPath";

import "@sass/global.css";
import styles from "@sass/OpacityContainer.module.sass";
import styles2 from "@sass/NavbarHome.module.sass";
// import { set } from "animejs";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const [loader, setLoader] = useState(false);
  const [inPath, setInPath] = useState("");

  function handleResetScroll() {
    window.scrollTo(0, 0);
  }

  function HandleChangePath(place) {
    setInPath(place);
  }

  pageProps = {
    setLoader,
    chagePath: (place) => HandleChangePath(place),
  };
  // useEffect(() => {
  //    setLoader(true);
  // }, []);

  //This guy reset any scroll when you change the route(The content of the page)
  useEffect(() => {
    //This guy probaly is not the best way to do this, but it works
    handleResetScroll();
    // setinCV(false);
  });

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <LoadScreen loaded={loader} inPath={inPath} />
      <Background inPath={inPath} />
      <div
        className={`${styles["opacity-container"]} ${
          loader ? styles.active : ""
        }`}
      >
        <Navbar inPath={inPath} handleResetScroll={handleResetScroll} />
        <div className={styles2["container-content"]}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
