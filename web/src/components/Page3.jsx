import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import DividePageLine from "./Page3Components/DividePageLine";
import Page3Content from "./Page3Components/Page3Content";
import styles from "./Page3Components/Page3Content.module.css";

function Page3() {
  let styless = {};
  const pageRef = useRef(null);
  if (!option) {
    styless = {
      height: `0vh`,
      opacity: `0`,
    };
  } else {
    styless = {
      height: `0vh`,
      opacity: `1`,
    };
  }

  const goToPage3 = () => {
    var page3 = document.getElementById("Page3");
    if (page3) {
      setTimeout(function () {
        page3.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  useEffect(() => {
    if (option && pageRef.current) {
      goToPage3();
    }
  }, [option]);

  return (
    <div
      className={`${styles.Page3} container d-flex flex-column p-0`}
      id="Page3"
      style={styless}>
      <DividePageLine />
      <Page3Content option={option} />
    </div>
  );
}

export default Page3;
