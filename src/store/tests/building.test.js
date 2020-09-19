import { loadBuilding } from "./../actions/buildingActions";
import { getCurrentBuilding } from "./../reducers/interactions";
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
});

describe("buildingSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadBuilding + getCurrentBuilding", () => {
    it("should load correct lat lon", async () => {
      const room = { building_id: 1 };

      await store.dispatch(loadBuilding(room));

      expect(getCurrentBuilding(store.getState()).lat).toBe(1);
      expect(getCurrentBuilding(store.getState()).lon).toBe(2);
    });

    it("should load non null lat lon even if building service gives null lat lon", async () => {
      const room = { building_id: 0 };

      await store.dispatch(loadBuilding(room));

      expect(getCurrentBuilding(store.getState()).lat).not.toBeNull();
      expect(getCurrentBuilding(store.getState()).lon).not.toBeNull();
    });

    it("should load non null lat lon even if building service gives undefined", async () => {
      const room = { building_id: -1 };

      await store.dispatch(loadBuilding(room));

      expect(getCurrentBuilding(store.getState()).lat).not.toBeNull();
      expect(getCurrentBuilding(store.getState()).lon).not.toBeNull();
    });
  });
});
