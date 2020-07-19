import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "./../../store/search";
import SearchBar from "./searchBar";
import salad_logo from "./../../images/cover_green.png";
import { loadCourses, loadCoursesFromStore } from "./../../store/courses";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import { updateSearch } from "./../../store/search";

const Navbar = () => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    dispatch(updateSearch(value));

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
      <div className="p-1">
        <img src={salad_logo} className="logo" alt="Logo" />
      </div>
      <div className="flex-fill">
        <SearchBar handleChange={handleChange} />
      </div>
    </nav>
  );
};

export default Navbar;
