import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <h2>
            Cosmetics<span>Bazaar</span>
          </h2>
        </Link>
      </div>

      <ul>
        <li className="navlinks">
          <Link to="/"> Home</Link>
        </li>
        <li className="navlinks">
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
