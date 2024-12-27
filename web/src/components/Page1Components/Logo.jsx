import styles from "./Navigator/NavigatorBar.module.css";

function Logo() {
  const LogoSrc = "src/assets/logo.png";

  return (
    <a className={`${styles.navBarBrand} navbar-brand ms-3`}>
      <img
        src={LogoSrc}
        alt="Avatar Logo"
        style={{ width: "50px" }}
        className="rounded-pill"></img>
    </a>
  );
}

export default Logo;
