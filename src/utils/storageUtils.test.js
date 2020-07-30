import { loadState, saveState } from "./storageUtils";

describe("storageUtils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveState", () => {
    it("should save empty json to localStorage", () => {
      const saveItem = { entities: { schedule: [] } };

      saveState(saveItem);

      expect(localStorage.__STORE__["state"]).toBe("[]");
    });

    it("should save filled json to localStorage", () => {
      const saveItem = {
        entities: {
          schedule: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
        },
      };

      saveState(saveItem);

      expect(localStorage.__STORE__["state"]).toBe(
        '[{"unique_id":1},{"unique_id":2},{"unique_id":3}]'
      );
    });
  });

  describe("loadState", () => {
    it("should load empty json from localStorage", () => {
      const saveItem = {
        entities: {
          schedule: [],
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
        },
      };

      saveState(saveItem);
      const loadedItem = loadState();

      expect(loadedItem).toEqual(saveItem);
    });
  });
});
