import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedCourse } from "./../../store/slices/interactions";
import {
  getSearch,
  getSchool,
  getSubject,
  updateSearch,
  clearSearch,
  clearSchool,
  clearSubject,
} from "./../../store/slices/search";
import {
  loadCourses,
  loadCoursesFromStore,
} from "./../../store/slices/courses";
import { getTerm } from "./../../store/slices/term";
import { getColor } from "./../../utils/colorUtils";
import { getMaximumStrPartLength } from "./../../utils/searchUtils";
import { MIN_SEARCH_LENGTH } from "./../../configs";

const InputContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.searchBar}`};
  border: ${({ theme }) => `3px solid ${theme.colors.searchBarBorder}`};

  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Input = styled.input`
  height: 3rem;
  background-color: ${({ theme }) => `${theme.colors.searchBar}`};
  color: ${({ theme }) => `${theme.colors.searchText}`};
  border: 0;
  border-radius: 0;

  :focus {
    background-color: #fff;
    outline: none;
    box-shadow: 0 0 0;
  }
`;

const Tag = styled.div`
  position: relative;
  height: 100%;
  color: ${({ theme }) => `${theme.colors.searchText}`};
  margin: auto;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
`;

const TagText = styled.div`
  opacity: 80%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 80%;
`;

const Separator = styled.div`
  height: 100%;
  color: ${({ theme }) => `${theme.colors.searchText}`};
  margin: auto;
`;

const SearchBar = () => {
  const [schoolHovered, setSchoolHovered] = useState(false);
  const [subjectHovered, setSubjectHovered] = useState(false);

  const dispatch = useDispatch();

  const search = useSelector(getSearch);
  const school = useSelector(getSchool);
  const subject = useSelector(getSubject);
  const term = useSelector(getTerm);

  const termName = term ? `(${term.name})` : "";

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    const length = getMaximumStrPartLength(value);

    dispatch(updateSearch(value));
    dispatch(clearSelectedCourse());
    if (length >= MIN_SEARCH_LENGTH) {
      const loadAction =
        value.includes(search) && length !== MIN_SEARCH_LENGTH
          ? loadCoursesFromStore(value)
          : loadCourses();
      dispatch(loadAction);
    }

    if (length === 0 && school && subject) {
      dispatch(loadCourses());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSchoolClick = () => {
    dispatch(clearSubject());
    dispatch(clearSchool());
    dispatch(clearSelectedCourse());
    dispatch(clearSearch());

    setSchoolHovered(false);
  };

  const handleSubjectClick = () => {
    dispatch(clearSubject());
    dispatch(clearSelectedCourse());
    dispatch(clearSearch());

    setSubjectHovered(false);
  };

  const handleSchoolMouseOver = () => {
    setSchoolHovered(true);
  };

  const handleSubjectMouseOver = () => {
    setSubjectHovered(true);
  };

  const handleSchoolMouseLeave = () => {
    setSchoolHovered(false);
  };

  const handleSubjectMouseLeave = () => {
    setSubjectHovered(false);
  };

  const schoolTagStyle = schoolHovered ? "hidden" : "";
  const subjectTagStyle = subjectHovered ? "hidden" : "";

  return (
    <InputContainer className="mr-3">
      {school && (
        <FlexContainer className="ml-2 mr-2">
          {school && (
            <Tag
              style={{ backgroundColor: `${getColor(school, 0.65)}` }}
              onClick={handleSchoolClick}
              onMouseOver={handleSchoolMouseOver}
              onMouseLeave={handleSchoolMouseLeave}
            >
              <TagText className={schoolTagStyle}>{school}</TagText>
              <Overlay>{schoolHovered && "╳"}</Overlay>
            </Tag>
          )}
          {subject && (
            <>
              <Separator className="ml-1 mr-1">›</Separator>
              <Tag
                style={{ backgroundColor: `${getColor(subject, 0.65)}` }}
                onClick={handleSubjectClick}
                onMouseOver={handleSubjectMouseOver}
                onMouseLeave={handleSubjectMouseLeave}
              >
                <TagText className={subjectTagStyle}>{subject}</TagText>
                <Overlay>{subjectHovered && "╳"}</Overlay>
              </Tag>
            </>
          )}
        </FlexContainer>
      )}
      <form className="flex-fill" onSubmit={handleSubmit}>
        <Input
          autoFocus
          className="form-control"
          type="search"
          placeholder={`Search Courses ${termName}`}
          aria-label="Search"
          value={search}
          onChange={handleChange}
          data-testid="search-bar"
        />
      </form>
    </InputContainer>
  );
};

export default React.memo(SearchBar);
