import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, clearSelectedCourse } from "../../store/slices/search";
import SearchBar from "./searchBar";

import { loadCourses, loadCoursesFromStore } from "../../store/slices/courses";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import { updateSearch } from "../../store/slices/search";

const Navbar = ({ logo }) => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);

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
    <nav className="navbar navbar-light my-navbar d-flex justify-content-start flex-row">
      {logo && (
        <div>
          <img src={logo} className="logo" alt="Logo" />
        </div>
      )}
      <div className="flex-fill">
        <SearchBar handleChange={handleChange} />
      </div>
    </nav>
  );
};

export default Navbar;
