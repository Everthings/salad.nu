import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import { ToastProvider } from "react-toast-notifications";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "./../themes/theme";
import Results from "./results";

ReactDOM.createPortal = (node) => node;

describe("Results", () => {
  it("renders course list if no course selected and searchStr sufficiently long", () => {
    const state = {
      interactions: {
        searchStr: "this is a search",
        selectedCourse: { id: -1 },
      },
    };
    const store = configureStore(state);
    const { getByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Results />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const courseList = getByTestId("course-list");

    expect(courseList).toBeInTheDocument();
  });

  it("renders section list if course selected", () => {
    const state = { interactions: { selectedCourse: { id: 1 } } };
    const store = configureStore(state);
    const { getByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Results />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const sectionList = getByTestId("section-list");

    expect(sectionList).toBeInTheDocument();
  });

  it("clicking on course list item then displays section item", () => {
    const state = {
      interactions: {
        searchStr: "this is a search",
        selectedCourse: { id: -1 },
      },
      courses: {
        list: [
          {
            unique_id: 1,
            title: "Title 1",
            subject: "Subject 1",
            number: "Number 1",
          },
        ],
      },
    };
    const store = configureStore(state);
    const { getByText, getByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Results />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const listItem = getByText("Title 1");
    fireEvent.click(listItem);

    const sectionList = getByTestId("section-list");
    expect(sectionList).toBeInTheDocument();
  });

  it("clicking on back from section list then displays course list", () => {
    const state = {
      interactions: {
        searchStr: "this is a search",
        selectedCourse: { id: 1 },
      },
    };
    const store = configureStore(state);
    const { getByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Results />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const backButton = getByTestId("back-button");
    fireEvent.click(backButton);

    const courseList = getByTestId("course-list");
    expect(courseList).toBeInTheDocument();
  });
});
