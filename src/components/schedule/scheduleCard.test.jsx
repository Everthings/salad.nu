import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "./../themes/theme";
import ScheduleCard from "./scheduleCard";

describe("ScheduleCard", () => {
  let store;
  const data = {
    title: "Title",
    subject: "Subject",
    number: "Number",
    instructor: { name: "Name" },
  };
  const style = {};
  const color = "#ffffff";

  beforeEach(() => {
    store = configureStore();
  });

  it("renders schedule card correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <ScheduleCard data={data} style={style} color={color} />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders schedule card correctly with multiple instructors", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <ScheduleCard
              data={{ ...data, instructors: ["Person 1", "1 Person"] }}
              style={style}
              color={color}
            />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not show x if not hovered", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <ScheduleCard data={data} style={style} color={color} />
        </Theme>
      </Provider>
    );

    const xButton = queryByTestId("schedule-card-x-button");

    expect(xButton).toBeNull();
  });

  it("should show x if hovered", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <ScheduleCard
            data={data}
            style={style}
            color={color}
            hovered={true}
          />
        </Theme>
      </Provider>
    );

    const xButton = queryByTestId("schedule-card-x-button");

    expect(xButton).not.toBeNull();
  });

  it("should handle click correctly", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <ScheduleCard
            data={data}
            style={style}
            color={color}
            handleClick={handleClick}
          />
        </Theme>
      </Provider>
    );

    const scheduleCard = getByTestId("schedule-card");
    fireEvent.click(scheduleCard);

    expect(handleClick.mock.calls.length).toEqual(1);
  });

  it("should handle x click correctly", () => {
    const handleXClick = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <ScheduleCard
            data={data}
            style={style}
            color={color}
            hovered={true}
            handleXClick={handleXClick}
          />
        </Theme>
      </Provider>
    );

    const xButton = getByTestId("schedule-card-x-button");
    fireEvent.click(xButton);

    expect(handleXClick.mock.calls.length).toEqual(1);
  });

  it("should handle mouse over correctly", () => {
    const handleMouseOver = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <ScheduleCard
            data={data}
            style={style}
            color={color}
            handleMouseOver={handleMouseOver}
          />
        </Theme>
      </Provider>
    );

    const scheduleCard = getByTestId("schedule-card");
    fireEvent.mouseOver(scheduleCard);

    expect(handleMouseOver.mock.calls.length).toEqual(1);
  });

  it("should handle mouse leave correctly", () => {
    const handleMouseLeave = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <ScheduleCard
            data={data}
            style={style}
            color={color}
            handleMouseLeave={handleMouseLeave}
          />
        </Theme>
      </Provider>
    );

    const scheduleCard = getByTestId("schedule-card");
    fireEvent.mouseLeave(scheduleCard);

    expect(handleMouseLeave.mock.calls.length).toEqual(1);
  });
});
