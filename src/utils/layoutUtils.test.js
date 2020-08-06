import { binAndStyle } from "./layoutUtils";

describe("layoutUtils", () => {
  describe("computeDays", () => {
    it("should give all weekdays when no no courses", () => {
      const courses = [];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr"]);
    });

    it("should give all weekdays when no meeting_days is null", () => {
      const courses = [{ start_time: "10:00", end_time: "11:00" }];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr"]);
    });

    it("should give all weekdays when no meeting_days is empty string", () => {
      const courses = [
        { meeting_days: "", start_time: "10:00", end_time: "11:00" },
      ];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr"]);
    });

    it("should give all weekdays when no meeting_days is only weekdays", () => {
      const courses = [
        { meeting_days: "MoWeFr", start_time: "10:00", end_time: "11:00" },
      ];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr"]);
    });

    it("should give all weekdays plus Su when no meeting_days is 'Su'", () => {
      const courses = [
        { meeting_days: "Su", start_time: "10:00", end_time: "11:00" },
      ];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr", "Su"]);
    });

    it("should give all weekdays plus Sa, Su when no meeting_days is 'SaSu'", () => {
      const courses = [
        { meeting_days: "SaSu", start_time: "10:00", end_time: "11:00" },
      ];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]);
    });

    it("should give all weekdays when no meeting_days is 'ThisIsNotADay'", () => {
      const courses = [
        {
          meeting_days: "ThisIsNotADay",
          start_time: "10:00",
          end_time: "11:00",
        },
      ];

      const { days } = binAndStyle(courses);

      expect(days).toEqual(["Mo", "Tu", "We", "Th", "Fr"]);
    });
  });

  describe("computeHours", () => {
    it("should give 9-18 when no courses", () => {
      const courses = [];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it("should give 9-18 when course times within range", () => {
      const courses = [
        { start_time: "10:00", end_time: "11:00" },
        { start_time: "9:00", end_time: "15:00" },
        { start_time: "10:00", end_time: "16:00" },
        { start_time: "17:00", end_time: "18:00" },
      ];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it("should give 8-18 when course times earlier than range", () => {
      const courses = [
        { start_time: "8:00", end_time: "11:00" },
        { start_time: "9:00", end_time: "15:00" },
        { start_time: "10:00", end_time: "16:00" },
        { start_time: "17:00", end_time: "18:00" },
      ];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it("should give 9-20 when course times later than range", () => {
      const courses = [
        { start_time: "9:00", end_time: "20:00" },
        { start_time: "9:00", end_time: "15:00" },
        { start_time: "10:00", end_time: "16:00" },
        { start_time: "17:00", end_time: "18:00" },
      ];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

    it("should give 8-18 when course starts at 8:01", () => {
      const courses = [{ start_time: "8:01", end_time: "18:00" }];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it("should give 8-18 when course starts at 8:59", () => {
      const courses = [{ start_time: "8:59", end_time: "18:00" }];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it("should give 9-20 when course ends exactly at 20:00", () => {
      const courses = [{ start_time: "9:00", end_time: "20:00" }];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

    it("should give 9-21 when course ends exactly at 20:01", () => {
      const courses = [{ start_time: "9:00", end_time: "20:01" }];

      const { hours } = binAndStyle(courses);

      expect(hours).toEqual([
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
      ]);
    });
  });

  describe("binning", () => {
    it("should bin single course into single day", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
      ];

      const { bins } = binAndStyle(courses);

      expect(bins["Tu"][10]).toHaveLength(1);
    });

    it("should bin single course into multiple days", () => {
      const courses = [
        { meeting_days: "MoTuFr", start_time: "10:00", end_time: "11:00" },
      ];

      const { bins } = binAndStyle(courses);

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

      const { bins } = binAndStyle(courses);

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

      const { bins } = binAndStyle(courses);

      expect(bins["Mo"][10]).toHaveLength(3);
      expect(bins["Mo"][11]).toHaveLength(0);
    });
  });

  describe("styling", () => {
    it("should style single course to fill entire width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
      ];

      const { bins } = binAndStyle(courses);

      expect(bins["Tu"][10][0].style.width).toEqual("100%");
    });

    it("should style multiple non-intersecting course to fill entire width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Tu", start_time: "11:00", end_time: "12:00" },
        { meeting_days: "Tu", start_time: "12:00", end_time: "13:00" },
      ];

      const { bins } = binAndStyle(courses);

      expect(bins["Tu"][10][0].style.width).toEqual("100%");
      expect(bins["Tu"][11][0].style.width).toEqual("100%");
      expect(bins["Tu"][12][0].style.width).toEqual("100%");
    });

    it("should style 2 intersecting course to fill 50% width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Tu", start_time: "10:30", end_time: "12:00" },
      ];

      const { bins } = binAndStyle(courses);

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

      const { bins } = binAndStyle(courses);

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

      const { bins } = binAndStyle(courses);

      expect(bins["Tu"][10][0].style.width).toEqual("50%");
      expect(bins["Tu"][10][1].style.width).toEqual("50%");
      expect(bins["Tu"][10][2].style.width).toEqual("50%");
    });

    it("should style courses on same hour but different days to fill entire width", () => {
      const courses = [
        { meeting_days: "Tu", start_time: "10:00", end_time: "11:00" },
        { meeting_days: "Th", start_time: "10:00", end_time: "11:00" },
      ];

      const { bins } = binAndStyle(courses);

      expect(bins["Tu"][10][0].style.width).toEqual("100%");
      expect(bins["Th"][10][0].style.width).toEqual("100%");
    });
  });
});
