import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { getTheme } from "../../store/reducers/theme";
import { greenTheme } from "./greenTheme";
import { darkTheme } from "./darkTheme";

const Theme = ({ children }) => {
  const themeName = useSelector(getTheme);
  const theme = themeName === "green" ? greenTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
