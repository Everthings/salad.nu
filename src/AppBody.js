import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadTerm } from "./store/actions/termActions";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/body";
import AboutPage from "./components/aboutPage/aboutPage";
import { CURRENT_TERM_ID } from "./configs";
import { useMediaQuery } from "react-responsive";

const StyleWrapper = styled.div`
  background: ${({ theme }) => `${theme.colors.background}`};
  height: 100%;
  width: 100%;
`;

const FlexContainer = styled.div`
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
`;

const AppBody = () => {
  const dispatch = useDispatch();

  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  useEffect(() => {
    dispatch(loadTerm(CURRENT_TERM_ID));
  }, [dispatch]);

  return (
    <StyleWrapper data-testid="app-body">
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <FlexContainer>
            {bigScreen && <Header />}
            <Body />
          </FlexContainer>
        </Route>
      </Switch>
    </StyleWrapper>
  );
};

export default AppBody;
