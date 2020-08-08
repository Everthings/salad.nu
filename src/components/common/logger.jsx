import React from "react";
import * as Sentry from "@sentry/react";
import LogRocket from "logrocket";
import { useEffect } from "react";

const Logger = ({ children }) => {
  useEffect(() => {
    Sentry.init({
      dsn:
        "https://8a24cff03ff548e8bda887e083955689@o414853.ingest.sentry.io/5341399",
    });

    LogRocket.init("1fmmwz/saladnu");

    LogRocket.getSessionURL((sessionURL) => {
      Sentry.configureScope((scope) => {
        scope.setExtra("sessionURL", sessionURL);
      });
    });
  }, []);

  return <Sentry.ErrorBoundary showDialog>{children}</Sentry.ErrorBoundary>;
};

export default Logger;
