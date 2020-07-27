import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, clearSelectedCourse } from "./../../store/slices/search";
import { getTerm } from "./../../store/slices/term";
import {
  loadCourses,
  loadCoursesFromStore,
} from "./../../store/slices/courses";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import { updateSearch } from "./../../store/slices/search";
import styled from "styled-components";
import SearchBar from "./searchBar";

const Nav = styled.nav`
  background-color: #dcf0da;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const Logo = styled.img`
  width: 8rem;
  margin-left: 1rem;
  margin-right: 2rem;
`;

const Navbar = ({ logo }) => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);
  const term = useSelector(getTerm);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    dispatch(updateSearch(value));
    dispatch(clearSelectedCourse());
    if (value.length >= MIN_SEARCH_LENGTH) {
      const loadAction =
        value.length > search.length && value.length !== MIN_SEARCH_LENGTH
          ? loadCoursesFromStore(value)
          : loadCourses(value);
      dispatch(loadAction);
    }
  };

  return (
    <Nav className="navbar navbar-light">
      {logo && (
        <div>
          <Logo src={logo} alt="Logo" />
        </div>
      )}
      <div className="flex-fill">
        <SearchBar term={term} search={search} handleChange={handleChange} />
      </div>
    </Nav>
  );
};

export default Navbar;
