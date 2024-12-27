import Explore from "./Explore";
import Analyst from "./Analyst";
import styles from "./Page3Content.module.css";

function Page3Content({ option }) {
  console.log(option);

  if (!option) {
    return <div className={styles.Page3}></div>;
  } else if (option == "Explore product") {
    return (
      <div className={styles.Page3}>
        <Explore />
      </div>
    );
  } else {
    return (
      <div>
        <Analyst />
      </div>
    );
  }
}

export default Page3Content;
