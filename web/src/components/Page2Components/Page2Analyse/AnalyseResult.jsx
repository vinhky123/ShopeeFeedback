import { useEffect } from "react";
import styles from "./AnalyseResult.module.css";
import { fetchData } from "./api";
import { useState } from "react";
import SearchIcon from "./searchIcon";

function AnalyseResult({ url, setUrl, result, setResult }) {
  const [loading, setLoading] = useState(false);
  const [showModalButton, setShowModalButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [findWord, setFindWord] = useState("");
  const [resultComments, setResultComments] = useState([]);

  let commentsArray = [];
  let emotionArray = [];

  useEffect(() => {
    if (result) {
      setShowModalButton(true);
      console.log(topPositive);
      console.log(topNegative);
    }
  }, [result]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      if (findWord !== "") {
        const response = await fetchData(
          "http://127.0.0.1:5000/releventFeedbacks",
          { findWord }
        );
        console.log("Done!");
        setResultComments(response);
        let commentsArray = resultComments.map(
          (resultComments) => resultComments.comment
        );
        let emotionArray = resultComments.map(
          (resultComments) => resultComments.emotion
        );
        setSubmit(false);
      }
    };
    if (submit) {
      fetchDataFromApi();
    }
  }, [submit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleFindWord = (event) => {
    setFindWord(event.target.value);
  };

  let positive = result
    ? Math.round((result.positive / result.number_comment) * 100)
    : 0;
  let negative = result
    ? Math.round((result.negative / result.number_comment) * 100)
    : 0;
  let neutral = 100 - positive - negative;

  let topPositive = result ? result.top_positive_comments : [];
  let topNegative = result ? result.top_negative_comments : [];

  let graphStyle = result
    ? {
        background: `conic-gradient(
        #228B22 0% ${positive}%, 
        #CE2029 ${positive}% ${positive + negative}%, 
        #E5E4E2 ${positive + negative}% 100%
      )`,
      }
    : {};

  return (
    <div className={styles.analyseResult}>
      {showModalButton && (
        <div className={styles.buttonContainer}>
          <span>Done!</span>
          <button
            className={styles.showModalButton}
            onClick={() => setShowModal(true)}>
            Show result &uarr;
          </button>
        </div>
      )}
      <div
        className={`${styles.modal} ${showModal ? styles.show : ""}`}
        onClick={() => setShowModal(false)}>
        <div
          className={`${styles.innerBox} ${showModal ? styles.show : ""}`}
          onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <h1 className={styles.modalTitle}>Here's your result</h1>
          </div>
          <span className={styles.headerInnerbox}>Sentiment of feedbacks</span>
          <div className={styles.sentimentContainer}>
            <div className={styles.graph} style={graphStyle}></div>
            <div className={styles.legend}>
              <ul className={styles.list}>
                <li className={styles.legendItem}>
                  <span>
                    In the total {result.number_comment} feedbacks, there are:
                  </span>
                </li>
                <li className={styles.legendItem}>
                  <span className={styles.positiveLegend}> </span>
                  <span>
                    {" "}
                    {result.positive} positive feedbacks ({positive}%)
                  </span>
                </li>
                <li className={styles.legendItem}>
                  <span className={styles.negativeLegend}> </span>
                  <span>
                    {" "}
                    {result.negative} negative feedbacks ({negative}%)
                  </span>
                </li>
                <li className={styles.legendItem}>
                  <span className={styles.neutralLegend}> </span>
                  <span>And others (meaningless, empty, spam)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.topCommentsContainer}>
            <span className={styles.headerInnerbox}>Top comments</span>
            <div className={styles.feedbackTable}>
              <div>
                {topPositive &&
                  topPositive.map((feedback, index) => (
                    <div
                      key={index}
                      className={`${styles.feedbackItem} ${styles.positive}`}>
                      <p>{feedback}</p>
                    </div>
                  ))}
              </div>
              <div>
                {topNegative &&
                  topNegative.map((feedback, index) => (
                    <div
                      key={index}
                      className={`${styles.feedbackItem} ${styles.negative}`}>
                      <p>{feedback}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.releventCommentsContainer}>
            <span className={styles.headerInnerbox}>Relevent comments</span>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter some word"
                value={findWord}
                onChange={handleFindWord}
              />
              <SearchIcon />
              <button type="submit">Submit</button>
            </form>
            <div className={styles.topReleventCommentsContainer}>
              {resultComments &&
                resultComments.map((comment, index) => (
                  <div
                    key={index}
                    className={`${styles.comment} ${
                      comment.emotion === 1
                        ? styles.positiveComment
                        : styles.negativeComment
                    }`}>
                    <p>{comment.comment}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyseResult;
