import React from "react";
import { useSelector } from "react-redux";
import { getSearch, getSelectedCourse } from "./../store/search";
import SectionList from "./sectionList";
import CourseList from "./courseList";
import { MIN_SEARCH_LENGTH } from "./../configs";

const Courses = () => {
  const search = useSelector(getSearch);
  const selectedCourse = useSelector(getSelectedCourse);

  const courseSelected = selectedCourse.id !== -1;

  return (
    <div className="salad-container-outer">
      <center className="salad-container-inner overflow-auto">
        {!courseSelected &&
          search.length < MIN_SEARCH_LENGTH &&
          search.length !== 0 && <p>Continue typing...</p>}

        {courseSelected && (
          <div>
            <h3 className="sections-list-header">
              <center>{selectedCourse.name}</center>
              <hr />
            </h3>
          </div>
        )}
        {search.length >= MIN_SEARCH_LENGTH &&
          (courseSelected ? <SectionList /> : <CourseList />)}
      </center>
    </div>
  );
};

export default Courses;
