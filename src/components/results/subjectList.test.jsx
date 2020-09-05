import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { render, waitForElement } from "@testing-library/react";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import * as subjectsService from "./../../fakeServices/subjectsService";
import Theme from "./../themes/theme";
import SubjectList from "./subjectList";

jest.mock("./../../fakeServices/subjectsService");
subjectsService.getSubject.mockResolvedValue([
  { symbol: "Symbol 1", name: "Name 1" },
  { symbol: "Symbol 2", name: "Name 2" },
  { symbol: "Symbol 3", name: "Name 3" },
]);

ReactDOM.createPortal = (node) => node;

describe("SubjectList", () => {
  it("renders subject list correctly with data", async () => {
    const store = configureStore();
    const { getByTestId, asFragment } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <SubjectList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    await waitForElement(() => getByTestId("subject-list"));

    expect(asFragment()).toMatchSnapshot();
  });
});
