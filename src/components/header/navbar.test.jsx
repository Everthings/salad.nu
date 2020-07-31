import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import NavBar from "./navbar";
import salad_logo from "./../../images/cover_no_background.png";

const initialState = {
  entities: {
    interactions: { searchStr: "" },
    term: { name: "2019 Fall" },
    schedule: { list: [] },
  },
};
const mockStore = configureStore([]);

afterEach(cleanup);

describe("NavBar", () => {
  it("renders correctly with logo", () => {
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavBar logo={salad_logo} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without logo", () => {
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
