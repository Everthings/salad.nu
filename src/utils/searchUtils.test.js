import {
  getParts,
  getMaximumPartLength,
  strMatchesAllParts,
} from "./searchUtils";

describe("searchUtils", () => {
  describe("getParts", () => {
    it("should give empty list for empty string", () => {
      const str = "";

      const parts = getParts(str);

      expect(parts).toHaveLength(0);
    });

    it("should give empty list for string with only spaces", () => {
      const str = "     ";

      const parts = getParts(str);

      expect(parts).toHaveLength(0);
    });

    it("should give ['hello', 'world'] for string '  hello   world  '", () => {
      const str = "  hello   world  ";

      const parts = getParts(str);

      expect(parts).toEqual(["hello", "world"]);
    });
  });

  describe("getMaximumPartLength", () => {
    it("should give 0 for no parts", () => {
      const str = "";
      const parts = getParts(str);

      const length = getMaximumPartLength(parts);

      expect(length).toEqual(0);
    });

    it("should give 5 for 'hello world'", () => {
      const str = "";
      const parts = getParts(str);

      const length = getMaximumPartLength(parts);

      expect(length).toEqual(0);
    });

    it("should give 5 for ' hello world'", () => {
      const str = " hello world";
      const parts = getParts(str);

      const length = getMaximumPartLength(parts);

      expect(length).toEqual(5);
    });

    it("should give 6 for ' hello    worlds  '", () => {
      const str = " hello    worlds  ";
      const parts = getParts(str);

      const length = getMaximumPartLength(parts);

      expect(length).toEqual(6);
    });
  });

  describe("strMatchesAllParts", () => {
    it("should give false for empty string with non-empty list", () => {
      const str = "";
      const parts = ["test"];

      const match = strMatchesAllParts(str, parts);

      expect(match).toEqual(false);
    });

    it("should give true for empty string with empty list", () => {
      const str = "";
      const parts = [];

      const match = strMatchesAllParts(str, parts);

      expect(match).toEqual(true);
    });

    it("should give true for string with empty list", () => {
      const str = "test";
      const parts = [];

      const match = strMatchesAllParts(str, parts);

      expect(match).toEqual(true);
    });

    it("should give true for string with part equal to the string", () => {
      const str = "tests";
      const parts = ["tests"];

      const match = strMatchesAllParts(str, parts);

      expect(match).toEqual(true);
    });

    it("should give true for string with part substring of the string", () => {
      const str = "tests";
      const parts = ["test"];

      const match = strMatchesAllParts(str, parts);

      expect(match).toEqual(true);
    });

    it("should give true for string with parts that are substrings of the string", () => {
      const str = "tests";
      const parts = ["te", "st", "ts"];

      const match = strMatchesAllParts(str, parts);

      expect(match).toEqual(true);
    });
  });
});
