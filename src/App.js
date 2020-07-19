import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as Sentry from "@sentry/react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

const store = configureStore();

function App() {
  return (
    <Sentry.ErrorBoundary showDialog>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </Sentry.ErrorBoundary>
  );
}

export default App;
