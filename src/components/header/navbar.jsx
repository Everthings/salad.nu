import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import {
  updateSearch,
  getSearch,
  clearSelectedCourse,
} from "./../../store/slices/interactions";
import { toggleTheme, getTheme } from "./../../store/slices/theme";
import { getTerm } from "./../../store/slices/term";
import {
  loadCourses,
  loadCoursesFromStore,
} from "./../../store/slices/courses";
import { getParts, getMaximumPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import SearchBar from "./searchBar";
import ExportButton from "./exportButton";
import Toggle from "react-toggle";
import salad_logo from "./../../images/cover_no_background.png";

const Nav = styled.nav`
  background-color: ${({ theme }) => `${theme.colors.headerBackground}`};
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkText = styled.div`
  color: ${({ theme }) => `${theme.colors.headerButton}`};
`;

const Logo = styled.img`
  width: 8rem;
  margin-left: 1rem;
  margin-right: 2rem;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);
  const term = useSelector(getTerm);
  const theme = useSelector(getTheme);

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

  const handleToggle = () => {
    dispatch(toggleTheme(theme));
  };

  const checked = theme === "green";

  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <Nav className="navbar navbar-light">
      {bigScreen && (
        <div>
          <Logo src={salad_logo} alt="Logo" />
        </div>
      )}
      <div className="flex-fill">
        <SearchBar term={term} search={search} handleChange={handleChange} />
      </div>
      {bigScreen && (
        <div>
          <ExportButton />
        </div>
      )}
      {bigScreen && (
        <div>
          <NavLink className="nav-item nav-link" to="/about">
            <LinkText>About</LinkText>
          </NavLink>
        </div>
      )}
      <Toggle
        checked={checked}
        icons={{
          checked: null,
          unchecked: null,
        }}
        onChange={handleToggle}
      />
    </Nav>
  );
};

export default Navbar;
