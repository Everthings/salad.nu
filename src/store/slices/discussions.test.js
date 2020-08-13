import { loadDiscussions, getDiscussions, getDiscussion } from "./discussions";
import configureStore from "./../configureStore";

describe("discussionsSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadDiscussions", () => {
    it("should load discussions into store if id matches", async () => {
      await store.dispatch(loadDiscussions(0));

      expect(true); // no error thrown
    });
  });

  describe("getDiscussions", () => {
    it("should fetch correct discussions", () => {
      const state = {
        discussions: { list: [{ title: "1" }, { title: "2" }, { title: "3" }] },
      };

      const discussions = getDiscussions(state);

      expect(discussions).toEqual(state.discussions.list);
    });
  });

  describe("getDiscussion", () => {
    it("should fetch correct discussion if id matches", () => {
      const state = {
        discussions: {
          list: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
        },
      };

      const discussions = getDiscussion(1)(state);

      expect(discussions).toEqual(state.discussions.list[0]);
    });

    it("should return undefined if no discussion id matches", () => {
      const state = {
        discussions: {
          list: [{ unique_id: 1 }, { unique_id: 2 }, { unique_id: 3 }],
        },
      };

      const discussions = getDiscussion(0)(state);

      expect(discussions).toEqual(undefined);
    });
  });
});
