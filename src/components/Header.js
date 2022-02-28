import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
};

export default Header;
