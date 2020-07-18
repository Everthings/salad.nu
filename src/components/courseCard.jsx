import React from "react";

const CourseCard = ({ subject, number, title, handleClick }) => {
  return (
    <div className="card course-card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{`${subject} ${number}`}</h5>
        <hr />
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

export default CourseCard;
