import { binAndStyle } from "./layoutUtils";

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

describe("layoutUtils", () => {
  describe("binning", () => {
    it("should bin single course into single day", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][10]).toHaveLength(1);
    });

    it("should bin single course into multiple days", () => {
      const courses = [
        { meeting_days: "MoTuFr", start_time: "10:00", end_time: "11:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Mo"][10]).toHaveLength(1);
      expect(bins["Tu"][10]).toHaveLength(1);
      expect(bins["We"][10]).toHaveLength(0);
      expect(bins["Fr"][10]).toHaveLength(1);
    });

    it("should bin multiple courses into single day", () => {
      const courses = [
        { meeting_days: "Mo", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Mo", start_time: "11:00", end_time: "12:00" },
        { meeting_days: "Mo", start_time: "12:00", end_time: "13:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Mo"][10]).toHaveLength(1);
      expect(bins["Mo"][11]).toHaveLength(1);
      expect(bins["Mo"][12]).toHaveLength(1);
      expect(bins["Mo"][13]).toHaveLength(0);
    });

    it("should bin multiple courses into single hour", () => {
      const courses = [
        { meeting_days: "Mo", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Mo", start_time: "10:30", end_time: "12:00" },
        { meeting_days: "Mo", start_time: "10:00", end_time: "13:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Mo"][10]).toHaveLength(3);
      expect(bins["Mo"][11]).toHaveLength(0);
    });
  });

  describe("styling", () => {
    it("should style single course to fill entire width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][10][0].style.width).toEqual("100%");
    });

    it("should style multiple non-intersecting course to fill entire width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Tu", start_time: "11:00", end_time: "12:00" },
        { meeting_days: "Tu", start_time: "12:00", end_time: "13:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][10][0].style.width).toEqual("100%");
      expect(bins["Tu"][11][0].style.width).toEqual("100%");
      expect(bins["Tu"][12][0].style.width).toEqual("100%");
    });

    it("should style 2 intersecting course to fill 50% width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Tu", start_time: "10:30", end_time: "12:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][10][0].style.width).toEqual("50%");
      expect(bins["Tu"][10][1].style.width).toEqual("50%");
    });

    it("should style 4 intersecting course to fill 25% width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Tu", start_time: "10:30", end_time: "12:00" },
        { meeting_days: "Tu", start_time: "10:00", end_time: "12:00" },
        { meeting_days: "Tu", start_time: "9:01", end_time: "12:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][9][0].style.width).toEqual("25%");
      expect(bins["Tu"][10][0].style.width).toEqual("25%");
      expect(bins["Tu"][10][1].style.width).toEqual("25%");
      expect(bins["Tu"][10][2].style.width).toEqual("25%");
    });

    it("should style 3 offset intersecting courses to fill 50% width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Tu", start_time: "10:00", end_time: "10:30" },
        { meeting_days: "Tu", start_time: "10:30", end_time: "11:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][10][0].style.width).toEqual("50%");
      expect(bins["Tu"][10][1].style.width).toEqual("50%");
      expect(bins["Tu"][10][2].style.width).toEqual("50%");
    });

    it("should style courses on same hour but different days to fill entire width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Th", start_time: "10:00", end_time: "11:00" },
      ];

      const bins = binAndStyle(courses, days, hours);

      expect(bins["Tu"][10][0].style.width).toEqual("100%");
      expect(bins["Th"][10][0].style.width).toEqual("100%");
    });
  });
});
