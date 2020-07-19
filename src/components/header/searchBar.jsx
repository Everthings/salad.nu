import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <form>
      <input
        autoFocus
        className="form-control search-bar mr-sm-2"
        type="search"
        placeholder="Search Courses"
        aria-label="Search"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
