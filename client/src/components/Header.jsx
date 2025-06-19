import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";
import "../styles/Header.css";

function Header() {
  const [userInfoDisplay, setUserInfoDisplay] = useState("none");
  const userInfoRef = useRef(null);
  const userImgRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && 
        !userInfoRef.current.contains(event.target) &&
        !userImgRef.current.contains(event.target)
      ) {
        setUserInfoDisplay("none")
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const profile = (name) => {
    return (
      <>
        <div className="profile">
          <img ref={userImgRef} src={user} alt="user" onMouseDown={() => {
            setUserInfoDisplay("flex");
          }} />
          <div ref={userInfoRef} className="user-info" style={{
            display: userInfoDisplay
          }}>
            {/* User Menu */}
          </div>
        </div>
      </>
    )
  }

  const loginBtns = () => {
    return (
      <>
        <div className="login-btns">
          <button className="login">Sign In</button>
          <button className="register">Sign Up</button>
        </div>
      </>
    )
  }

  const checkRegister = () => {
    const register = false; // cookie flag
    if (register) {
      return true;
    } else {
      return false;
    }
  }

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

        <div className="user-elements">
          {checkRegister() ? profile("akio") : loginBtns()}
        </div>
      </header>
    </>
  )
}

export default Header;