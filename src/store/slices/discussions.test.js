import { loadDiscussions, getDiscussions, getDiscussion } from "./discussions";
import * as discussionsService from "./../../fakeServices/discussionsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/discussionsService");
discussionsService.getDiscussion.mockResolvedValue([
  { unique_id: 1 },
  { unique_id: 2 },
  { unique_id: 3 },
]);

describe("discussionsSlice", () => {
  let store;

  const discussionsSlice = () => store.getState().discussions;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadDiscussions", () => {
    it("should load discussions into store", async () => {
      await store.dispatch(loadDiscussions(0));

      expect(discussionsSlice().list).toHaveLength(3);
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
