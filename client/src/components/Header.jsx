import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-main">
        <div className="navigation-elements">
          <Link 
            to={"/"}
          >
            <h2>Home</h2>
            <div className="marker"></div>
          </Link>
          <Link 
            to={"/uploads"}
          >
            <h2>Uploads</h2>
            <div className="marker"></div>
          </Link>
        </div>

        <div className="user-elements"></div>
      </header>
    </>
  )
}

export default Header;