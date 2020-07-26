import React from "react";
import { useSelector } from "react-redux";
import { getSelectedCourse } from "../../store/slices/search";
import CourseModal from "../modal/modal";
import SectionList from "./sectionList";
import CourseList from "./courseList";

const Courses = () => {
  const { id } = useSelector(getSelectedCourse);
  const courseSelected = id !== -1;

  return (
    <React.Fragment>
      {courseSelected ? <SectionList /> : <CourseList />}
      <CourseModal />
    </React.Fragment>
  );
};

export default Courses;
