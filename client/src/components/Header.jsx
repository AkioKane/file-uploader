import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";
import "../styles/Header.css";

function Header(cookie) {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfoDisplay, setUserInfoDisplay] = useState("none");
  const [opacityUserInfo, setOpacityUserInfo] = useState("1");
  const userInfoRef = useRef(null);
  const userImgRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && 
        !userInfoRef.current.contains(event.target) &&
        !userImgRef.current.contains(event.target)
      ) {
        setOpacityUserInfo("0")
        setTimeout(() => {
          setUserInfoDisplay("none")
        }, 200)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [])

  const profile = () => {
    const data = cookie.cookie.user[0];

    return (
      <>
        <div className="profile">
          <img ref={userImgRef} src={user} alt="user" onMouseDown={() => {
            setUserInfoDisplay("flex");
            setTimeout(() => {
              setOpacityUserInfo("1");
            }, 100);
          }} />
          <div ref={userInfoRef} className="user-info" style={{
            display: userInfoDisplay,
            opacity: opacityUserInfo
          }}>
            <h4>{data.name}</h4>
            <div className="actions-user">
              <Link to={"/uploads"}>Uploads</Link>
              <Link to={"/log-out"}>Log Out</Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  const loginBtns = () => {
    return (
      <>
        <div className="login-btns">
          <Link
            to={"/sign-in"}
          >
            <button className="login">Sign In</button>
          </Link>
          <Link
            to={"/sign-up"}
          >
            <button className="register">Sign Up</button>
          </Link>
        </div>
      </>
    )
  }

  const checkRegister = () => {
    if (isLoading) return null;

    if (cookie?.cookie) {
      const register = cookie.cookie.authenticated;
      if (register) {
        return true;
      } else {
        return false;
      }
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
          {
            isLoading ? (
              <div className="loading-animation">
                <span className="loader"></span>
              </div>
            ) : (
              checkRegister() ? profile() : loginBtns()
            )
          }
        </div>
      </header>
    </>
  )
}

export default Header;