import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("react-ga");

describe("App", () => {
  it("renders app body", () => {
    const { getByTestId } = render(<App />);

    const bodyElement = getByTestId("app-body");

    expect(bodyElement).toBeInTheDocument();
  });
});
