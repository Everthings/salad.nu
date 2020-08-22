import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { ToastProvider } from "react-toast-notifications";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "./../themes/theme";
import CourseList from "./courseList";

ReactDOM.createPortal = (node) => node;

describe("CourseList", () => {
  it("renders course list correctly with data", () => {
    const state = {
      search: { searchStr: "some search" },
      courses: {
        list: [
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
        ],
      },
    };
    const store = configureStore(state);
    const tree = renderer
      .create(
        <ToastProvider>
          <Provider store={store}>
            <Theme>
              <CourseList />
            </Theme>
          </Provider>
        </ToastProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders 'No Results' if sections list is empty and search string is not empty", () => {
    const state = {
      search: { searchStr: "some search" },
      courses: {
        list: [],
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

    const noResultsText = queryByText("No Results");

    expect(noResultsText).not.toBeNull();
  });

  it("renders 'Continue typing...' if sections list is empty and search string is not empty", () => {
    const state = {
      search: { searchStr: "t h i s i s t o o s h o r t" },
      courses: {
        list: [],
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

    const continueTypingText = queryByText("Continue typing...");

    expect(continueTypingText).not.toBeNull();
  });
});
