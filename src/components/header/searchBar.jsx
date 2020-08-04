import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 3rem;
  background-color: ${({ theme }) => `${theme.colors.searchBar}`};
  color: ${({ theme }) => `${theme.colors.searchText}`};
  border: ${({ theme }) => `3px solid ${theme.colors.searchBarBorder}`};
`;

const SearchBar = ({ term, search, handleChange }) => {
  const termName = term ? `(${term.name})` : "";

  return (
    <form>
      <Input
        autoFocus
        className="form-control mr-sm-2"
        type="search"
        placeholder={`Search Courses ${termName}`}
        aria-label="Search"
        value={search}
        onChange={handleChange}
        data-testid="search-bar"
      />
    </form>
  );
};

export default React.memo(SearchBar);
