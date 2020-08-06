import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getScheduledSections } from "./../../store/slices/schedule";
import { getHoveredSection } from "./../../store/slices/interactions";
import { getSections } from "./../../store/slices/sections";
import { getDiscussions } from "./../../store/slices/discussions";
import { binAndStyle } from "./../../utils/layoutUtils";
import HoursColumn from "./hoursColumn";
import DayColumn from "./dayColumn";

const ScheduleContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.containerBackground}`};
  border-top: ${({ theme }) =>
    `0.25rem solid ${theme.colors.containerBackground}`};
  border-bottom: ${({ theme }) =>
    `0.25rem solid ${theme.colors.containerBackground}`};
  border-left: ${({ theme }) =>
    `0.75rem solid ${theme.colors.containerBackground}`};
  border-right: ${({ theme }) =>
    `0.75rem solid ${theme.colors.containerBackground}`};
  border-radius: 0.8rem;
  height: 100%;
`;

const ScheduleContents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ScheduleBody = () => {
  const courses = useSelector(getScheduledSections);

  const { id } = useSelector(getHoveredSection);
  const sections = useSelector(getSections);
  const discussions = useSelector(getDiscussions);
  const results = [...sections, ...discussions];

  const result = results.find((result) => result.unique_id === id);

  const coursesCpy = [...courses];
  if (result && result["start_time"] && result["end_time"]) {
    coursesCpy.push({ temp: true, ...result });
  }

  const { bins, days, hours } = binAndStyle(coursesCpy);
  const startHours = hours.slice(0, -1);

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
              data={bins[day]}
            />
          );
        })}
      </ScheduleContents>
    </ScheduleContainer>
  );
};

export default ScheduleBody;
