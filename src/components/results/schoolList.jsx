import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateSchool } from "./../../store/slices/search";
import { getSchools } from "./../../store/slices/schools";
import { loadSubjects } from "./../../store/slices/subjects";
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

const SchoolList = () => {
  const dispatch = useDispatch();
  const schools = useSelector(getSchools);

  const handleClick = ({ symbol }) => {
    dispatch(updateSchool(symbol));
    dispatch(loadSubjects(symbol));
  };

  const titleFn = ({ symbol }) => symbol;
  const nameFn = ({ name }) => name;

  return (
    <ScrollManager scrollKey="schoolList">
      {({ connectScrollTarget }) => (
        <ScrollContainer ref={connectScrollTarget} data-testid="school-list">
          <Text>SCHOOLS</Text>
          <CardList
            list={schools}
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

export default SchoolList;
