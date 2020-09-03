import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getScheduledSections } from "./../../store/reducers/schedule";
import {
  getHoveredScheduledSection,
  getHoveredSection,
} from "./../../store/reducers/interactions";
import { getSection } from "./../../store/reducers/sections";
import { getDiscussion } from "./../../store/reducers/discussions";
import { removeSectionFromSchedule } from "./../../store/actions/scheduleActions";
import {
  hoverScheduleCard,
  unhoverScheduleCard,
} from "./../../store/actions/interactionActions";
import { showSectionInfo } from "./../../store/actions/interactionActions";
import { binAndStyle } from "./../../utils/layoutUtils";
import { getName } from "./../../utils/courseUtils";
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

  // event handlers for schedule card and memoize
  const handleXClick = useCallback(
    (data) => {
      dispatch(removeSectionFromSchedule(data.unique_id));

      addToast(`Removed ${getName(data)}`, {
        appearance: "error",
        autoDismiss: true,
      });
    },
    [dispatch, addToast]
  );

  const handleClick = useCallback(
    (data) => {
      dispatch(showSectionInfo(data));
    },
    [dispatch]
  );

  const handleMouseOver = useCallback(
    ({ unique_id, room }) => {
      dispatch(hoverScheduleCard(unique_id, room));
    },
    [dispatch]
  );

  const handleMouseLeave = useCallback(() => {
    dispatch(unhoverScheduleCard());
  }, [dispatch]);

  const { id: hoveredId } = useSelector(getHoveredScheduledSection);
  const scheduledSections = useSelector(getScheduledSections);

  // find and add hovered section to schedule
  const { id } = useSelector(getHoveredSection);
  const section = useSelector(getSection(id));
  const discussion = useSelector(getDiscussion(id));
  const hoveredSection = section || discussion;

  // prepare courses for render and memoize
  const { bins, days, hours } = useMemo(() => {
    const scheduledSectionsCpy = [...scheduledSections];
    if (
      hoveredSection &&
      hoveredSection["start_time"] &&
      hoveredSection["end_time"]
    ) {
      scheduledSectionsCpy.push({ ...hoveredSection, temp: true });
    }
    return binAndStyle(scheduledSectionsCpy);
  }, [scheduledSections, hoveredSection]);
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
