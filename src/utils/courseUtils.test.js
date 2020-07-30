import { getName, getFullName } from "./courseUtils";

describe("courseUtils", () => {
  describe("getName", () => {
    it("should return correct string when course information present", () => {
      const course = {
        subject: "COMP_SCI",
        number: "101-0",
      };

      const name = getName(course);

      expect(name).toEqual("COMP_SCI 101-0");
    });

    it("should return empty string when no information present", () => {
      const course = {};

      const name = getName(course);

      expect(name).toEqual("");
    });

    it("should return empty string when null passed", () => {
      const course = null;

      const name = getName(course);

      expect(name).toEqual("");
    });
  });

  describe("getFullName", () => {
    it("should return correct string when course information present", () => {
      const course = {
        subject: "COMP_SCI",
        number: "101-0",
        title: "a course at school",
      };

      const name = getFullName(course);

      expect(name).toEqual("COMP_SCI 101-0 a course at school");
    });

    it("should return empty string when no information present", () => {
      const course = {};

      const name = getFullName(course);

      expect(name).toEqual("");
    });

    it("should return empty string when null passed", () => {
      const course = null;

      const name = getFullName(course);

      expect(name).toEqual("");
    });
  });
});
