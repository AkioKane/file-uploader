import "../styles/Home.css";
import cloudStorage from "../assets/cloud_storage.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-source">
          <h1>Lorem ipsum dolor sit amet consectetur dolores ex reiciendis.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus amet at obcaecati fugit deleniti ipsum!</p>
          <Link>
            <button className="start">Get Started!</button>
          </Link>
        </div>
        <img src={cloudStorage} alt="Cloud Storage" />
      </div>
    </>
  )
}

export default Home;