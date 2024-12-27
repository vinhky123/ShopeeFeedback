import Logo from "../Logo.jsx";
import Navigator from "./Navigator.jsx";
import styles from "./NavigatorBar.module.css";

function NavigatorBar() {
  return (
    <nav
      className={`${styles.navigator} container navbar navbar-expand p-0 fixed-top`}>
      <div className={`container-fluid`}>
        <Logo />
        <Navigator />
      </div>
    </nav>
  );
}

export default NavigatorBar;
