import React, { useState } from "react";
import PokeList from "./PokeList";
import pokeData from "../data/pokeData.json";
import "../stylesheets/style.css";

const App = () => {
  return (
    <>
      <h1>Mi lista de Pokemones</h1>
      <PokeList list={pokeData} />
    </>
  );
};

export default App;
