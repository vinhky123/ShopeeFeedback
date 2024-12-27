import styles from "../Page2.module.css";
import styles_button from "./Page2OptionCards.module.css";
import PropTypes from "prop-types";

function Option(props) {
  const name = props.name;
  const title = props.title;
  const image = props.image;
  const description = props.description;
  const button = props.button;
  const handlePageChange = props.handlePageChange;
  const arrow = props.arrow;

  let transform = "";
  arrow === "left"
    ? (transform = "scale(-1, 1) translate(-20, 0)")
    : (transform = "");

  return (
    <div className={styles.card}>
      <h4 className={styles.titleOption}>{title}</h4>
      <p className={styles.text}>{description}</p>
      <button
        className={styles_button.animatedButton}
        onClick={() => handlePageChange(name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            arrow === "left" ? styles_button.arr2Left : styles_button.arr2Right
          }
          viewBox="0 0 24 24">
          <path
            transform={transform}
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span
          className={`${styles_button.text} ${
            arrow === "left" ? styles_button.textLeft : styles_button.textRight
          }`}>
          {button}
        </span>
        <span className={styles_button.circle}></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            arrow === "left" ? styles_button.arr1Left : styles_button.arr1Right
          }
          viewBox="0 0 24 24">
          <path
            transform={transform}
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  );
}

Option.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
};

export default Option;
