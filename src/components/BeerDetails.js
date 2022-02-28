import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

const BeerDetails = (props) => {
  const { beerId } = useParams();

  let foundBeer = props.beerList.find((beerItem) => {
    return beerItem._id === beerId;
  });

  return (
    <div>
      <Header />
      <img src={foundBeer.image_url} style={{ width: "50px" }} />
      <br />
      {foundBeer.name}
      <br />
      {foundBeer.tagline}
      <br />
      {foundBeer.contributed_by}
      <br />
    </div>
  );
};

export default BeerDetails;
