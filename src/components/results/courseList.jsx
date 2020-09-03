import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/reducers/courses";
import {
  getSearch,
  getSchool,
  getSubject,
} from "./../../store/reducers/search";
import { selectCourse } from "./../../store/actions/interactionActions";
import { getMaximumStrPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import ScrollManager from "./../common/scrollManager";
import CardList from "./cardList";

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
`;

const Heading = styled.h4`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.sectionsListText}`};
  margin-top: 0.5rem;
`;

const Text = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.coursesListText}`};
`;

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(getCourses);
  const school = useSelector(getSchool);
  const subject = useSelector(getSubject);
  const search = useSelector(getSearch);
  const searchLength = getMaximumStrPartLength(search);

  const getComponent = () => {
    if (searchLength < MIN_SEARCH_LENGTH && searchLength !== 0)
      // search string too short
      return <Text>Continue typing...</Text>;
    else if (searchLength >= MIN_SEARCH_LENGTH && courses.length === 0)
      // search string long, but no results
      return (
        <Text>
          No Results{" "}
          <span role="img" aria-label="frown">
            🙁
          </span>
        </Text>
      );
    else if (
      (school && subject) ||
      (searchLength >= MIN_SEARCH_LENGTH && courses.length > 0)
    ) {
      // search string long, and there are results
      const handleClick = ({ course_id }) => {
        dispatch(selectCourse(course_id));
      };
      const titleFn = ({ subject, number }) => `${subject} ${number}`;
      const nameFn = ({ title }) => title;
      return (
        <>
          <Heading>COURSES</Heading>
          <CardList
            list={courses}
            idKey={"unique_id"}
            titleFn={titleFn}
            textFns={[nameFn]}
            handleClick={handleClick}
          />
        </>
      );
    }
  };

  return (
    <ScrollManager scrollKey={`courseList-${search}-${school}-${subject}`}>
      {({ connectScrollTarget }) => (
        <ScrollContainer ref={connectScrollTarget} data-testid="course-list">
          {getComponent()}
        </ScrollContainer>
      )}
    </ScrollManager>
  );
};

export default CourseList;
