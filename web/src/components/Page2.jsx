import React, { useState } from "react";
import styles from "./Page2Components/Page2.module.css";
import Page2Content from "./Page2Components/Page2Content/Page2Content.jsx";
import Page2Explore from "./Page2Components/Page2Explore/Page2Explore.jsx";
import Page2Analyse from "./Page2Components/Page2Analyse/Page2Analyse.jsx";

function Page2() {
  const [currentPage, setCurrentPage] = useState("content");

  // Function to handle navigation to different pages
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handlePageChange = (page) => {
    console.log(page);
    goToPage(page);
  };

  return (
    <div className={`${styles.Page2} container d-flex p-0`} id="Page2">
      <Page2Content
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />

      <Page2Explore
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />

      <Page2Analyse
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Page2;
