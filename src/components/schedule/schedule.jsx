import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getScheduledCourses } from "./../../store/slices/schedule";
import { binAndStyle } from "../../utils/layoutUtils";
import { getHoveredSection } from "../../store/slices/search";
import { getSections } from "../../store/slices/sections";
import HoursColumn from "./hoursColumn";
import DayColumn from "./dayColumn";

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

  const { id } = useSelector(getHoveredSection);
  const sections = useSelector(getSections);
  const section = sections.find((section) => section.unique_id === id);

  const coursesCpy = [...courses];
  if (section && section["start_time"] && section["end_time"]) {
    coursesCpy.push({ temp: true, ...section });
  }

  const dayBins = binAndStyle(coursesCpy, days, hours);

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
