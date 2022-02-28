import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = React.useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((responseFromApi) => {
        setRandomBeer(responseFromApi?.data);
      });
  }, []);

  console.log(randomBeer);

  return (
    <div>
      <Header />
      <img src={randomBeer.image_url} style={{ width: "50px" }} />
      <br />
      {randomBeer.name}
      <br />
      {randomBeer.tagline}
      <br />
      {randomBeer.first_brewed}
      <br />
      {randomBeer.attenuation_level}
      <br />
      {randomBeer.description}
      <br />
      {randomBeer.contributed_by}
      <br />
    </div>
  );
};

export default RandomBeer;
