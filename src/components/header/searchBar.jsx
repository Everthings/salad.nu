import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSearch,
  getSearch,
  clearSelectedCourse,
} from "./../../store/slices/interactions";
import {
  loadCourses,
  loadCoursesFromStore,
} from "./../../store/slices/courses";
import { getTerm } from "./../../store/slices/term";
import { getMaximumStrPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";

const Input = styled.input`
  height: 3rem;
  background-color: ${({ theme }) => `${theme.colors.searchBar}`};
  color: ${({ theme }) => `${theme.colors.searchText}`};
  border: ${({ theme }) => `3px solid ${theme.colors.searchBarBorder}`};
`;

const SearchBar = () => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);
  const term = useSelector(getTerm);

  const termName = term ? `(${term.name})` : "";

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    const length = getMaximumStrPartLength(value);

    dispatch(updateSearch(value));
    dispatch(clearSelectedCourse());
    if (length >= MIN_SEARCH_LENGTH) {
      const loadAction =
        value.includes(search) && length !== MIN_SEARCH_LENGTH
          ? loadCoursesFromStore(value)
          : loadCourses(value);
      dispatch(loadAction);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mr-3" onSubmit={handleSubmit}>
      <Input
        autoFocus
        className="form-control"
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
