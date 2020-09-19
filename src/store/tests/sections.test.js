import { loadSections } from "./../actions/sectionActions";
import { getSections, getSection } from "./../reducers/sections";
import * as sectionsService from "./../../fakeServices/sectionsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/sectionsService");
sectionsService.getSection.mockResolvedValue([
  { unique_id: 1 },
  { unique_id: 2 },
  { unique_id: 3 },
]);

describe("sectionsSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadSections + getSections", () => {
    it("should load sections into store", async () => {
      await store.dispatch(loadSections(0));

      expect(getSections(store.getState())).toHaveLength(3);
    });
  });

  describe("loadSections + getSection", () => {
    it("should fetch correct section if id matches", async () => {
      await store.dispatch(loadSections(0));

      expect(getSection(1)(store.getState())).not.toEqual(undefined);
    });

    it("should return empty list if no section id matches", async () => {
      await store.dispatch(loadSections(0));

      expect(getSection(0)(store.getState())).toEqual(undefined);
    });
  });
});
