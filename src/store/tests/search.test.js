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
    it("should update to empty string if empty string is passed", async () => {
      await store.dispatch(updateSearch("", "", "", ""));

      expect(getSearch(store.getState())).toEqual("");
    });

    it("should update to string if string is passed", async () => {
      const search = "string";

      await store.dispatch(updateSearch("", search, "", ""));

      expect(getSearch(store.getState())).toEqual(search);
    });
  });

  describe("updateSchool + getSchool", () => {
    it("should update to school symbol is symbol is passed", async () => {
      const school = "MEAS";

      await store.dispatch(updateSchool(school));

      expect(getSchool(store.getState())).toEqual(school);
    });
  });

  describe("updateSubject + getSubject", () => {
    it("should update to subject symbol is symbol is passed", async () => {
      const subject = "COMP_SCI";

      await store.dispatch(updateSubject("", subject));

      expect(getSubject(store.getState())).toEqual(subject);
    });
  });

  describe("clearSchool + getSchool + getSubject", () => {
    it("should clear school to empty string", async () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      await store.dispatch(updateSchool(school));
      await store.dispatch(updateSubject(school, subject));
      store.dispatch(clearSchool());

      expect(getSchool(store.getState())).toEqual("");
    });

    it("should clear subject to empty string", async () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      await store.dispatch(updateSchool(school));
      await store.dispatch(updateSubject(school, subject));
      store.dispatch(clearSchool());

      expect(getSubject(store.getState())).toEqual("");
    });
  });

  describe("clearSubject + getSubject", () => {
    it("should clear subject to empty string", async () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      await store.dispatch(updateSchool(school));
      await store.dispatch(updateSubject(school, subject));
      store.dispatch(clearSubject());

      expect(getSubject(store.getState())).toEqual("");
    });

    it("should keep school the same", async () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      await store.dispatch(updateSchool(school));
      await store.dispatch(updateSubject(school, subject));
      store.dispatch(clearSubject());

      expect(getSchool(store.getState())).toEqual(school);
    });
  });
});
