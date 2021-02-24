import React from "react";
import ReactDOM from "react-dom";
import { render, waitForElement } from "@testing-library/react";
import { ToastProvider } from "react-toast-notifications";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import * as coursesService from "./../../fakeServices/coursesService";
import Theme from "./../themes/theme";
import CourseList from "./courseList";
import BackButton from "./backButton";

jest.mock("./../../fakeServices/coursesService");
coursesService.getCourses.mockImplementation(({ searchStr }) => {
  if (searchStr === "empty list") {
    return [];
  }

  if (searchStr === "search") {
    return [
      {
        unique_id: 1,
        title: "Title 1",
        subject: "Subject 1",
        number: "Number 1",
      },
      {
        unique_id: 2,
        title: "Title 2",
        subject: "Subject 2",
        number: "Number 2",
      },
      {
        unique_id: 3,
        title: "Title 3",
        subject: "Subject 3",
        number: "Number 3",
      },
    ];
  }

  return [];
});

ReactDOM.createPortal = (node) => node;

describe("CourseList", () => {
  it("renders course list correctly with data", async () => {
    const state = {
      search: {
        searchStr: "search",
      },
    };
    const store = configureStore(state);
    const { getByTestId, asFragment } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <CourseList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    await waitForElement(() => getByTestId("course-list"));

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'No Results' if sections list is empty and search string is not empty", async () => {
    const state = {
      search: {
        searchStr: "empty list",
      },
    };
    const store = configureStore(state);
    const { queryByText } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <CourseList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const noResultsText = await waitForElement(() => queryByText("No Results"));

    expect(noResultsText).not.toBeNull();
  });

  it("renders 'Continue typing...' if sections list is empty and search string is not empty", async () => {
    const state = {
      search: { searchStr: "t h i s i s t o o s h o r t" },
    };
    const store = configureStore(state);
    const { queryByText } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <CourseList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const continueTypingText = await waitForElement(() =>
      queryByText("Continue typing...")
    );

    expect(continueTypingText).not.toBeNull();
  });

  it("shows back button if subject is picked and search is empty", async () => {
    const state = {
      search: { searchStr: "", subject: "some subject", school: "some school" },
    };

    const store = configureStore(state);
    const { queryByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <CourseList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const backButton = await waitForElement(() => queryByTestId("back-button"));
    expect(backButton).toBeTruthy();
  });

  it("does not show back button if subject is picked and search is not empty", async () => {
    const state = {
      search: {
        searchStr: "search",
        subject: "some subject",
      },
    };

    const store = configureStore(state);
    const { queryByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <CourseList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const backButton = queryByTestId("back-button");
    expect(backButton).toBeFalsy();
  });

  it("does not show back button if subject is not picked", async () => {
    const state = {
      search: { searchStr: "", subject: "" },
    };

    const store = configureStore(state);
    const { queryByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <CourseList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const backButton = queryByTestId("back-button");
    expect(backButton).toBeFalsy();
  });
});
