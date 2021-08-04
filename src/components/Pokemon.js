import React from "react";
import "../stylesheets/style.css";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.type.map((kind) => {
      return <li key={toString()}>{kind}</li>;
    });
  };

  return (
    <div className="divClass">
      <ul>
        {" "}
        <li>
          <img className="pokeClass" src={props.src} />{" "}
        </li>{" "}
      </ul>
      <ul>
        <li>
          <h1 className="titleClass"> {props.name} </h1>{" "}
        </li>{" "}
      </ul>
      <ul className="typeClass">
        {" "}
        <li>{renderTypes()} </li>{" "}
      </ul>
    </div>
  );
};

export default Pokemon;
