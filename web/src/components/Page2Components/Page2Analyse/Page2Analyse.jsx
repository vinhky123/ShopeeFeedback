import styles from "../Page2.module.css";
import classNames from "classnames";
import styleAnalyse from "./Page2Analyse.module.css";
import AnalyseBody from "./AnalyseBody";
import BackToContentButton from "../BackToContentButton";

function Page2Analyse({ handlePageChange, currentPage }) {
  const showContent = currentPage === "content";
  const showExplore = currentPage === "explore";
  return (
    <div
      className={`${styles.Page2Analyse} ${
        showContent ? styles.showContent : ""
      } ${showExplore ? styles.showExplore : ""}`}>
      <BackToContentButton handlePageChange={handlePageChange} />
      <div className={`${styleAnalyse.titleContainer} container`}>
        <h1 className={styleAnalyse.title}>Analyse product</h1>
      </div>
      <AnalyseBody />
    </div>
  );
}

export default Page2Analyse;
