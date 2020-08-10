import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/slices/courses";
import {
  getSearch,
  updateSelectedCourse,
} from "../../store/slices/interactions";
import { loadSections } from "../../store/slices/sections";
import { loadDiscussions } from "../../store/slices/discussions";
import { getParts, getMaximumPartLength } from "../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "../../configs";
import ScrollManager from "./../common/scrollManager";
import CardList from "./cardList";

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
`;

const Text = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.coursesListText}`};
`;

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(getCourses());

  const search = useSelector(getSearch);
  const searchLength = getMaximumPartLength(getParts(search));

  const shouldContinueTyping =
    searchLength < MIN_SEARCH_LENGTH && searchLength !== 0;

  const noResults = searchLength >= MIN_SEARCH_LENGTH && courses.length === 0;

  const shouldDisplaySections =
    searchLength >= MIN_SEARCH_LENGTH && courses.length > 0;

  const handleClick = ({ course_id }) => {
    dispatch(updateSelectedCourse(course_id));
    dispatch(loadSections(course_id));
    dispatch(loadDiscussions(course_id));
  };

  const titleFn = ({ subject, number }) => `${subject} ${number}`;
  const nameFn = ({ title }) => title;

  return (
    <ScrollManager scrollKey="courseList">
      {({ connectScrollTarget }) => (
        <ScrollContainer ref={connectScrollTarget}>
          {shouldContinueTyping && <Text>Continue typing...</Text>}
          {noResults && (
            <Text>
              No Results{" "}
              <span role="img" aria-label="frown">
                🙁
              </span>
            </Text>
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
        </ScrollContainer>
      )}
    </ScrollManager>
  );
};

export default CourseList;
