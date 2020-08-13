import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import Theme from "./../themes/theme";
import Schedule from "./schedule";

ReactDOM.createPortal = (node) => node;

describe("Schedule", () => {
  it("renders schedule correctly", () => {
    const store = configureStore();
    const tree = renderer
      .create(
        <ToastProvider>
          <Provider store={store}>
            <Theme>
              <Schedule />
            </Theme>
          </Provider>
        </ToastProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders schedule correctly with hovered section", () => {
    const initialState = {
      interactions: {
        hoveredScheduledSection: { id: 0 },
        hoveredSection: { id: 1 },
      },
      sections: {
        list: [{ unique_id: 1, start_time: "1:00", end_time: "2:00" }],
      },
    };
    const store = configureStore(initialState);
    const tree = renderer
      .create(
        <ToastProvider>
          <Provider store={store}>
            <Theme>
              <Schedule />
            </Theme>
          </Provider>
        </ToastProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
