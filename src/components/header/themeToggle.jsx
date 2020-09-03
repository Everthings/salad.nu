import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./../../store/actions/themeActions";
import { getTheme } from "./../../store/reducers/theme";
import Toggle from "react-toggle";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  return (
    <Toggle
      checked={theme === "green"}
      icons={{
        checked: null,
        unchecked: null,
      }}
      onChange={() => dispatch(toggleTheme())}
      data-testid="theme-toggle"
    />
  );
};

export default ThemeToggle;
