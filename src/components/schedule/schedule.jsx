import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  getScheduledSections,
  removeSection,
} from "./../../store/slices/schedule";
import {
  getHoveredScheduledSection,
  getHoveredSection,
  updateCurrentBuilding,
  updateNoCurrentBuilding,
  clearCurrentBuilding,
  updateRemovableSelectedSection,
  updateHoveredScheduledSection,
  clearHoveredScheduledSection,
} from "../../store/slices/interactions";
import { getSections } from "./../../store/slices/sections";
import { getDiscussions } from "./../../store/slices/discussions";
import { binAndStyle } from "./../../utils/layoutUtils";
import { getName } from "../../utils/courseUtils";
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
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  // event handlers for schedule card
  const handleXClick = (e, data) => {
    e.stopPropagation();

    let name = getName(data);

    dispatch(removeSection(data.unique_id));
    dispatch(clearHoveredScheduledSection());
    dispatch(clearCurrentBuilding());

    addToast(`Removed ${name}`, {
      appearance: "error",
      autoDismiss: true,
    });
  };

  const handleClick = (e, data) => {
    dispatch(updateRemovableSelectedSection(data));
  };

  const handleMouseOver = (e, { room, unique_id }) => {
    dispatch(updateHoveredScheduledSection(unique_id));

    let hasLocation = room && room.building_id;
    if (!hasLocation) dispatch(updateNoCurrentBuilding());
    else dispatch(updateCurrentBuilding(room.building_id));
  };

  const handleMouseLeave = () => {
    dispatch(clearHoveredScheduledSection());
    dispatch(clearCurrentBuilding());
  };

  const { id: hoveredId } = useSelector(getHoveredScheduledSection);
  const courses = useSelector(getScheduledSections);

  // find and add hovered section to schedule
  const { id } = useSelector(getHoveredSection);
  const sections = useSelector(getSections);
  const discussions = useSelector(getDiscussions);
  const results = [...sections, ...discussions];
  const result = results.find((result) => result.unique_id === id);
  const coursesCpy = [...courses];
  if (result && result["start_time"] && result["end_time"]) {
    coursesCpy.push({ temp: true, ...result });
  }

  // prepare courses for render
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
              hoveredId={hoveredId}
              handleXClick={handleXClick}
              handleClick={handleClick}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </ScheduleContents>
    </ScheduleContainer>
  );
};

export default ScheduleBody;
