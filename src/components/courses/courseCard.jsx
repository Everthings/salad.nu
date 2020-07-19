import React from "react";
import { useDispatch } from "react-redux";
import { updateSelectedCourse } from "./../../store/search";
import { loadSections } from "./../../store/sections";

const CourseCard = ({ course_id: courseId, subject, number, title }) => {
  const dispatch = useDispatch();

  const handleClick = (id, courseStr) => {
    dispatch(updateSelectedCourse(id, courseStr));
    dispatch(loadSections(id));
  };

  const courseStr = `${subject} ${number}`;

  return (
    <div
      className="card info-card"
      onClick={() => handleClick(courseId, courseStr)}
    >
      <div className="card-body">
        <h5 className="card-title">{`${subject} ${number}`}</h5>
        <hr />
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

export default CourseCard;
