import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Beers = (props) => {
  let listOfBeers = props.beerList.map((beerItem) => {
    return (
      <div className="card mb-3" style={{maxWidth: "500px"}}>
        <div className="row g-0">
          <div className="col-md-4 picContainer">
            <img
              src={beerItem.image_url}
              className="img-fluid rounded-start beerpic"
              alt="beer"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title h2">
                <Link to={`/beers/${beerItem._id}`} className="text-decoration-none text-dark">{beerItem.name}</Link>
              </h5>
              <p className="card-text text-muted">{beerItem.tagline}</p>
              <p className="card-text">
                <small>
                  <span className="h6">Created By:</span> {beerItem.contributed_by}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <div className="container mt-4">{listOfBeers}</div>
    </div>
  );
};

export default Beers;
