import React from "react";
import styles from "./Page1Components/Page1.module.css";
import NavigatorBar from "./Page1Components/Navigator/NavigatorBar";
import Background from "./Page1Components/Background/Background";

function Page1() {
  return (
    <div className={`${styles.Page1} container d-flex p-0`} id="Page1">
      <NavigatorBar />
      <Background />
    </div>
  );
}

export default Page1;
