import React from "react";

const CensusListItem = ({
  id,
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions,
  friends,
}) => {
  let professionsList;
  if (professions.length > 0) {
    professionsList = professions.map((el, idx) => <li key={idx}>{el}</li>);
  } else {
    professionsList = "Is unemployed";
  }
  return (
    <div className="census-list__item">
      <div className="census-list__item-cell id">{id}</div>
      <div className="census-list__item-cell name">{name}</div>
      <div className="census-list__item-cell thumbnail">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="census-list__item-cell age">{age}</div>
      <div className="census-list__item-cell weight">{weight}</div>
      <div className="census-list__item-cell height">{height}</div>
      <div className="census-list__item-cell hair_color">{hair_color}</div>
      <div className="census-list__item-cell professions">
        {professionsList}
      </div>
      <div className="census-list__item-cell friends">{id}</div>
    </div>
  );
};

export default CensusListItem;
