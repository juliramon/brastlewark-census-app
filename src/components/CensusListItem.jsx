import React from "react";

const CensusListItem = ({
  id,
  name,
  gender,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions,
  friends,
}) => {
  const roundNumberToNDecimals = (val, NDecimals) => {
    return val.toFixed(NDecimals);
  };

  let professionsList;
  if (professions.length > 0) {
    professionsList = professions.map((el, idx) => (
      <span key={idx}>{el}, </span>
    ));
  } else {
    professionsList = "Is unemployed";
  }

  let friendsList;
  if (friends.length > 0) {
    friendsList = friends.map((el, idx) => <span key={idx}>{el}, </span>);
  } else {
    friendsList = "Has no friends";
  }

  return (
    <div className="census-list__item">
      <div className="census-list__item-cell id">Id. {id}</div>
      <div className="census-list__item-cell thumbnail">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="census-list__item-cell name">{name}</div>
      <div className="census-list__item-cell gender">{gender}</div>
      <div className="census-list__item-cell age">{age}</div>
      <div className="census-list__item-cell weight">
        {roundNumberToNDecimals(weight, 2)}
      </div>
      <div className="census-list__item-cell height">
        {roundNumberToNDecimals(height, 2)}
      </div>
      <div className="census-list__item-cell hair-color">
        <span
          className="census-list__item-cell hair-color__indicator"
          style={{ backgroundColor: `${hair_color}` }}
        ></span>
        {hair_color}
      </div>
      <div className="census-list__item-cell professions">
        {professionsList}
      </div>
      <div className="census-list__item-cell friends">{friendsList}</div>
    </div>
  );
};

export default CensusListItem;
