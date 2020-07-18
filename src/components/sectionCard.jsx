import React from "react";

const SectionCard = ({
  instructor,
  section,
  meeting_days,
  start_time,
  end_time,
}) => {
  return (
    <div className="card course-card">
      <div className="card-body">
        <h5 className="card-title">{section}</h5>
        <hr />
        <p className="card-text">
          {instructor.name} <br />
          {meeting_days}
          <br />
          {`${start_time} - ${end_time}`}
          <br />
        </p>
      </div>
    </div>
  );
};

export default SectionCard;
