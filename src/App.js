import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as Sentry from "@sentry/react";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import logger from "./services/logService";
import ReactGA from "react-ga";
import Theme from "./components/themes/theme";
import Header from "./components/header";
import Body from "./components/body";
import AboutPage from "./components/pages/aboutPage";

const StyleWrapper = styled.div`
  background: ${({ theme }) => `${theme.colors.background}`};
  height: 100%;
  width: 100%;
`;

const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const store = configureStore();

function App() {
  useEffect(() => {
    const trackingId = "UA-172475057-1";
    ReactGA.initialize(trackingId);
    ReactGA.pageview("/");

    logger.init();
  }, []);

  return (
    <Sentry.ErrorBoundary showDialog>
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <StyleWrapper>
              <Router>
                <Switch>
                  <Route path="/about">
                    <AboutPage />
                  </Route>
                  <Route path="/">
                    <FlexContainer>
                      <Header />
                      <Body />
                    </FlexContainer>
                  </Route>
                </Switch>
              </Router>
            </StyleWrapper>
          </Theme>
        </Provider>
      </ToastProvider>
    </Sentry.ErrorBoundary>
  );
}

export default App;
