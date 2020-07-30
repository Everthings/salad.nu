import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getScheduledCourses } from "./../../store/slices/schedule";
import { getHoveredSection } from "./../../store/slices/interactions";
import { getSections } from "./../../store/slices/sections";
import { getDiscussions } from "./../../store/slices/discussions";
import { binAndStyle } from "./../../utils/layoutUtils";
import HoursColumn from "./hoursColumn";
import DayColumn from "./dayColumn";

const days = ["Mo", "Tu", "We", "Th", "Fr"];
const weekends = ["Sa", "Su"];

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

  const { id } = useSelector(getHoveredSection);
  const sections = useSelector(getSections);
  const discussions = useSelector(getDiscussions);
  const results = [...sections, ...discussions];

  const result = results.find((result) => result.unique_id === id);

  const coursesCpy = [...courses];
  if (result && result["start_time"] && result["end_time"]) {
    coursesCpy.push({ temp: true, ...result });
  }

  let totalDays = [...days, ...weekends];
  const dayBins = binAndStyle(coursesCpy, totalDays, hours);

  for (const weekendDay of weekends) {
    let filled = false;
    for (const hour of hours) {
      if (dayBins[weekendDay][hour].length > 0) {
        filled = true;
        break;
      }
    }

    if (!filled) totalDays = totalDays.filter((day) => day !== weekendDay);
  }

  return (
    <ScheduleContainer>
      <ScheduleContents>
        <HoursColumn hours={hours} />
        {totalDays.map((day) => {
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
