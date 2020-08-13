import React from "react";
import { render } from "@testing-library/react";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";
import configureStore from "./../store/configureStore";
import Theme from "./themes/theme";
import BodySmall from "./bodySmall";

describe("BodySmall", () => {
  it("renders both results and schedule", () => {
    const store = configureStore();
    const { getAllByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <BodySmall />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const containers = getAllByTestId("salad-container");

    expect(containers).toHaveLength(2);
  });
});
