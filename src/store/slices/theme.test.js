import { toggleTheme, getTheme } from "./theme";
import configureStore from "./../configureStore";

describe("themeSlice", () => {
  let store;

  const themeSlice = () => store.getState().theme;

  beforeEach(() => {
    store = configureStore();
  });

  describe("toggleTheme", () => {
    it("should change theme from green to dark", () => {
      store.dispatch(toggleTheme("green"));

      expect(themeSlice()).toEqual({ currentTheme: "dark" });
    });

    it("should stay default theme from dark to green", () => {
      store.dispatch(toggleTheme("dark"));

      expect(themeSlice()).toEqual({ currentTheme: "green" });
    });
  });

  describe("getTheme", () => {
    it("should return correct theme", () => {
      const state = {
        theme: {
          currentTheme: "green",
        },
      };

      const theme = getTheme(state);

      expect(theme).toEqual(state.theme.currentTheme);
    });
  });
});
