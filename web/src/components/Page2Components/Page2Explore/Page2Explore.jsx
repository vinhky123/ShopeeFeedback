import styles from "../Page2.module.css";
import classNames from "classnames";
import BackToContentButton from "../BackToContentButton.jsx";
import styless from "./Page2Explore.module.css";

function Page2Explore({ handlePageChange, currentPage }) {
  const showAnalyse = currentPage === "analyse";
  const showContent = currentPage === "content";
  return (
    <div
      className={`${styles.Page2Explore} ${
        showAnalyse ? styles.showAnalyse : ""
      } ${showContent ? styles.showContent : ""}`}>
      <BackToContentButton handlePageChange={handlePageChange} />
      <h1>THIS IS EXPLORE PAGE</h1>
    </div>
  );
}

export default Page2Explore;
