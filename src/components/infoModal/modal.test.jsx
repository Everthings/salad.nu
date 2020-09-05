import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { ToastProvider } from "react-toast-notifications";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import Theme from "./../themes/theme";
import ReactModal from "react-modal";
import Modal from "./modal";

ReactModal.setAppElement("*");
ReactDOM.createPortal = (node) => node;

describe("Modal", () => {
  it("renders modal correctly", () => {
    const state = {
      interactions: {
        sectionInfo: {
          info: {
            title: "Title 1",
            subject: "Subject 1",
            number: "Number 1",
            instructor: { name: "Name 1" },
            room: { building_name: "Building 1" },
            mode: "Mode 1",
            start_time: "1:00",
            end_time: "2:00",
            course_descriptions: [{ name: "Nm 1", desc: "Desc 1" }],
          },
        },
      },
    };
    const store = configureStore(state);
    const tree = renderer
      .create(
        <ToastProvider>
          <Provider store={store}>
            <Theme>
              <Modal />
            </Theme>
          </Provider>
        </ToastProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders remove if section is removable", () => {
    const state = {
      interactions: {
        sectionInfo: {
          info: {
            scheduled: true,
          },
        },
      },
    };
    const store = configureStore(state);
    const { queryByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Modal />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const removeButton = queryByTestId("modal-remove-button");

    expect(removeButton).not.toBeNull();
  });

  it("does not render remove if section is not removable", () => {
    const state = {
      interactions: {
        sectionInfo: {
          info: {
            scheduled: false,
          },
        },
      },
    };
    const store = configureStore(state);
    const { queryByTestId } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Modal />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    const removeButton = queryByTestId("modal-remove-button");

    expect(removeButton).toBeNull();
  });
});
