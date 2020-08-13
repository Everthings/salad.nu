import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "./../themes/theme";
import InfoCard from "./infoCard";

describe("InfoCard", () => {
  let store;
  const title = "Title";
  const info = ["info 1", "info 2", "info 3"];

  beforeEach(() => {
    store = configureStore();
  });

  it("renders info card correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <InfoCard title={title} info={info} />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders info card correctly when disabled", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <InfoCard title={title} info={info} disabled={"disabled"} />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not show 'More Info' if moreInfoClick not passed", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <InfoCard title={title} info={info} />
        </Theme>
      </Provider>
    );

    const moreInfoButton = queryByTestId("info-card-more-info-button");

    expect(moreInfoButton).toBeNull();
  });

  it("should show 'More Info' if moreInfoClick passed", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <InfoCard title={title} info={info} moreInfoClick={() => true} />
        </Theme>
      </Provider>
    );

    const moreInfoButton = queryByTestId("info-card-more-info-button");

    expect(moreInfoButton).not.toBeNull();
  });

  it("should handle click correctly", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <InfoCard title={title} info={info} handleClick={handleClick} />
        </Theme>
      </Provider>
    );

    const infoCard = getByTestId("info-card");
    fireEvent.click(infoCard);

    expect(handleClick.mock.calls.length).toEqual(1);
  });

  it("should handle 'More Info' click correctly", () => {
    const moreInfoClick = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <InfoCard title={title} info={info} moreInfoClick={moreInfoClick} />
        </Theme>
      </Provider>
    );

    const moreInfoButton = getByTestId("info-card-more-info-button");
    fireEvent.click(moreInfoButton);

    expect(moreInfoClick.mock.calls.length).toEqual(1);
  });

  it("should handle mouse over correctly", () => {
    const handleMouseOver = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <InfoCard
            title={title}
            info={info}
            handleMouseOver={handleMouseOver}
          />
        </Theme>
      </Provider>
    );

    const infoCard = getByTestId("info-card");
    fireEvent.mouseOver(infoCard);

    expect(handleMouseOver.mock.calls.length).toEqual(1);
  });

  it("should handle x click correctly", () => {
    const handleMouseLeave = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <InfoCard
            title={title}
            info={info}
            handleMouseLeave={handleMouseLeave}
          />
        </Theme>
      </Provider>
    );

    const infoCard = getByTestId("info-card");
    fireEvent.mouseLeave(infoCard);

    expect(handleMouseLeave.mock.calls.length).toEqual(1);
  });
});
