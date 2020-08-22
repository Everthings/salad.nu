import { getSearch, updateSearch } from "./search";
import configureStore from "./../configureStore";

describe("searchSlice", () => {
  let store;

  const searchSlice = () => store.getState().search;

  beforeEach(() => {
    store = configureStore();
  });

  describe("updateSearch", () => {
    it("should update to empty string if empty string is passed", () => {
      store.dispatch(updateSearch(""));

      expect(searchSlice().searchStr).toEqual("");
    });

    it("should update to string if string is passed", () => {
      store.dispatch(updateSearch("string"));

      expect(searchSlice().searchStr).toEqual("string");
    });
  });

  describe("getSearch", () => {
    it("should get correct search string", () => {
      const state = {
        search: {
          searchStr: "string",
        },
      };

      const searchStr = getSearch(state);

      expect(searchStr).toEqual("string");
    });
  });
});
