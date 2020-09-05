import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearch,
  getSchool,
  getSubject,
} from "./../../store/reducers/search";
import { getTerm } from "./../../store/reducers/term";
import Tag from "./tag";
import {
  updateSearch,
  clearSchool,
  clearSubject,
} from "../../store/actions/searchActions";

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

const Separator = styled.div`
  height: 100%;
  color: ${({ theme }) => `${theme.colors.searchText}`};
  margin: auto;
`;

const SearchBar = () => {
  const dispatch = useDispatch();

  const search = useSelector(getSearch);
  const school = useSelector(getSchool);
  const subject = useSelector(getSubject);
  const term = useSelector(getTerm);

  const termName = term ? `(${term.name})` : "";

  return (
    <InputContainer className="mr-3">
      {school && (
        <FlexContainer className="ml-2 mr-2">
          <Tag name={school} handleClick={() => dispatch(clearSchool())} />
          {subject && (
            <>
              <Separator className="ml-1 mr-1">›</Separator>
              <Tag
                name={subject}
                handleClick={() => dispatch(clearSubject())}
              />
            </>
          )}
        </FlexContainer>
      )}
      <form className="flex-fill" onSubmit={(e) => e.preventDefault()}>
        <Input
          autoFocus
          className="form-control"
          type="search"
          placeholder={`Search Courses ${termName}`}
          aria-label="Search"
          value={search}
          onChange={(e) => dispatch(updateSearch(e.currentTarget.value))}
          data-testid="search-bar"
        />
      </form>
    </InputContainer>
  );
};

export default React.memo(SearchBar);
