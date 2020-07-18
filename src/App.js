import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as Sentry from "@sentry/react";
import "./App.css";
import salad_logo from "./images/cover_green.png";
import Navbar from "./components/navbar";
import Courses from "./components/courses";
import Schedule from "./components/schedule";

const store = configureStore();

function App() {
  return (
    <Sentry.ErrorBoundary showDialog>
      <Provider store={store}>
        <Navbar logo={salad_logo} />
        <div className="container-fluid">
          <div className="row ml-3 mr-3">
            <div className="col-3">
              <Courses />
            </div>
            <div className="col-9">
              <Schedule />
            </div>
          </div>
        </div>
      </Provider>
    </Sentry.ErrorBoundary>
  );
}

export default App;
