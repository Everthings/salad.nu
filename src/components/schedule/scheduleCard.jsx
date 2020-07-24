import React from "react";

const ScheduleCard = ({ data, style, color }) => {
  return (
    <div
      className="card text-center schedule-card"
      style={{ ...style, borderColor: color }}
    >
      <div className="card-body">
        <p className="card-title">{data.name}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
