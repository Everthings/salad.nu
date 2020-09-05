import {
  filterCoursesByStr,
  filterCoursesBySchoolSubject,
  getMaximumStrPartLength,
} from "./searchUtils";

describe("searchUtils", () => {
  describe("filterCoursesByStr", () => {
    it("should give entire list for empty search string", () => {
      const searchStr = "";
      const courses = [
        { title: "1", subject: "COMP_SCI", number: "101" },
        { title: "2", subject: "COMP_SCI", number: "110" },
        { title: "3", subject: "COMP_SCI", number: "111" },
      ];

      const filtered = filterCoursesByStr(searchStr, courses);

      expect(filtered).toEqual(courses);
    });

    it("should give empty list for empty search string with empty list", () => {
      const searchStr = "";
      const courses = [];

      const filtered = filterCoursesByStr(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list for valid search string with empty list", () => {
      const searchStr = "some search";
      const courses = [];

      const filtered = filterCoursesByStr(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list if no courses match search string", () => {
      const searchStr = "some search";
      const courses = [
        { title: "1", subject: "COMP_SCI", number: "101" },
        { title: "2", subject: "COMP_SCI", number: "110" },
        { title: "3", subject: "COMP_SCI", number: "111" },
      ];
      const filtered = filterCoursesByStr(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list if no courses match full search string", () => {
      const searchStr = "some search";
      const courses = [
        { title: "some", subject: "course", number: "#" },
        { title: "search", subject: "course", number: "#" },
        { title: "1", subject: "subject", number: "#" },
      ];
      const filtered = filterCoursesByStr(searchStr, courses);

      expect(filtered).toEqual([]);
    });

    it("should give right courses if some courses match full search string", () => {
      const searchStr = "some search";
      const courses = [
        { title: "some", subject: "search", number: "#" },
        { title: "search some", subject: "subject", number: "#" },
        { title: "1", subject: "subject", number: "#" },
      ];
      const filtered = filterCoursesByStr(searchStr, courses);

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
      const filtered = filterCoursesByStr(searchStr, courses);

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
      const filtered = filterCoursesByStr(searchStr, courses);

      expect(filtered).toEqual([
        { title: "-", subject: "-", number: "some search 404" },
        { title: "search some 404", subject: "subject", number: "#" },
      ]);
    });
  });

  describe("filterCoursesBySchoolSubject", () => {
    const courses = [
      { title: "1", school: "MEAS", subject: "COMP_SCI" },
      { title: "2", school: "MEAS", subject: "BMD_ENG" },
      { title: "3", school: "WCAS", subject: "PHIL" },
    ];

    it("should give entire list if school and subject are empty strings", () => {
      const school = "";
      const subject = "";

      const filtered = filterCoursesBySchoolSubject(school, subject, courses);

      expect(filtered).toEqual(courses);
    });

    it("should give courses matching school if school is specified but subject is empty string", () => {
      const school = "MEAS";
      const subject = "";

      const filtered = filterCoursesBySchoolSubject(school, subject, courses);

      expect(filtered).toEqual([
        { title: "1", school: "MEAS", subject: "COMP_SCI" },
        { title: "2", school: "MEAS", subject: "BMD_ENG" },
      ]);
    });

    it("should give courses matching school and subject if both school and subjects are specified", () => {
      const school = "MEAS";
      const subject = "COMP_SCI";

      const filtered = filterCoursesBySchoolSubject(school, subject, courses);

      expect(filtered).toEqual([
        { title: "1", school: "MEAS", subject: "COMP_SCI" },
      ]);
    });

    it("should give empty list if school does not exist", () => {
      const school = "THIS DOES NOT EXIST";
      const subject = "";

      const filtered = filterCoursesBySchoolSubject(school, subject, courses);

      expect(filtered).toEqual([]);
    });

    it("should give empty list if subject does not exist", () => {
      const school = "MEAS";
      const subject = "THIS DOES NOT EXIST";

      const filtered = filterCoursesBySchoolSubject(school, subject, courses);

      expect(filtered).toEqual([]);
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
