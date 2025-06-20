import "../styles/Home.css";
import cloudStorage from "../assets/cloud_storage.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-source">
          <h1>Need the best cloud drive for data storage?</h1>
          <p>We provide a free service for storing data and downloading it at any time.</p>
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