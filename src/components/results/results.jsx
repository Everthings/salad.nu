import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSelectedCourse } from "./../../store/slices/interactions";
import { getSearch, getSchool, getSubject } from "../../store/slices/search";
import SchoolList from "./schoolList";
import SubjectList from "./subjectList";
import SectionList from "./sectionList";
import CourseList from "./courseList";

const ResultsContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.containerBackground}`};
  border-top: ${({ theme }) =>
    `0.25rem solid ${theme.colors.containerBackground}`};
  border-bottom: ${({ theme }) =>
    `0.25rem solid ${theme.colors.containerBackground}`};
  border-left: ${({ theme }) =>
    `0.75rem solid ${theme.colors.containerBackground}`};
  border-right: ${({ theme }) =>
    `0.75rem solid ${theme.colors.containerBackground}`};
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: calc(100% - 25vh);
`;

const Results = () => {
  const school = useSelector(getSchool);
  const subject = useSelector(getSubject);
  const search = useSelector(getSearch);
  const { id } = useSelector(getSelectedCourse);

  const showSection = id !== -1;
  const showCourse = !showSection && (search || (school && subject));
  const showSubject = !showSection && !showCourse && school;
  const showSchool = !showSection && !showCourse && !showSubject;

  return (
    <ResultsContainer>
      {showSchool && <SchoolList />}
      {showSubject && <SubjectList />}
      {showCourse && <CourseList />}
      {showSection && <SectionList />}
    </ResultsContainer>
  );
};

export default Results;
