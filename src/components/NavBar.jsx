import React from "react";

const NavBar = ({ searchQuery, handleChange }) => {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar__col">
        <span>Brastlewark Census</span>
      </div>
      <div className="navigation-bar__col search-bar">
        <form>
          <input
            type="text"
            placeholder="Search gnomes by name..."
            className="form-control"
            onChange={handleChange}
            value={searchQuery}
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
