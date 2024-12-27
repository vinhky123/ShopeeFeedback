import { useState } from "react";
import styles from "./AnalyseForm.module.css";

function AnalyseForm({ onUrlChange, loading }) {
  const [url, setUrl] = useState("");
  

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = event.target.urlInput.value;
    setUrl(url);
    onUrlChange(url);
  };

  return (
    <div className={styles.analyseForm}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit} id="form">
          <p className={styles.formSubTitle}>Input your url:</p>
          <div className={styles.fieldContainer}>
            <input
              id="urlInput"
              placeholder=""
              className={styles.input}
              required
              onChange={handleUrlChange}
              value={url}
              type="text"
            />
            <div className={styles.placeholder}>This service is unavailable at the moment</div>
          </div>
          <button className={styles.btn} type="submit" disabled={loading || true}>
            <label className={styles.btnLabel} htmlFor="urlInput">
              {loading ? "Not working" : "Submit"}
            </label>
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              <></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AnalyseForm;
