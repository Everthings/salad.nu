import React, { useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as Sentry from "@sentry/react";
import { ToastProvider } from "react-toast-notifications";
import logger from "./services/logService";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

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
      <Provider store={store}>
        <ToastProvider>
          <Header />
          <Body />
        </ToastProvider>
      </Provider>
    </Sentry.ErrorBoundary>
  );
}

export default App;
