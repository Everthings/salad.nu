import React from "react";

const ScheduleCard = ({ style, data }) => {
  return (
    <div className="card text-center schedule-card" style={style}>
      <div className="card-body">
        <p className="card-title">{data.name}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
