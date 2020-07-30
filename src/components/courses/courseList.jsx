import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "./../../store/slices/courses";
import {
  getSearch,
  updateSelectedCourse,
} from "./../../store/slices/interactions";
import { loadSections } from "./../../store/slices/sections";
import { loadDiscussions } from "./../../store/slices/discussions";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import CardList from "./cardList";

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

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(getCourses());

  const search = useSelector(getSearch);

  const shouldContinueTyping =
    search.length < MIN_SEARCH_LENGTH && search.length !== 0;

  const noResults = search.length >= MIN_SEARCH_LENGTH && courses.length === 0;

  const shouldDisplaySections =
    search.length >= MIN_SEARCH_LENGTH && courses.length > 0;

  const handleClick = ({ course_id }) => {
    dispatch(updateSelectedCourse(course_id));
    dispatch(loadSections(course_id));
    dispatch(loadDiscussions(course_id));
  };

  const titleFn = ({ subject, number }) => `${subject} ${number}`;
  const nameFn = ({ title }) => title;

  return (
    <CoursesContainer>
      {shouldContinueTyping && <center>Continue typing...</center>}
      {noResults && (
        <center>
          No Results{" "}
          <span role="img" aria-label="frown">
            🙁
          </span>
        </center>
      )}
      {shouldDisplaySections && (
        <CardList
          list={courses}
          idKey={"unique_id"}
          titleFn={titleFn}
          textFns={[nameFn]}
          handleClick={handleClick}
        />
      )}
    </CoursesContainer>
  );
};

export default CourseList;
