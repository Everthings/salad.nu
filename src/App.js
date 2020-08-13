import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import configureStore from "./store/configureStore";
import { loadState, saveState } from "./utils/storageUtils";
import "./App.css";
import ReactGA from "react-ga";
import Theme from "./components/themes/theme";
import AppBody from "./AppBody";
import Logger from "./components/common/logger";

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(() => {
  saveState(store.getState());
});

function App() {
  useEffect(() => {
    const trackingId = "UA-172475057-1";
    ReactGA.initialize(trackingId);
    ReactGA.pageview("/");
  }, []);

  return (
    <Logger>
      <ToastProvider>
        <Provider store={store}>
          <Theme>
            <AppBody />
          </Theme>
        </Provider>
      </ToastProvider>
    </Logger>
  );
}

export default App;
