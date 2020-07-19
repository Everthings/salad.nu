import React from "react";
import { useSelector } from "react-redux";
import { getSearch, getSelectedCourse } from "../../store/slices/search";
import SectionList from "./sectionList";
import CourseList from "./courseList";
import CampusMap from "./campusMap";

const Courses = () => {
  const search = useSelector(getSearch);
  const selectedCourse = useSelector(getSelectedCourse);

  const courseSelected = selectedCourse.id !== -1;

  return (
    <div className="salad-container-outer">
      {courseSelected ? (
        <SectionList search={search} selectedCourse={selectedCourse} />
      ) : (
        <CourseList search={search} selectedCourse={selectedCourse} />
      )}
      <CampusMap />
    </div>
  );
};

export default Courses;
