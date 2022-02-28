import axios from "axios";
import React from "react";
import Header from "./Header";

const NewBeer = () => {
  const [name, setName] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [first_brewed, setFirstBrewed] = React.useState("");
  const [brewers_tips, setBrewersTips] = React.useState("");
  const [attenuation_level, setAttenuationLevel] = React.useState(0);
  const [contributed_by, setContributedBy] = React.useState("");

  const addBeer = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: first_brewed,
        brewers_tips: brewers_tips,
        attenuation_level: attenuation_level,
        contributed_by: contributed_by,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={addBeer}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <br />
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed</label>
        <br />
        <input
          type="text"
          value={first_brewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <br />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <br />
        <input
          type="text"
          value={brewers_tips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <br />
        <input
          type="number"
          value={attenuation_level}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        <br />
        <label htmlFor="contributed_by">Contributed By</label>
        <br />
        <input
          type="text"
          value={contributed_by}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <br />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default NewBeer;
