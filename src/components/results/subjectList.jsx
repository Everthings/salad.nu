import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSchool } from "./../../store/reducers/search";
import {
  getSubjects,
  isLoadingSubjects,
} from "./../../store/reducers/subjects";
import { updateSubject } from "./../../store/actions/searchActions";
import { loadSubjects } from "../../store/actions/subjectActions";
import ScrollManager from "./../common/scrollManager";
import CardList from "./cardList";
import Loading from "./loading";

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
              <Heading>SUBJECTS</Heading>
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
