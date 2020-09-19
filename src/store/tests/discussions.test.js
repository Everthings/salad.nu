import { loadDiscussions } from "./../actions/discussionActions";
import { getDiscussions, getDiscussion } from "./../reducers/discussions";
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

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadDiscussions + getDiscussions", () => {
    it("should load discussions into store", async () => {
      await store.dispatch(loadDiscussions(0));

      expect(getDiscussions(store.getState())).toHaveLength(3);
    });
  });

  describe("loadDiscussions + getDiscussion", () => {
    it("should get specific discussion if id matches", async () => {
      await store.dispatch(loadDiscussions(0));

      expect(getDiscussion(1)(store.getState())).not.toEqual(undefined);
    });

    it("should get null if id doesn't match", async () => {
      await store.dispatch(loadDiscussions(0));

      expect(getDiscussion(0)(store.getState())).toEqual(undefined);
    });
  });
});
