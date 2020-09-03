import {
  selectCourse,
  unselectCourse,
  showSectionInfo,
  removeAndHideSectionInfo,
  hideSectionInfo,
  hoverScheduleCard,
  unhoverScheduleCard,
  hoverSectionCard,
  unhoverSectionCard,
} from "./../actions/interactionActions";
import { addSectionToSchedule } from "./../actions/scheduleActions";
import {
  getSelectedCourse,
  getSectionInfo,
  getCurrentBuilding,
  getHoveredScheduledSection,
  getHoveredSection,
} from "./../reducers/interactions";
import { getScheduledSections } from "./../reducers/schedule";
import * as buildingsService from "./../../fakeServices/buildingsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/buildingsService");
buildingsService.getBuilding.mockImplementation(() => {
  return { name: "some location", lat: 1, lon: 2 };
});

describe("interactionsSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("selectCourse + getSelectedCourse", () => {
    it("should update selected course id to correct id", () => {
      store.dispatch(selectCourse(1));

      expect(getSelectedCourse(store.getState())).toEqual({ id: 1 });
    });
  });

  describe("unselectCourse + getSelectedCourse", () => {
    it("should clear selected course id", () => {
      store.dispatch(selectCourse(1));
      store.dispatch(unselectCourse());

      expect(getSelectedCourse(store.getState())).toEqual({ id: -1 });
    });
  });

  describe("showSectionInfo + getSectionInfo", () => {
    it("should update section info to correct info", () => {
      const info = { title: "1" };

      store.dispatch(showSectionInfo(info));

      expect(getSectionInfo(store.getState())).toEqual({ info });
    });
  });

  describe("removeAndHideSectionInfo + getSectionInfo", () => {
    it("should clear section info from store", () => {
      const info = { title: "1" };

      store.dispatch(removeAndHideSectionInfo(info));

      expect(getSectionInfo(store.getState())).toEqual({
        info: null,
      });
    });

    it("should remove section from schedule", () => {
      const info = { unique_id: 1, title: "1" };

      store.dispatch(addSectionToSchedule(info));
      store.dispatch(removeAndHideSectionInfo(info.unique_id));

      expect(getScheduledSections(store.getState())).toEqual([]);
    });
  });

  describe("hideSectionInfo + getSectionInfo", () => {
    it("should clear selected section info", () => {
      const info = { title: "1" };

      store.dispatch(showSectionInfo(info));
      store.dispatch(hideSectionInfo());

      expect(getSectionInfo(store.getState())).toEqual({ info: null });
    });
  });

  describe("hoverSectionCard + getHoveredSection", () => {
    it("should update hovered section", () => {
      const unique_id = 1;

      store.dispatch(hoverSectionCard(unique_id));

      expect(getHoveredSection(store.getState())).toEqual({ id: unique_id });
    });

    it("should update lat lon", async () => {
      const unique_id = 1;
      const room = { building_id: 1 };

      await store.dispatch(hoverSectionCard(unique_id, room));

      expect(getCurrentBuilding(store.getState()).lat).not.toBeNull();
      expect(getCurrentBuilding(store.getState()).lon).not.toBeNull();
    });
  });

  describe("unhoverSectionCard + getHoveredSection", () => {
    it("should clear hovered section", () => {
      const unique_id = 1;

      store.dispatch(hoverSectionCard(unique_id));
      store.dispatch(unhoverSectionCard(unique_id));

      expect(getHoveredSection(store.getState())).toEqual({ id: -1 });
    });

    it("should clear lat lon", () => {
      const unique_id = 1;
      const room = { building_id: 1 };

      store.dispatch(hoverSectionCard(unique_id, room));
      store.dispatch(unhoverSectionCard(unique_id));

      expect(getCurrentBuilding(store.getState()).lat).toBeNull();
      expect(getCurrentBuilding(store.getState()).lon).toBeNull();
    });
  });

  describe("hoverScheduleCard + getHoveredScheduledSection", () => {
    it("should update hovered section", () => {
      const unique_id = 1;

      store.dispatch(hoverScheduleCard(unique_id));

      expect(getHoveredScheduledSection(store.getState())).toEqual({
        id: unique_id,
      });
    });

    it("should update lat lon", async () => {
      const unique_id = 1;
      const room = { building_id: 1 };

      await store.dispatch(hoverScheduleCard(unique_id, room));

      expect(getCurrentBuilding(store.getState()).lat).not.toBeNull();
      expect(getCurrentBuilding(store.getState()).lon).not.toBeNull();
    });
  });

  describe("unhoverScheduleCard + getHoveredScheduledSection", () => {
    it("should clear hovered section", () => {
      const unique_id = 1;

      store.dispatch(hoverScheduleCard(unique_id));
      store.dispatch(unhoverScheduleCard(unique_id));

      expect(getHoveredScheduledSection(store.getState())).toEqual({ id: -1 });
    });

    it("should clear lat lon", () => {
      const unique_id = 1;
      const room = { building_id: 1 };

      store.dispatch(hoverScheduleCard(unique_id, room));
      store.dispatch(unhoverScheduleCard(unique_id));

      expect(getCurrentBuilding(store.getState()).lat).toBeNull();
      expect(getCurrentBuilding(store.getState()).lon).toBeNull();
    });
  });
});
