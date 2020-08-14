import React from "react";
import renderer from "react-test-renderer";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "../themes/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AboutPage from "./aboutPage";

describe("AboutPage", () => {
  it("renders about page correctly", () => {
    const store = configureStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <Router>
              <AboutPage />
            </Router>
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
