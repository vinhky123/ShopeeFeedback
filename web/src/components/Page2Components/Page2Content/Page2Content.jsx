import classNames from "classnames";
import styles from "../Page2.module.css";
import Option from "./Page2OptionCards.jsx";

function Page2Content({ handlePageChange, currentPage }) {
  const showAnalyse = currentPage === "analyse";
  const showExplore = currentPage === "explore";

  return (
    <div
      className={`${styles.Page2Content} ${
        showAnalyse ? styles.showAnalyse : ""
      } ${showExplore ? styles.showExplore : ""}`}>
      <div className={`${styles.titleContainer} container m-0 p-0`}>
        <h1 className={styles.title}>Let's start</h1>
        <p>Choose your service:</p>
      </div>
      <div className={`${styles.options} container`}>
        <div className={`${styles.option}`}>
          <Option
            name="analyse"
            title="ANALYSE"
            image="src/assets/option1Page2.png"
            description="Analyse your product's feedback on Shopee"
            button="ANALYSE"
            handlePageChange={handlePageChange}
            arrow="left"
          />
        </div>
        <div className={`${styles.option}`}>
          <Option
            name="explore"
            title="EXPLORE"
            image="src/assets/option2Page2.png"
            description="Explore more products that have been analysised"
            button="EXPLORE"
            handlePageChange={handlePageChange}
            arrow="right"
          />
        </div>
      </div>
      {/*<Page2Form onUrlChange={onUrlChange} />*/}
    </div>
  );
}

export default Page2Content;
