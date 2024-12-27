import PropTypes from "prop-types";
import styles from "./NavigatorBar.module.css";

function NavigatorItem(Props) {
  const itemName = Props.text;
  const isLast = Props.isLast;
  const liStyles = !isLast
    ? { borderRight: `1px solid rgba(128, 128, 128, 0.445)` }
    : {};

  return (
    <li className={`${styles.navigatorItem} nav-item`} style={liStyles}>
      <a className={`${styles.navigatorLink} nav-link`} href="">
        {itemName}
      </a>
    </li>
  );
}

NavigatorItem.propTypes = {
  text: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
};

export default NavigatorItem;
