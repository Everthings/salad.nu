import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "./../store/search";
import { getCourses, loadCourses } from "./../store/courses";
import CourseCard from "./courseCard";

const Courses = () => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);
  let courses = useSelector(getCourses(search));

  useEffect(() => {
    dispatch(loadCourses());
  }, []);

  return (
    <div className="salad-container-outer">
      <div className="salad-container-inner overflow-auto">
        {courses.length === 0 && search.length > 0 && (
          <center>Continue typing...</center>
        )}
        {courses.length === 0 && search.length >= 3 && (
          <center>No Results 🙁</center>
        )}
        {courses.length > 0 &&
          courses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
      </div>
    </div>
  );
};

export default Courses;
