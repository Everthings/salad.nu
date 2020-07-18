import React from "react";

const Course = ({
  id: courseNumber,
  subjectId: subjectName,
  name: courseName,
}) => {
  return (
    <div className="card course-card">
      <div className="card-body">
        <h5 className="card-title">{`${subjectName} ${courseNumber}`}</h5>
        <hr />
        <p className="card-text">{courseName}</p>
      </div>
    </div>
  );
};

export default Course;
