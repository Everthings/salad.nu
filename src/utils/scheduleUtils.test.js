import { convertHour2Text } from "./scheduleUtils";

describe("scheduleUtils", () => {
  describe("convertHour2Text", () => {
    it("should print '1 am' when passed 1", () => {
      const hour = 1;

      const hourTxt = convertHour2Text(hour);

      expect(hourTxt).toEqual("1 am");
    });

    it("should print '12 pm' when passed 12", () => {
      const hour = 12;

      const hourTxt = convertHour2Text(hour);

      expect(hourTxt).toEqual("12 pm");
    });

    it("should print '1 pm' when passed 13", () => {
      const hour = 13;

      const hourTxt = convertHour2Text(hour);

      expect(hourTxt).toEqual("1 pm");
    });
  });
});
