import { toggleTheme } from "./../actions/themeActions";
import { getTheme } from "./../reducers/theme";
import configureStore from "./../configureStore";

describe("themeSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("toggleTheme + getTheme", () => {
    it("should change theme from green to dark", () => {
      store.dispatch(toggleTheme());

      expect(getTheme(store.getState())).toEqual("dark");
    });

    it("should stay default theme twice from green to dark to green", () => {
      store.dispatch(toggleTheme());
      store.dispatch(toggleTheme());

      expect(getTheme(store.getState())).toEqual("green");
    });
  });
});
