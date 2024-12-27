import styles from "./AnalyseBody.module.css";
import AnalyseForm from "./AnalyseForm";
import AnalyseResult from "./AnalyseResult";
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "./api";

function AnalyseBody() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onUrlChange = (callBaclUrl) => {
    setUrl(callBaclUrl);
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      if (url !== "") {
        setLoading(true);
        const response = await fetchData("http://127.0.0.1:5000/analyse", {
          url,
        });
        console.log("Done!");
        setResult(response);
        console.log(response);
        setLoading(false);
        setUrl("");
      }
    };

    fetchDataFromApi();
  }, [url]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className={styles.analyseBody}>
      <AnalyseForm onUrlChange={onUrlChange} loading={loading} />
      <AnalyseResult
        url={url}
        setUrl={setUrl}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default AnalyseBody;
