import React from "react";
import renderer from "react-test-renderer";
import { render} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "./../../store/configureStore";
import Theme from "./../themes/theme";
import SearchBar from "./searchBar";

const initialState = {
  term: { currentTerm: { name: "2019 Fall" } },
};

describe("SearchBar", () => {
  it("renders correctly", () => {
    const store = configureStore(initialState);
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
    const store = configureStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <SearchBar />
        </Theme>
      </Provider>
    );

    const input = getByTestId("search-bar");

    expect(input.value).toEqual("");
  });

  it("should display placeholder value with term", () => {
    const store = configureStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <SearchBar />
        </Theme>
      </Provider>
    );

    const input = getByTestId("search-bar");

    expect(input.placeholder).toEqual("Search Courses (2019 Fall)");
  });
});
