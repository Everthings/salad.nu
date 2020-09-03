import { loadSubjects } from "./../actions/subjectActions";
import { getSubjects } from "./../reducers/subjects";
import * as subjectsService from "./../../fakeServices/subjectsService";
import configureStore from "./../configureStore";

jest.mock("./../../fakeServices/subjectsService");
subjectsService.getSubject.mockResolvedValue([
  { symbol: "COMP_SCI", name: "Computer Science" },
  { symbol: "BMD_ENG", name: "Biomedical Engineering" },
  { symbol: "PHIL", name: "Philosophy" },
]);

describe("subjectsSlice", () => {
  describe("loadSubject + getSubjects", () => {
    it("should load subjects into store", async () => {
      const store = configureStore();
      await store.dispatch(loadSubjects());

      expect(getSubjects(store.getState())).toHaveLength(3);
    });
  });
});
