import { getColumns, exportSchedule2CSV } from "./exportUtils";

describe("exportUtils", () => {
  describe("exportSchedule2CSV", () => {
    it("should return only columns if no sections in schedule", () => {
      const scheduleData = [];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([getColumns()]);
    });

    it("should return only columns if sections have incomplete data", () => {
      const scheduleData = [
        { start_date: "10/12/2020" },
        { end_date: "10/12/2020" },
        { start_time: "10:30" },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([getColumns()]);
    });

    it("should return empty location if room and building_name not available", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-10-01",
          meeting_days: "Mo",
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([
        getColumns(),
        ["COMP_SCI 101-0", "09-30-2019", "10:00", "09-30-2019", "11:00", ""],
      ]);
    });

    it("should return correct csv if only one class on one day", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-10-01",
          meeting_days: "Mo",
          room: { building_name: "Somewhere" },
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([
        getColumns(),
        [
          "COMP_SCI 101-0",
          "09-30-2019",
          "10:00",
          "09-30-2019",
          "11:00",
          "Somewhere",
        ],
      ]);
    });

    it("should return correct csv if only one class on multiple days", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-10-01",
          meeting_days: "MoWe",
          room: { building_name: "Somewhere" },
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([
        getColumns(),
        [
          "COMP_SCI 101-0",
          "09-30-2019",
          "10:00",
          "09-30-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-25-2019",
          "10:00",
          "09-25-2019",
          "11:00",
          "Somewhere",
        ],
      ]);
    });

    it("should return correct csv if end date falls on a class day", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-10-07",
          meeting_days: "Mo",
          room: { building_name: "Somewhere" },
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([
        getColumns(),
        [
          "COMP_SCI 101-0",
          "09-30-2019",
          "10:00",
          "09-30-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "10-07-2019",
          "10:00",
          "10-07-2019",
          "11:00",
          "Somewhere",
        ],
      ]);
    });

    it("should return only columns if end date before start date", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-09-23",
          meeting_days: "Mo",
          room: { building_name: "Somewhere" },
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([getColumns()]);
    });

    it("should return only columns if meetings days are invalid", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-09-23",
          meeting_days: "WhaAhh",
          room: { building_name: "Somewhere" },
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([getColumns()]);
    });

    it("should return correct csv if all days of the week", () => {
      const scheduleData = [
        {
          subject: "COMP_SCI",
          number: "101-0",
          start_time: "10:00",
          end_time: "11:00",
          start_date: "2019-09-24",
          end_date: "2019-09-30",
          meeting_days: "SuMoTuWeThFrSa",
          room: { building_name: "Somewhere" },
        },
      ];

      const csvData = exportSchedule2CSV(scheduleData);

      expect(csvData).toEqual([
        getColumns(),
        [
          "COMP_SCI 101-0",
          "09-29-2019",
          "10:00",
          "09-29-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-30-2019",
          "10:00",
          "09-30-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-24-2019",
          "10:00",
          "09-24-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-25-2019",
          "10:00",
          "09-25-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-26-2019",
          "10:00",
          "09-26-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-27-2019",
          "10:00",
          "09-27-2019",
          "11:00",
          "Somewhere",
        ],
        [
          "COMP_SCI 101-0",
          "09-28-2019",
          "10:00",
          "09-28-2019",
          "11:00",
          "Somewhere",
        ],
      ]);
    });
  });
});
