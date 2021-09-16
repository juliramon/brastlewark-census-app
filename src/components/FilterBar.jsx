import React from "react";

const FilterBar = ({}) => {
  return (
    <div className="filter__bar">
      <div className="filter-bar__item id">Id</div>
      <div className="filter-bar__item thumbnail">Thumbnail</div>
      <div className="filter-bar__item name">Name</div>
      <div className="filter-bar__item gender">Gender</div>
      <div className="filter-bar__item age">Age</div>
      <div className="filter-bar__item weight">Weight</div>
      <div className="filter-bar__item height">Height</div>
      <div className="filter-bar__item hair-color">Hair color</div>
      <div className="filter-bar__item professions">Professions</div>
      <div className="filter-bar__item friends">Friends</div>
    </div>
  );
};

export default FilterBar;
