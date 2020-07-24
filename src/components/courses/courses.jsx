import React from "react";
import { useSelector } from "react-redux";
import { getSearch, getSelectedCourse } from "../../store/slices/search";
import SectionList from "./sectionList";
import CourseList from "./courseList";

const Courses = () => {
  const search = useSelector(getSearch);
  const selectedCourse = useSelector(getSelectedCourse);

  const courseSelected = selectedCourse.id !== -1;

  return (
    <React.Fragment>
      {courseSelected ? (
        <SectionList search={search} selectedCourse={selectedCourse} />
      ) : (
        <CourseList search={search} selectedCourse={selectedCourse} />
      )}
    </React.Fragment>
  );
};

export default Courses;
