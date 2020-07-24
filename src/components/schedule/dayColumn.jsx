import React from "react";
import HourCell from "./hourCell";
const DayColumn = ({ day, hours, data }) => {
  return (
    <div className="schedule-col days-col">
      <div className="hour-cell">
        <p>{day}</p>
      </div>
      {hours.map((hour) => {
        return <HourCell key={hour} data={data[hour]} />;
      })}
    </div>
  );
};

export default DayColumn;
