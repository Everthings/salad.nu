import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import SearchBar from "./searchBar";

afterEach(cleanup);

describe("SearchBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display search value", () => {
    const handleChange = () => 0;
    const { getByTestId } = render(
      <SearchBar search="some search" handleChange={handleChange} />
    );

    const input = getByTestId("search-bar");

    expect(input.value).toEqual("some search");
  });

  it("should display placeholder value with term", () => {
    const handleChange = () => 0;
    const term = { name: "some term" };
    const { getByTestId } = render(
      <SearchBar search="some search" term={term} handleChange={handleChange} />
    );

    const input = getByTestId("search-bar");

    expect(input.placeholder).toEqual("Search Courses (some term)");
  });
});
