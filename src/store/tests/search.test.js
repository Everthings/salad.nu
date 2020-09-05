import {
  updateSearch,
  updateSchool,
  clearSchool,
  updateSubject,
  clearSubject,
} from "./../actions/searchActions";
import { getSearch, getSchool, getSubject } from "./../reducers/search";
import * as coursesService from "./../../fakeServices/coursesService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/coursesService");
coursesService.getCourses.mockResolvedValue([]);

describe("searchSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("updateSearch + getSearch", () => {
    it("should update to empty string if empty string is passed", () => {
      store.dispatch(updateSearch(""));

      expect(getSearch(store.getState())).toEqual("");
    });

    it("should update to string if string is passed", () => {
      const search = "string";

      store.dispatch(updateSearch(search));

      expect(getSearch(store.getState())).toEqual(search);
    });
  });

  describe("updateSchool + getSchool", () => {
    it("should update to school symbol is symbol is passed", () => {
      const school = "MEAS";

      store.dispatch(updateSchool(school));

      expect(getSchool(store.getState())).toEqual(school);
    });
  });

  describe("updateSubject + getSubject", () => {
    it("should update to subject symbol is symbol is passed", () => {
      const subject = "COMP_SCI";

      store.dispatch(updateSubject(subject));

      expect(getSubject(store.getState())).toEqual(subject);
    });
  });

  describe("clearSchool + getSchool + getSubject", () => {
    it("should clear school to empty string", () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      store.dispatch(updateSchool(school));
      store.dispatch(updateSubject(subject));
      store.dispatch(clearSchool());

      expect(getSchool(store.getState())).toEqual("");
    });

    it("should clear subject to empty string", () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      store.dispatch(updateSchool(school));
      store.dispatch(updateSubject(subject));
      store.dispatch(clearSchool());

      expect(getSubject(store.getState())).toEqual("");
    });
  });

  describe("clearSubject + getSubject", () => {
    it("should clear subject to empty string", () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      store.dispatch(updateSchool(school));
      store.dispatch(updateSubject(subject));
      store.dispatch(clearSubject());

      expect(getSubject(store.getState())).toEqual("");
    });

    it("should keep school the same", () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      store.dispatch(updateSchool(school));
      store.dispatch(updateSubject(subject));
      store.dispatch(clearSubject());

      expect(getSchool(store.getState())).toEqual(school);
    });
  });
});
