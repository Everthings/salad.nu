import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { ToastProvider } from "react-toast-notifications";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Theme from "./components/themes/theme";
import { Router } from "react-router-dom";
import AppBody from "./AppBody";

const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  const store = configureStore();
  return {
    ...render(
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <Router history={history}>{ui}</Router>
          </Theme>
        </Provider>
      </ToastProvider>
    ),
    history,
  };
};

describe("AppBody", () => {
  it("renders about page", () => {
    const { debug, getByText } = renderWithRouter(<AppBody />, {
      route: "/about",
    });

    const AboutPageElement = getByText("Andy '23");

    expect(AboutPageElement).toBeTruthy();
  });

  it("renders root page", () => {
    const { getByTestId } = renderWithRouter(<AppBody />, {
      route: "/",
    });

    const RootPageElement = getByTestId("search-bar");

    expect(RootPageElement).toBeTruthy();
  });

  it("renders root page if url doesn't match '/about'", () => {
    const { getByTestId } = renderWithRouter(<AppBody />, {
      route: "/this-is-not-about",
    });

    const RootPageElement = getByTestId("search-bar");

    expect(RootPageElement).toBeTruthy();
  });
});
