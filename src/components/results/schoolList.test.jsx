import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { render, waitForElement } from "@testing-library/react";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import * as schoolsService from "./../../fakeServices/schoolsService";
import Theme from "./../themes/theme";
import SchoolList from "./schoolList";

jest.mock("./../../fakeServices/schoolsService");
schoolsService.getSchools.mockResolvedValue([
  { symbol: "Symbol 1", name: "Name 1" },
  { symbol: "Symbol 2", name: "Name 2" },
  { symbol: "Symbol 3", name: "Name 3" },
]);

ReactDOM.createPortal = (node) => node;

describe("SchoolList", () => {
  it("renders school list correctly with data", async () => {
    const store = configureStore();
    const { getByTestId, asFragment } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <SchoolList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    await waitForElement(() => getByTestId("school-list"));

    expect(asFragment()).toMatchSnapshot();
  });
});
