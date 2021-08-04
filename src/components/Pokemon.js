import React from "react";
import "../stylesheets/style.css";
import pokeball from "../image/pngwing.com.png";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.type.map((kind) => {
      return <li key={toString()}>{kind}</li>;
    });
  };

  return (
    <div>
      <img href="#" className="pokeball btn-neon" src={pokeball} />
      <ul className="pokeList">
        <li>
          <h1 className="pokeName"> {props.name} </h1>
        </li>
      </ul>{" "}
      <img className="pokeImg" src={props.src} />
      <ul className="pokeList">
        <li></li>
      </ul>
      <ul className="pokeList">
        <li className="pokeType">{renderTypes()} </li>
      </ul>
    </div>
  );
};

export default Pokemon;
