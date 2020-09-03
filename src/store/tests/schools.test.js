import { loadSchools } from "./../actions/schoolActions";
import { getSchools } from "./../reducers/schools";
import * as schoolsService from "./../../fakeServices/schoolsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/schoolsService");
schoolsService.getSchools.mockResolvedValue([
  { symbol: "MEAS", name: "Mccormick" },
  { symbol: "WCAS", name: "Weinberg" },
  { symbol: "MUS", name: "Music" },
]);

describe("schoolsSlice", () => {
  describe("loadSchools + getSchools", () => {
    it("should load schools into store", async () => {
      const store = configureStore();

      await store.dispatch(loadSchools());

      expect(getSchools(store.getState())).toHaveLength(3);
    });
  });
});
