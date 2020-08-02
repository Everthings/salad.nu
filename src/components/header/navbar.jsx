import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  updateSearch,
  getSearch,
  clearSelectedCourse,
} from "./../../store/slices/interactions";
import { getTerm } from "./../../store/slices/term";
import {
  loadCourses,
  loadCoursesFromStore,
} from "./../../store/slices/courses";
import { getParts, getMaximumPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import SearchBar from "./searchBar";
import ExportButton from "./exportButton";

const Nav = styled.nav`
  background-color: #dcf0da;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const LinkText = styled.div`
  background-color: #dcf0da;
  color: #28a745;
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
    const length = getMaximumPartLength(getParts(value));

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
      <div>
        <ExportButton />
      </div>
      <div>
        <NavLink className="nav-item nav-link" to="/about">
          <LinkText>About</LinkText>
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
