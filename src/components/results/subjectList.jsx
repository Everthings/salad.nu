import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSchool } from "./../../store/reducers/search";
import {
  getSubjects,
  isLoadingSubjects,
} from "./../../store/reducers/subjects";
import {
  clearSchool,
  updateSubject,
} from "./../../store/actions/searchActions";
import { loadSubjects } from "../../store/actions/subjectActions";
import ScrollManager from "./../common/scrollManager";
import CardList from "./cardList";
import BackButton from "./backButton";
import Loading from "./loading";

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  margin-top: 1vh;
  opacity: 0.75;
`;

const HeaderText = styled.h4`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.sectionsListText}`};
`;

const SubjectList = () => {
  const dispatch = useDispatch();
  const school = useSelector(getSchool);
  const subjects = useSelector(getSubjects);

  useMemo(() => {
    dispatch(loadSubjects(school));
  }, [school, dispatch]);
  const loading = useSelector(isLoadingSubjects);

  const handleClick = ({ symbol }) => {
    dispatch(updateSubject(symbol));
  };

  const titleFn = ({ symbol }) => symbol;
  const nameFn = ({ name }) => name;

  return (
    <ScrollManager scrollKey={`subjectList-${school}`}>
      {({ connectScrollTarget }) => (
        <ScrollContainer ref={connectScrollTarget} data-testid="subject-list">
          {loading && <Loading />}
          {!loading && (
            <>
              <Header>
                <BackButton handleClick={() => dispatch(clearSchool())} />
                <HeaderText>SUBJECTS</HeaderText>
              </Header>

              <CardList
                list={subjects}
                idKey={"symbol"}
                titleFn={titleFn}
                textFns={[nameFn]}
                handleClick={handleClick}
              />
            </>
          )}
        </ScrollContainer>
      )}
    </ScrollManager>
  );
};

export default SubjectList;
