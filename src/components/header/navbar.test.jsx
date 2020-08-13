import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "./../../store/configureStore";
import Theme from "./../themes/theme";
import NavBar from "./navbar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const store = configureStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Theme>
              <NavBar />
            </Theme>
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
