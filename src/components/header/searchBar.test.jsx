import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchBar from "./searchBar";
import Theme from "../themes/theme";

const initialState = {
  entities: {
    interactions: { searchStr: "", currentTheme: { theme: "green" } },
    term: { name: "2019 Fall" },
    schedule: { list: [] },
  },
};
const mockStore = configureStore([]);

afterEach(cleanup);

describe("SearchBar", () => {
  it("renders correctly", () => {
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <SearchBar />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display search value", () => {
    const store = mockStore(initialState);
    const handleChange = () => 0;
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <SearchBar search="some search" handleChange={handleChange} />
        </Theme>
      </Provider>
    );

    const input = getByTestId("search-bar");

    expect(input.value).toEqual("some search");
  });

  it("should display placeholder value with term", () => {
    const store = mockStore(initialState);
    const handleChange = () => 0;
    const term = { name: "some term" };
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <SearchBar
            search="some search"
            term={term}
            handleChange={handleChange}
          />
        </Theme>
      </Provider>
    );

    const input = getByTestId("search-bar");

    expect(input.placeholder).toEqual("Search Courses (some term)");
  });
});
