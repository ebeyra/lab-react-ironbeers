import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <div>
      <nav className="navbar">
          <Link to="/beers">Beers</Link>
          <Link to="/random-beer">Random Beer</Link>
          <Link to="new-beer">New Beer</Link>
      </nav>
  </div>;
};

export default Home;
