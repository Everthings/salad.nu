import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { render, waitForElement } from "@testing-library/react";
import configureStore from "./../../store/configureStore";
import { Provider } from "react-redux";
import * as sectionsService from "./../../fakeServices/sectionsService";
import * as discussionsService from "./../../fakeServices/discussionsService";
import Theme from "./../themes/theme";
import SectionList from "./sectionList";

jest.mock("./../../fakeServices/sectionsService");
sectionsService.getSection.mockResolvedValue([
  {
    unique_id: 1,
    section: "Sec 1",
    instructor: { name: "Name 1" },
    meeting_days: "MoWeFr",
    start_time: "1:00",
    end_time: "2:00",
    room: { building_name: "Building 1" },
    mode: "Mode 1",
  },
  {
    unique_id: 2,
    section: "Sec 2",
    instructor: { name: "Name 2" },
    meeting_days: "MoWeFr",
    start_time: "1:00",
    end_time: "2:00",
    room: { building_name: "Building 2" },
    mode: "Mode 2",
  },
  {
    unique_id: 3,
    section: "Sec 3",
    instructor: { name: "Name 3" },
    meeting_days: "MoWeFr",
    start_time: "1:00",
    end_time: "2:00",
    room: { building_name: "Building 3" },
    mode: "Mode 3",
  },
]);

jest.mock("./../../fakeServices/discussionsService");
discussionsService.getDiscussion.mockResolvedValue([
  {
    unique_id: 4,
    section: "Sec 4",
    instructor: { name: "Name 4" },
    meeting_days: "MoWeFr",
    start_time: "1:00",
    end_time: "2:00",
    room: { building_name: "Building 4" },
    mode: "Mode 4",
  },
]);

ReactDOM.createPortal = (node) => node;

describe("SectionList", () => {
  it("renders section list correctly with data", async () => {
    const store = configureStore();
    const { getByTestId, asFragment } = render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <SectionList />
          </Theme>
        </Provider>
      </ToastProvider>
    );

    await waitForElement(() => getByTestId("section-list"));

    expect(asFragment()).toMatchSnapshot();
  });
});
