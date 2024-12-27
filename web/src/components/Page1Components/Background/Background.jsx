import styles from "./Background.module.css";

function Background() {
  const goToPage2 = () => {
    var page2 = document.getElementById("Page2");
    if (page2) {
      var offsetTop = page2.offsetTop;
      var offsetToScroll = offsetTop - window.innerHeight * 0.1;
      window.scrollTo({ top: offsetToScroll, behavior: "smooth" });
    }
  };
  return (
    <div className={styles.bgImage}>
      <div className={styles.overlay}>
        <div className={`${styles.containerBox} container`}>
          <h1 className={styles.h1}>SHOPEE ANALYST DEMO</h1>
          <p>Let us help you analysting products</p>
          <a
            onClick={goToPage2}
            style={{ textDecoration: "none", color: "white" }}>
            <button className={styles.button}>
              <span>Start!</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Background;
