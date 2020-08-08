import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getSections } from "./../../store/slices/sections";
import { getDiscussions } from "./../../store/slices/discussions";
import {
  clearSelectedCourse,
  updateSelectedSection,
  updateCurrentBuilding,
  updateNoCurrentBuilding,
  clearCurrentBuilding,
  updateHoveredSection,
  clearHoveredSection,
  clearSelectedSection,
} from "./../../store/slices/interactions";
import {
  getScheduledSections,
  addSection,
} from "./../../store/slices/schedule";
import { parseTime2Standard } from "./../../utils/parseUtils";
import { getName } from "./../../utils/courseUtils";
import CardList from "./cardList";

const Header = styled.div`
  margin-top: 1vh;
  opacity: 0.75;
`;

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
`;

const Line = styled.hr`
  border-top: ${({ theme }) =>
    `4px dashed ${theme.colors.sectionsListDivider}`};
`;

const Button = styled.button`
  margin-left: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.h4`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.sectionsListText}`};
`;

const SectionList = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const sections = useSelector(getSections);
  const discussions = useSelector(getDiscussions);
  const results = [...sections, ...discussions];

  const scheduledCourses = useSelector(getScheduledSections);

  const name = sections.length > 0 ? getName(sections[0]) : "";

  const handleBackClick = () => {
    dispatch(clearSelectedCourse());
  };

  const handleMouseEnter = ({ room, unique_id }) => {
    dispatch(updateHoveredSection(unique_id));
    let hasLocation = room && room.building_id;
    if (!hasLocation) dispatch(updateNoCurrentBuilding());
    else dispatch(updateCurrentBuilding(room.building_id));
  };

  const handleMouseLeave = () => {
    dispatch(clearHoveredSection());
    dispatch(clearCurrentBuilding());
  };

  const handleClick = (section) => {
    dispatch(clearSelectedSection());
    dispatch(clearHoveredSection());
    dispatch(addSection(section));
    addToast(`Added ${name}`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const sectionFn = ({ component, section }) => {
    if (component !== "LEC") return `${component} - ${section}`;
    return section;
  };
  const instructorFn = ({ instructor }) => {
    if (instructor) return instructor.name;
    return "";
  };
  const meetingDaysFn = ({ meeting_days }) => meeting_days;
  const meetingTimesFn = ({ start_time, end_time }) => {
    if (!start_time || !end_time) return "";

    return `${parseTime2Standard(start_time)} - ${parseTime2Standard(
      end_time
    )}`;
  };
  const roomFn = ({ room }) =>
    room && room.building_name && room.building_name !== "Online"
      ? room.building_name
      : "";
  const modeFn = ({ mode }) => (mode ? mode : "");
  const disabledFn = ({ unique_id, start_time, end_time, meeting_days }) => {
    const found = scheduledCourses.some(
      (course) => course.unique_id === unique_id
    );
    if (found) return "already added";

    const hasTimes = start_time && end_time && meeting_days;
    if (!hasTimes) return "no specified time";

    return null;
  };

  const showMoreInfo = ({ course_descriptions }) =>
    course_descriptions && course_descriptions.length > 0;

  const moreInfoClick = (sectionInfo) => {
    dispatch(updateSelectedSection(sectionInfo));
  };

  return (
    <ScrollContainer>
      <Header>
        <Button className="btn btn-danger" onClick={handleBackClick}>
          Back
        </Button>
        <Text>{name}</Text>
        <Line />
      </Header>
      <CardList
        list={results}
        idKey={"unique_id"}
        titleFn={sectionFn}
        textFns={[meetingDaysFn, meetingTimesFn, instructorFn, roomFn, modeFn]}
        disabledFn={disabledFn}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        showMoreInfoFn={showMoreInfo}
        moreInfoClick={moreInfoClick}
      />
    </ScrollContainer>
  );
};

export default SectionList;
