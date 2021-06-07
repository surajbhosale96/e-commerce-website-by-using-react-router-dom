import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home-heading">Welcome to CosmeticsBazaar!</h1>
      <Link to="/products">
        <button className="home-btn">Click here to see the products</button>
      </Link>
    </div>
  );
}

export default Home;
