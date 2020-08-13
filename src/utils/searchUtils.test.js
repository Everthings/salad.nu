import { filterCourses, getMaximumStrPartLength } from "./searchUtils";

describe("searchUtils", () => {
  describe("filterCourses", () => {
    it("should give entire list for empty search string", () => {
      const searchStr = "";
      const courses = [
        { title: "1", subject: "COMP_SCI", number: "101" },
        { title: "2", subject: "COMP_SCI", number: "110" },
        { title: "3", subject: "COMP_SCI", number: "111" },
      ];

      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual(courses);
    });

    it("should give empty list for empty search string with empty list", () => {
      const searchStr = "";
      const courses = [];

      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list for valid search string with empty list", () => {
      const searchStr = "some search";
      const courses = [];

      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list if no courses match search string", () => {
      const searchStr = "some search";
      const courses = [
        { title: "1", subject: "COMP_SCI", number: "101" },
        { title: "2", subject: "COMP_SCI", number: "110" },
        { title: "3", subject: "COMP_SCI", number: "111" },
      ];
      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list if no courses match full search string", () => {
      const searchStr = "some search";
      const courses = [
        { title: "some", subject: "course", number: "#" },
        { title: "search", subject: "course", number: "#" },
        { title: "1", subject: "subject", number: "#" },
      ];
      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give right courses if some courses match full search string", () => {
      const searchStr = "some search";
      const courses = [
        { title: "some", subject: "search", number: "#" },
        { title: "search some", subject: "subject", number: "#" },
        { title: "1", subject: "subject", number: "#" },
      ];
      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([
        { title: "some", subject: "search", number: "#" },
        { title: "search some", subject: "subject", number: "#" },
      ]);
    });

    it("should order title matches behind subject matches", () => {
      const searchStr = "some search";
      const courses = [
        { title: "search some", subject: "subject", number: "#" },
        { title: "-", subject: "-", number: "some search" },

        { title: "1", subject: "subject", number: "#" },
      ];
      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([
        { title: "-", subject: "-", number: "some search" },
        { title: "search some", subject: "subject", number: "#" },
      ]);
    });

    it("should order title matches behind number matches", () => {
      const searchStr = "some search 404";
      const courses = [
        { title: "-", subject: "-", number: "some search 404" },
        { title: "search some 404", subject: "subject", number: "#" },
        { title: "1", subject: "subject", number: "#" },
      ];
      const filtered = filterCourses(searchStr, courses);

      expect(filtered).toEqual([
        { title: "-", subject: "-", number: "some search 404" },
        { title: "search some 404", subject: "subject", number: "#" },
      ]);
    });
  });

  describe("getMaximumStrPartLength", () => {
    it("should give 0 for empty string", () => {
      const str = "";

      const length = getMaximumStrPartLength(str);

      expect(length).toEqual(0);
    });

    it("should give 5 for 'hello world'", () => {
      const str = "hello world";

      const length = getMaximumStrPartLength(str);

      expect(length).toEqual(5);
    });

    it("should give 5 for ' hello world'", () => {
      const str = " hello world";

      const length = getMaximumStrPartLength(str);

      expect(length).toEqual(5);
    });

    it("should give 6 for ' hello    worlds  '", () => {
      const str = " hello    worlds  ";

      const length = getMaximumStrPartLength(str);

      expect(length).toEqual(6);
    });
  });
});
