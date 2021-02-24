import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "./../themes/theme";
import BackButton from "./backButton";

describe("BackButton", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  it("renders back button correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <BackButton />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle click correctly", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <BackButton handleClick={handleClick} />
        </Theme>
      </Provider>
    );

    const backButton = getByTestId("back-button");
    fireEvent.click(backButton);

    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
