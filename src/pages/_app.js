// import App from 'next/app'
import { useEffect, useState } from "react";

// import { HomePage } from "../pages/home";
// import { ProjectPage } from "../pages/projects";
// import { NotMatch } from "../pages/NotMatch";
// import { CV } from "../pages/cv";
// import { cvpdf as Cvpdf } from "../pages/cvpdf";

import { Navbar } from "../components/navbar";
import { Background } from "../components/background";
import { LoadScreen } from "../components/loadScreen";
// import { useInPath } from "../hooks/useInPath";

import "../styles/OpacityContainer.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);
  const [inPath, setInPath] = useState("");

  pageProps = {
    setLoader,
    chagePath: (place) => HandleChangePath(place),
  };

  function handleResetScroll() {
    window.scrollTo(0, 0);
  }

  function HandleChangePath(place) {
    setInPath(place);
  }

  // useEffect(() => {
  //    setLoader(true);
  // }, []);

  //This guy reset any scroll when you change the route(The content of the page)
  useEffect(() => {
    //This guy probaly is not the best way to do this, but it works
    handleResetScroll();
    // setinCV(false);
  });

  return (
    <>
      <LoadScreen loaded={loader} inPath={inPath} />
      <Background inPath={inPath} />
      <div className={`opacity-container ${loader ? "active" : ""}`}>
        <Navbar inPath={inPath} handleResetScroll={handleResetScroll} />
        <div className="container-content">
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
