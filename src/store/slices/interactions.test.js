import {
  updateSearch,
  updateSelectedCourse,
  clearSelectedCourse,
  updateSelectedSection,
  updateRemovableSelectedSection,
  clearSelectedSection,
  updateCurrentBuilding,
  updateNoCurrentBuilding,
  clearCurrentBuilding,
  updateHoveredScheduledSection,
  clearHoveredScheduledSection,
  updateHoveredSection,
  clearHoveredSection,
} from "./interactions";
import {
  getSearch,
  getSelectedCourse,
  getSelectedSection,
  getCurrentBuilding,
  getHoveredScheduledSection,
  getHoveredSection,
} from "./interactions";
import * as buildingsService from "./../../fakeServices/buildingsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/buildingsService");
buildingsService.getBuilding.mockImplementation((id) => {
  if (id === 0) {
    return { name: null, lat: null, lon: null };
  }

  if (id === 1) {
    return { name: "some location", lat: 1, lon: 2 };
  }

  return [];
});

describe("interactionsSlice", () => {
  let store;

  const interactionsSlice = () => store.getState().interactions;

  beforeEach(() => {
    store = configureStore();
  });

  describe("updateSearch", () => {
    it("should update to empty string if empty string is passed", () => {
      store.dispatch(updateSearch(""));

      expect(interactionsSlice().searchStr).toEqual("");
    });

    it("should update to string if string is passed", () => {
      store.dispatch(updateSearch("string"));

      expect(interactionsSlice().searchStr).toEqual("string");
    });
  });

  describe("updateSelectedCourse", () => {
    it("should update selected course id to correct id", () => {
      store.dispatch(updateSelectedCourse(1));

      expect(interactionsSlice().selectedCourse).toEqual({ id: 1 });
    });
  });

  describe("clearSelectedCourse", () => {
    it("should clear selected course id", () => {
      store.dispatch(clearSelectedCourse());

      expect(interactionsSlice().selectedCourse).toEqual({ id: -1 });
    });
  });

  describe("updateSelectedSection", () => {
    it("should updated selected section info to correct info", () => {
      const info = { title: "1" };

      store.dispatch(updateSelectedSection(info));

      expect(interactionsSlice().selectedSection).toEqual({ info });
    });
  });

  describe("updateRemovableSelectedSection", () => {
    it("should updated selected section info to correct info and set removable to true", () => {
      const info = { title: "1" };

      store.dispatch(updateRemovableSelectedSection(info));

      expect(interactionsSlice().selectedSection).toEqual({
        info: { ...info, removable: true },
      });
    });
  });

  describe("clearSelectedSection", () => {
    it("should clear selected section info", () => {
      store.dispatch(clearSelectedSection());

      expect(interactionsSlice().selectedSection).toEqual({ info: null });
    });
  });

  describe("updateCurrentBuilding", () => {
    it("should load building info into store if id matches", async () => {
      await store.dispatch(updateCurrentBuilding(1));
      const { lat, lon } = interactionsSlice().currentBuilding;

      expect(lat).toEqual(1);
      expect(lon).toEqual(2);
    });

    it("should load invalid non-null info into store if id doesn't match", async () => {
      await store.dispatch(updateCurrentBuilding(-1));
      const { lat, lon } = interactionsSlice().currentBuilding;

      expect(lat).toEqual(-360);
      expect(lon).toEqual(-360);
    });

    it("should load invalid non-null info into store if id matches building with null lat lon", async () => {
      await store.dispatch(updateCurrentBuilding(0));
      const { lat, lon } = interactionsSlice().currentBuilding;

      expect(lat).toEqual(-360);
      expect(lon).toEqual(-360);
    });
  });

  describe("updateNoCurrentBuilding", () => {
    it("should set building info to invalid non-null lat lon", () => {
      store.dispatch(updateNoCurrentBuilding());
      const { lat, lon } = interactionsSlice().currentBuilding;

      expect(lat).toEqual(-360);
      expect(lon).toEqual(-360);
    });
  });

  describe("clearCurrentBuilding", () => {
    it("should clear building info", () => {
      store.dispatch(clearCurrentBuilding());
      const { lat, lon } = interactionsSlice().currentBuilding;

      expect(lat).toEqual(null);
      expect(lon).toEqual(null);
    });
  });

  describe("updateHoveredScheduledSection", () => {
    it("should update hovered scheduled section id to correct id", () => {
      store.dispatch(updateHoveredScheduledSection(1));

      expect(interactionsSlice().hoveredScheduledSection).toEqual({ id: 1 });
    });
  });

  describe("clearHoveredScheduledSection", () => {
    it("should clear hovered scheduled section id", () => {
      store.dispatch(clearHoveredScheduledSection());

      expect(interactionsSlice().hoveredScheduledSection).toEqual({ id: -1 });
    });
  });

  describe("updateHoveredSection", () => {
    it("should update hovered section id to correct id", () => {
      store.dispatch(updateHoveredSection(1));

      expect(interactionsSlice().hoveredSection).toEqual({ id: 1 });
    });
  });

  describe("clearHoveredSection", () => {
    it("should clear hovered section id", () => {
      store.dispatch(clearHoveredSection());

      expect(interactionsSlice().hoveredSection).toEqual({ id: -1 });
    });
  });

  describe("getSearch", () => {
    it("should get correct search string", () => {
      const state = {
        interactions: {
          searchStr: "string",
        },
      };

      const searchStr = getSearch(state);

      expect(searchStr).toEqual("string");
    });
  });

  describe("getSelectedCourse", () => {
    it("should get correct selected course id", () => {
      const state = {
        interactions: {
          selectedCourse: { id: 1 },
        },
      };

      const selectedCourse = getSelectedCourse(state);

      expect(selectedCourse).toEqual({ id: 1 });
    });
  });

  describe("getSelectedSection", () => {
    it("should get correct selected section info", () => {
      const state = {
        interactions: {
          selectedSection: { info: { title: "1" } },
        },
      };

      const selectedSection = getSelectedSection(state);

      expect(selectedSection).toEqual({ info: { title: "1" } });
    });
  });

  describe("getCurrentBuilding", () => {
    it("should get correct building info", () => {
      const state = {
        interactions: {
          currentBuilding: { lat: 1, lon: 1 },
        },
      };

      const buildingInfo = getCurrentBuilding(state);

      expect(buildingInfo).toEqual({ lat: 1, lon: 1 });
    });
  });

  describe("getHoveredScheduledSection", () => {
    it("should get correct scheduled hovered section id", () => {
      const state = {
        interactions: {
          hoveredScheduledSection: { id: 1 },
        },
      };

      const hoveredScheduledSection = getHoveredScheduledSection(state);

      expect(hoveredScheduledSection).toEqual({ id: 1 });
    });
  });

  describe("getHoveredSection", () => {
    it("should get correct hovered section id", () => {
      const state = {
        interactions: {
          hoveredSection: { id: 1 },
        },
      };

      const hoveredSection = getHoveredSection(state);

      expect(hoveredSection).toEqual({ id: 1 });
    });
  });
});
