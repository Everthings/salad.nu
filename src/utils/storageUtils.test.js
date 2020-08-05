import { loadState, saveState } from "./storageUtils";

describe("storageUtils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveState", () => {
    it("should save empty json to localStorage", () => {
      const saveItem = { entities: { schedule: [], theme: "green" } };

      saveState(saveItem);

      expect(localStorage.__STORE__["schedule"]).toBe("[]");
    });

    it("should save filled json to localStorage", () => {
      const saveItem = {
        entities: {
          schedule: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
          theme: "green",
        },
      };

      saveState(saveItem);

      expect(localStorage.__STORE__["schedule"]).toBe(
        '[{"unique_id":1},{"unique_id":2},{"unique_id":3}]'
      );
    });

    it("should save green theme to localStorage", () => {
      const saveItem = { entities: { schedule: [], theme: "green" } };

      saveState(saveItem);

      expect(localStorage.__STORE__["theme"]).toBe(`"green"`);
    });

    it("should save dark theme to localStorage", () => {
      const saveItem = { entities: { schedule: [], theme: "dark" } };

      saveState(saveItem);

      expect(localStorage.__STORE__["theme"]).toBe(`"dark"`);
    });
  });

  describe("loadState", () => {
    it("should return undefined when loading from nonexistent key in localStorage", () => {
      const loadedItem = loadState();

      expect(loadedItem).toEqual(undefined);
    });

    it("should load empty json from localStorage", () => {
      const saveItem = {
        entities: {
          schedule: [],
          theme: "green",
        },
      };

      saveState(saveItem);
      const loadedItem = loadState();

      expect(loadedItem).toEqual(saveItem);
    });

    it("should load filled json from localStorage", () => {
      const saveItem = {
        entities: {
          schedule: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
          theme: "green",
        },
      };

      saveState(saveItem);
      const loadedItem = loadState();

      expect(loadedItem).toEqual(saveItem);
    });
  });
});
