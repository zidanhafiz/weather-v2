import { Link } from "react-router-dom";
import "../css-components/backNavigation.css";

function BackNavigation({ link }) {
  return (
    <Link className="link back-navigation" to={link}>
      <p>
        <i
          className="fa-solid fa-chevron-left"
          style={{ color: "#ffffff" }}
        ></i>
      </p>
      <p>Kembali</p>
    </Link>
  );
}

export default BackNavigation;
