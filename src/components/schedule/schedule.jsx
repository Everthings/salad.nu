import React from "react";
import { useSelector } from "react-redux";
import { getScheduledCourses } from "./../../store/slices/schedule";
import HoursColumn from "./hoursColumn";
import DayColumn from "./dayColumn";
import {
  binCoursesToDays,
  getCollisionGroups,
  getCollisionColumns,
  applyStyles,
} from "../../utils/layoutUtils";

const days = ["Mo", "Tu", "We", "Th", "Fr"];

const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const startHours = hours.slice(0, -1);

const ScheduleBody = () => {
  const courses = useSelector(getScheduledCourses);
  const dayBins = binCoursesToDays(courses, days, hours);

  for (const day of days) {
    const groups = getCollisionGroups(dayBins[day]);
    const columns = getCollisionColumns(groups);
    applyStyles(columns);
  }

  return (
    <div className="salad-container-schedule">
      <div className="schedule-body schedule-row">
        <HoursColumn hours={hours} />
        {days.map((day) => {
          return (
            <DayColumn
              key={day}
              day={day}
              hours={startHours}
              data={dayBins[day]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleBody;
