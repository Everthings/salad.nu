import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "../../store/slices/sections";
import {
  clearSelectedCourse,
  updateSelectedSection,
  updateCurrentBuilding,
  clearCurrentBuilding,
} from "../../store/slices/search";
import { getScheduledCourses } from "./../../store/slices/schedule";
import CardList from "./cardList";
import CourseModal from "./modal";

const CoursesContainer = styled.div`
  background-color: #f6fdf4;
  border-top: 0.25rem solid #f6fdf4;
  border-bottom: 0.25rem solid #f6fdf4;
  border-left: 0.75rem solid #f6fdf4;
  border-right: 0.75rem solid #f6fdf4;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: calc(75vh - 9rem);
  overflow: auto;
`;

const Header = styled.div`
  margin-top: 1vh;
  opacity: 0.75;
`;

const Line = styled.hr`
  border-top: 4px dashed #aed19e;
`;

const Button = styled.button`
  margin-left: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const SectionList = ({ selectedCourse }) => {
  const dispatch = useDispatch();

  const sections = useSelector(getSections);
  const scheduledCourses = useSelector(getScheduledCourses);

  const handleBackClick = () => {
    dispatch(clearSelectedCourse());
  };

  const handleClick = ({ unique_id }) => {
    dispatch(updateSelectedSection(unique_id));
  };

  const handleMouseEnter = ({ room }) => {
    if (!room || !room.building_id) return;
    dispatch(updateCurrentBuilding(room.building_id));
  };

  const handleMouseLeave = () => {
    dispatch(clearCurrentBuilding());
  };

  const sectionFn = ({ section }) => section;
  const instructorFn = ({ instructor }) => {
    if (instructor) return instructor.name;
    return "";
  };
  const meetingDaysFn = ({ meeting_days }) => meeting_days;
  const meetingTimesFn = ({ start_time, end_time }) =>
    `${start_time} - ${end_time}`;
  const roomFn = ({ room }) => {
    if (room) return `${room.building_name} ${room.name}`;
    return "";
  };
  const disabledFn = ({ unique_id }) => {
    const found = scheduledCourses.some(
      (course) => course.unique_id === unique_id
    );
    return found;
  };

  return (
    <CoursesContainer>
      {
        <Header>
          <Button className="btn btn-danger" onClick={handleBackClick}>
            Back
          </Button>
          <h4>
            <center>{selectedCourse.name}</center>
          </h4>
          <Line />
        </Header>
      }
      <CardList
        list={sections}
        idKey={"unique_id"}
        titleFn={sectionFn}
        textFns={[instructorFn, meetingDaysFn, meetingTimesFn, roomFn]}
        disabledFn={disabledFn}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <CourseModal />
    </CoursesContainer>
  );
};

export default SectionList;
