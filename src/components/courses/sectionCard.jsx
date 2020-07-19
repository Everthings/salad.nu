import React from "react";

const SectionCard = ({
  instructor,
  section,
  meeting_days,
  start_time,
  end_time,
}) => {
  return (
    <div className="card info-card section-card">
      <div className="card-body">
        <h5 className="card-title">{section}</h5>
        <hr />
        {instructor.name && <p className="card-text">{instructor.name} </p>}
        {meeting_days && <p className="card-text">{meeting_days}</p>}
        {start_time && end_time && (
          <p className="card-text">{`${start_time} - ${end_time}`}</p>
        )}
      </div>
    </div>
  );
};

export default SectionCard;
