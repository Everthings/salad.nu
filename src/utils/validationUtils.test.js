const { hasValidDateTime } = require("./validationUtils");

describe("validationUtils", () => {
  describe("hasValidDateTime", () => {
    it("should return false if start_time is empty string", () => {
      const section = {
        meeting_days: "MoWe",
        start_time: "",
        end_time: "2:00",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(false);
    });

    it("should return false if end_time is empty string", () => {
      const section = {
        meeting_days: "Mo",
        start_time: "1:00",
        end_time: "",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(false);
    });

    it("should return false if meeting_days is empty string", () => {
      const section = {
        meeting_days: "",
        start_time: "1:00",
        end_time: "2:00",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(false);
    });

    it("should return true if all fields valid", () => {
      const section = {
        meeting_days: "Mo",
        start_time: "1:00",
        end_time: "2:00",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(true);
    });

    it("should return false if meeting_days not empty but contains no valid dates", () => {
      const section = {
        meeting_days: "LolThisIsInvalid",
        start_time: "1:00",
        end_time: "2:00",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(false);
    });

    it("should return true if meeting_days is mix of valid and invalid dates", () => {
      const section = {
        meeting_days: "LolThisIsInvalidUmmmActuallyMoWeFr",
        start_time: "1:00",
        end_time: "2:00",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(true);
    });

    it("should return false if start_time is after end_time", () => {
      const section = {
        meeting_days: "LolThisIsInvalid",
        start_time: "2:00",
        end_time: "1:00",
      };

      const isValid = hasValidDateTime(section);

      expect(isValid).toEqual(false);
    });
  });
});
