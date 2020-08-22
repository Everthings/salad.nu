import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadCourses } from "./../../store/slices/courses";
import { updateSubject } from "./../../store/slices/search";
import { getSubjects } from "./../../store/slices/subjects";
import ScrollManager from "./../common/scrollManager";
import CardList from "./cardList";

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
`;

const Text = styled.h4`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.sectionsListText}`};
`;

const SubjectList = () => {
  const dispatch = useDispatch();
  const subjects = useSelector(getSubjects);

  const handleClick = ({ symbol }) => {
    dispatch(updateSubject(symbol));
    dispatch(loadCourses());
  };

  const titleFn = ({ symbol }) => symbol;
  const nameFn = ({ name }) => name;

  return (
    <ScrollManager scrollKey="subjectList">
      {({ connectScrollTarget }) => (
        <ScrollContainer ref={connectScrollTarget} data-testid="subject-list">
          <Text>SUBJECTS</Text>
          <CardList
            list={subjects}
            idKey={"symbol"}
            titleFn={titleFn}
            textFns={[nameFn]}
            handleClick={handleClick}
          />
        </ScrollContainer>
      )}
    </ScrollManager>
  );
};

export default SubjectList;
