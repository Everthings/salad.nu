import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "./../../store/configureStore";
import Theme from "./../themes/theme";
import Loading from "./loading";

describe("Loading", () => {
  it("renders correctly", () => {
    const store = configureStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <Loading />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
