import React from "react";
import { convertHour2Text } from "../../utils/scheduleUtils";

const HoursColumn = ({ hours }) => {
  return (
    <div className="schedule-col hours-col">
      {hours.map((time) => {
        return (
          <div key={time}>
            <div className="hour-text">{convertHour2Text(time)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HoursColumn;
