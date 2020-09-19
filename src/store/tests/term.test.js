import { loadTerm } from "./../actions/termActions";
import { getTerm } from "./../reducers/term";
import * as termsService from "./../../fakeServices/termsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/termsService");
termsService.getTerm.mockImplementation((id) => {
  if (id === 4760) {
    return {
      id: 4760,
      name: "2019 Fall",
      start_date: "2019-09-24",
      end_date: "2019-12-14",
    };
  }

  return undefined;
});

describe("termSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadTerm + getTerm", () => {
    it("should load term into store if id matches", async () => {
      await store.dispatch(loadTerm(4760));

      expect(getTerm(store.getState())).toEqual({
        id: 4760,
        name: "2019 Fall",
        start_date: "2019-09-24",
        end_date: "2019-12-14",
      });
    });

    it("should load undefined into store if id doesn't match", async () => {
      await store.dispatch(loadTerm(0));

      expect(getTerm(store.getState())).toEqual(undefined);
    });
  });
});
