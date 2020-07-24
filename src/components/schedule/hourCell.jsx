import React from "react";
import ScheduleCard from "./scheduleCard";

const HourCell = ({ data }) => {
  return (
    <div className="hour-cell">
      {data.map((course) => {
        return <ScheduleCard key={course.data.unique_id} {...course} />;
      })}
    </div>
  );
};

export default HourCell;
