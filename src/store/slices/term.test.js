import { loadTerm, getTerm } from "./term";
import configureStore from "./../configureStore";

describe("termSlice", () => {
  let store;

  const termSlice = () => store.getState().term;

  beforeEach(() => {
    store = configureStore();
  });

  describe("loadTerm", () => {
    it("should load term into store if id matches", async () => {
      await store.dispatch(loadTerm(4760));

      expect(termSlice().currentTerm).toEqual({
        id: 4760,
        name: "2019 Fall",
        start_date: "2019-09-24",
        end_date: "2019-12-14",
      });
    });

    it("should load undefined into store if id doesn't match", async () => {
      await store.dispatch(loadTerm(0));

      expect(termSlice().currentTerm).toEqual(undefined);
    });
  });

  describe("getTerm", () => {
    it("should return correct term info", () => {
      const state = {
        term: {
          currentTerm: {
            id: 4800,
            name: "2020 Fall",
            start_date: "2020-09-16",
            end_date: "2020-12-08",
          },
        },
      };

      const term = getTerm(state);

      expect(term).toEqual(state.term.currentTerm);
    });
  });
});
