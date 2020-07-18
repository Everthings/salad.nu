import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./courseCard";
import { updateSelectedCourse } from "./../store/search";
import { getCourses } from "./../store/courses";
import { loadSections } from "../store/sections";

const CourseList = () => {
  const dispatch = useDispatch();

  const courses = useSelector(getCourses());

  return (
    <React.Fragment>
      {courses.length === 0 && (
        <center>
          No Results{" "}
          <span role="img" aria-label="frown">
            🙁
          </span>
        </center>
      )}
      {courses.length > 0 &&
        courses.map((course) => {
          const id = course.id;
          const courseStr = `${course.subject} ${course.number}`;
          return (
            <CourseCard
              key={`${id} ${courseStr}`}
              {...course}
              handleClick={() => {
                dispatch(updateSelectedCourse(id, courseStr));
                dispatch(loadSections(id));
              }}
            />
          );
        })}
    </React.Fragment>
  );
};

export default CourseList;
