import NavigatorItem from "./NavigatorItem.jsx";
import styles from "./NavigatorBar.module.css";

function Navigator() {
  return (
    <div className="container">
      <ul className="navbar-nav me-0 d-flex justify-content-end">
        <NavigatorItem text="Home" isLast={false} />
        <NavigatorItem text="About" isLast={false} />
        <NavigatorItem text="Products" isLast={false} />
        <NavigatorItem text="Contact" isLast={true} />
      </ul>
    </div>
  );
}

export default Navigator;
