import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Beers = (props) => {
  let listOfBeers = props.beerList.map((beerItem) => {
    return (
      <div>
        <img src={beerItem.image_url} style={{ width: "50px" }} />
        <br />
        <Link to={`/beers/${beerItem._id}`}>{beerItem.name}</Link>
        <br />
        {beerItem.tagline}
        <br />
        {beerItem.contributed_by}
        <br />
      </div>
    );
  });
  return (
    <div>
      <Header />
      {listOfBeers}
    </div>
  );
};

export default Beers;
