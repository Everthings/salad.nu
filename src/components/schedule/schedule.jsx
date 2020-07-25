import React from "react";
import styled from "styled-components";
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

const ScheduleContainer = styled.div`
  background-color: #f6fdf4;
  border-top: 0.25rem solid #f6fdf4;
  border-bottom: 0.25rem solid #f6fdf4;
  border-left: 0.75rem solid #f6fdf4;
  border-right: 0.75rem solid #f6fdf4;
  border-radius: 1rem;
  height: calc(100vh - 9rem);
`;

const ScheduleContents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ScheduleBody = () => {
  const courses = useSelector(getScheduledCourses);
  const dayBins = binCoursesToDays(courses, days, hours);

  for (const day of days) {
    const groups = getCollisionGroups(dayBins[day]);
    const columns = getCollisionColumns(groups);
    applyStyles(columns);
  }

  return (
    <ScheduleContainer>
      <ScheduleContents>
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
      </ScheduleContents>
    </ScheduleContainer>
  );
};

export default ScheduleBody;
