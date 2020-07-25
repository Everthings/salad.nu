import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 3rem;
  background-color: #e5fbe4;
  border: 3px solid #aed19e;
  color: #000000;
`;

const SearchBar = ({ search, handleChange }) => {
  return (
    <form>
      <Input
        autoFocus
        className="form-control mr-sm-2"
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
