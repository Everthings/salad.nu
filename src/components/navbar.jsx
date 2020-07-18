import React from "react";
import SearchBar from "./searchBar";

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar navbar-light my-navbar d-flex justify-content-start flex-row">
      <div className="p-1">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="flex-fill">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
