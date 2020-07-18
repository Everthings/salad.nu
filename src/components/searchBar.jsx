import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, updateSearch } from "./../store/search";
import { loadCourses } from "../store/courses";
import { MIN_SEARCH_LENGTH } from "./../configs";

const SearchBar = () => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);

  return (
    <form>
      <input
        autoFocus
        className="form-control search-bar mr-sm-2"
        type="search"
        placeholder="Search Courses"
        aria-label="Search"
        value={search}
        onChange={(e) => {
          dispatch(updateSearch(e.currentTarget.value));
          if (e.currentTarget.value.length >= MIN_SEARCH_LENGTH)
            dispatch(loadCourses(e.currentTarget.value));
        }}
      />
    </form>
  );
};

export default SearchBar;
