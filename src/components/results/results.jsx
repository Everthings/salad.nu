import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSelectedCourse } from "./../../store/reducers/interactions";
import { getSearch, getSchool, getSubject } from "../../store/reducers/search";
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

  const getList = () => {
    if (id !== -1) return <SectionList />;
    else if (search || (school && subject)) return <CourseList />;
    else if (school) return <SubjectList />;
    else return <SchoolList />;
  };

  return <ResultsContainer>{getList()}</ResultsContainer>;
};

export default Results;
