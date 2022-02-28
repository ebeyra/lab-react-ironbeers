import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  const [beerList, setBeerList] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((responseFromApi) => {
        setBeerList(responseFromApi?.data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={<Beers beerList={beerList} setBeerList={setBeerList} />}
        />
        <Route
          path="/beers/:beerId"
          element={<BeerDetails beerList={beerList} />}
        />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
