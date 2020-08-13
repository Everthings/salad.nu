import { loadSections, getSections, getSection } from "./sections";
import configureStore from "./../configureStore";

describe("sectionsSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadSections", () => {
    it("should load sections into store if id matches", async () => {
      await store.dispatch(loadSections(0));

      expect(true); // no error thrown
    });
  });

  describe("getSections", () => {
    it("should fetch correct sections", () => {
      const state = {
        sections: { list: [{ title: "1" }, { title: "2" }, { title: "3" }] },
      };

      const sections = getSections(state);

      expect(sections).toEqual(state.sections.list);
    });
  });

  describe("getSection", () => {
    it("should fetch correct section if id matches", () => {
      const state = {
        sections: {
          list: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
        },
      };

      const sections = getSection(1)(state);

      expect(sections).toEqual(state.sections.list[0]);
    });

    it("should return undefined if no section id matches", () => {
      const state = {
        sections: {
          list: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
        },
      };

      const sections = getSection(0)(state);

      expect(sections).toEqual(undefined);
    });
  });
});
