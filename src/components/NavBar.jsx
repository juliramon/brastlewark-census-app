import React from "react";

const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar__col">
        <span>Brasatlewark Census</span>
      </div>
      <div className="navigation-bar__col search-bar">
        <form>
          <input
            type="text"
            placeholder="Search gnomes..."
            className="form-control"
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
