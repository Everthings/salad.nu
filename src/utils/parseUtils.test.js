import {
  parseTime,
  parseTime2Minutes,
  parseTime2Standard,
  parseMeetingDays,
} from "./parseUtils";

describe("parseUtils", () => {
  describe("parseTime", () => {
    it("should parse '1:00' to 1 and 0", () => {
      const time = "1:00";

      const { hour, minute } = parseTime(time);

      expect(hour).toEqual(1);
      expect(minute).toEqual(0);
    });

    it("should parse '12:00' to 12 and 0", () => {
      const time = "12:00";

      const { hour, minute } = parseTime(time);

      expect(hour).toEqual(12);
      expect(minute).toEqual(0);
    });

    it("should parse '13:50' to 13 and 0", () => {
      const time = "13:50";

      const { hour, minute } = parseTime(time);

      expect(hour).toEqual(13);
      expect(minute).toEqual(50);
    });
  });

  describe("parseTime2Minutes", () => {
    it("should parse '1:00' to 60", () => {
      const time = "1:00";

      const seconds = parseTime2Minutes(time);

      expect(seconds).toEqual(60);
    });

    it("should parse '1:15' to 75", () => {
      const time = "1:15";

      const seconds = parseTime2Minutes(time);

      expect(seconds).toEqual(75);
    });

    it("should parse '13:30' to 810", () => {
      const time = "13:30";

      const seconds = parseTime2Minutes(time);

      expect(seconds).toEqual(810);
    });
  });

  describe("parseTime2Standard", () => {
    it("should parse '1:00' to '1:00am'", () => {
      const time = "1:00";

      const timeTxt = parseTime2Standard(time);

      expect(timeTxt).toEqual("1:00am");
    });

    it("should parse '12:00' to '12:00pm'", () => {
      const time = "12:00";

      const timeTxt = parseTime2Standard(time);

      expect(timeTxt).toEqual("12:00pm");
    });

    it("should parse '12:29' to '12:29pm'", () => {
      const time = "12:29";

      const timeTxt = parseTime2Standard(time);

      expect(timeTxt).toEqual("12:29pm");
    });

    it("should parse '13:41' to '1:41pm'", () => {
      const time = "13:41";

      const timeTxt = parseTime2Standard(time);

      expect(timeTxt).toEqual("1:41pm");
    });
  });

  describe("parseMeetingDays", () => {
    it("should parse 'Mo' to ['Mo']", () => {
      const meetingDays = "Mo";

      const days = parseMeetingDays(meetingDays);

      expect(days).toEqual(["Mo"]);
    });

    it("should parse empty string to empty list", () => {
      const meetingDays = "";

      const days = parseMeetingDays(meetingDays);

      expect(days).toEqual([]);
    });

    it("should parse 'MoTuWeThFrSaSu' to ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']", () => {
      const meetingDays = "MoTuWeThFrSaSu";

      const days = parseMeetingDays(meetingDays);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]);
    });
  });
});
