import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "./../../store/configureStore";
import Theme from "./../themes/theme";
import Tag from "./tag";

describe("Tag", () => {
  it("renders correctly", () => {
    const store = configureStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <Tag name="name" />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle click correctly", () => {
    const store = configureStore();
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <Tag name="name" handleClick={handleClick} />
        </Theme>
      </Provider>
    );

    const searchTag = getByTestId("search-tag");
    fireEvent.click(searchTag);

    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
