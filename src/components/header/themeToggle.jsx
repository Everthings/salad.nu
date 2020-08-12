import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, getTheme } from "./../../store/slices/theme";
import Toggle from "react-toggle";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const checked = theme === "green";

  const handleToggle = () => {
    dispatch(toggleTheme(theme));
  };

  return (
    <Toggle
      checked={checked}
      icons={{
        checked: null,
        unchecked: null,
      }}
      onChange={handleToggle}
    />
  );
};

export default ThemeToggle;
