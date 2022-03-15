import "../styles/globals.css";
import React, { useState, useEffect, useLocation } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import { Provider } from "../components/Context";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/scss/new_section_inner.scss";
import "../styles/scss/popup.scss";
import "../styles/globals.css";
import "../styles/scss/style.scss";
import "../styles/index.css";
import "../styles/FooterInner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

NProgress.configure({
  easing: "ease",
  speed: 500,
});
let timeOut;

if (typeof window !== "undefined") {
  if (window.location.pathname === "/") {
    require("../styles/MainStyles.css");
  } else if (
    window.location.pathname.includes("communication-design-pg-diploma")
  ) {
    require("../styles/CommunicationStyle.css");
  } else if (
    window.location.pathname.includes("digital-brand-communication-course")
  ) {
    require("../styles/DigitalStyle.css");
  } else if (window.location.pathname.includes("graphic-design-course")) {
    require("../styles/GraphicStyle.css");
  } else if (window.location.pathname.includes("interior-design-course")) {
    require("../styles/InteriorStyle.css");
  } else if (
    window.location.pathname.includes("motion-graphics-animation-course")
  ) {
    require("../styles/MotionStyle.css");
  } else if (window.location.pathname.includes("user-experience-design-course")) {
    require("../styles/UserStyle.css");
  } else {
    require("../styles/MainStyles.css");
  }
}

var $;
$ = require("jquery");

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  function openModal(val) {
    setShow(val);
  }

  const router = useRouter()


  const handleShow = true;

  const tagManagerArgs = {
    gtmId: "GTM-W4VHW7X",
  };

  const [initialized, setInitialized] = useState(false);


  useEffect(() => {

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeStart", (url) => {
      console.log(`Loading: ${url}`);
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        console.log("Secure Connection Request");
        window.location.href = url;
      }, 3000);
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      clearTimeout(timeOut);
      handleRouteChange;
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
      clearTimeout(timeOut);
    });
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    ReactGA.initialize("UA-215973243-1");

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const contextValue = {
    data: show,
    handlecheck: openModal,
  };

  return (
    <Provider value={contextValue}>
      <Head>
        <title>andAcademy</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="bVxKIYCUplLGccRoAFuvMh6gT_pLltDx-Xl-jJ3umME"
        />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <Component {...contextValue} />
    </Provider>
  );
}

export default MyApp;
