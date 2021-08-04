import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const PokeItems = props.list.map((item) => {
    return (
      <>
        <Pokemon name={item.name} src={item.url} type={item.types} />
      </>
    );
  });
  return <div>{PokeItems}</div>;
};

export default PokeList;
