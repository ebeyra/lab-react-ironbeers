import React from "react";
import { Link } from "react-router-dom";
import house from "../assets/house.png";

const Header = () => {
  return (
    <div>
      <header className="navbar bg-info p-4 justify-content-center">
        <Link to="/">
          <img src={house} alt="home" style={{ width: "50px" }} />
        </Link>
      </header>
    </div>
  );
};

export default Header;
