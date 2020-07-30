import { getColor } from "./colorUtils";

describe("colorUtils", () => {
  describe("getColor", () => {
    it("should give same color for same inputs", () => {
      const str1 = "1010101";
      const color1 = getColor(str1);

      const str2 = "1010101";
      const color2 = getColor(str2);

      expect(color1).toEqual(color2);
    });

    it("should give different color for slightly inputs", () => {
      const str1 = "1010101";
      const color1 = getColor(str1);

      const str2 = "1010100";
      const color2 = getColor(str2);

      expect(color1).not.toEqual(color2);
    });

    it("should give color for empty string", () => {
      const str = "";
      const color = getColor(str);

      expect(color);
    });

    it("should give color for long string", () => {
      const str =
        "This is a very long string. This is a very long string. This is a very long string. This is a very long string. This is a very long string ";
      const color = getColor(str);

      expect(color);
    });
  });
});
