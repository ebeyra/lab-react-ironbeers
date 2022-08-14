import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

// <Link to="/random-beer">Random Beer</Link>
// <Link to="new-beer">New Beer</Link>

const Home = () => {
  return (
    <div className="container homecont">
      <div className="card homecard">
        <img src={beers} class="card-img-top" alt="background" />
        <div className="card-body">
          <h5 className="card-title">
            <Link to="/beers">All Beers</Link>
          </h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            corporis obcaecati voluptate fuga molestiae distinctio.
          </p>
        </div>
        <div className="card homecard">
          <img src={randomBeer} class="card-img-top" alt="background" />
          <div className="card-body">
            <h5 className="card-title">
              <Link to="/random-beer">Random Beers</Link>
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              corporis obcaecati voluptate fuga molestiae distinctio.
            </p>
          </div>
        </div>
        <div className="card homecard">
          <img src={newBeer} class="card-img-top" alt="background" />
          <div className="card-body">
            <h5 className="card-title">
              <Link to="/new-beer">Add New Beers</Link>
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              corporis obcaecati voluptate fuga molestiae distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
