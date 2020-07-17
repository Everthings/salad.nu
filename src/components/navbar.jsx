import React from "react";

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar navbar-light my-navbar d-flex justify-content-start flex-row">
      <div className="p-1">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="flex-fill">
        <form>
          <input
            className="form-control search-bar mr-sm-2"
            type="search"
            placeholder="Search Courses"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
