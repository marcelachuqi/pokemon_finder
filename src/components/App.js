import React, { useState } from "react";
import PokeList from "./PokeList";
import pokeData from "../data/pokeData.json";
import "../stylesheets/style.css";
import logo from "../image/538px-International_Pokémon_logo.svg.png";

const App = () => {
  return (
    <>
      <h1>
        <img className="logo" src={logo} />
      </h1>
      <PokeList list={pokeData} />
    </>
  );
};

export default App;
