import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { getTheme } from "../../store/slices/theme";

const greenTheme = {
  colors: {
    background: "#ffffff",

    containerBorder: "#dcf0da",
    containerBackground: "#f6fdf4",

    navBackground: "#ffffff",
    navBackgroundActive: "#28a745",

    headerBackground: "#dcf0da",
    headerButton: "#28a745",
    searchBar: "#e5fbe4",
    searchBarBorder: "#afd2a0",
    searchText: "#000000",

    aboutText: "#28a745",
    aboutButton: "#28a745",
    aboutButtonText: "#ffffff",

    scheduleText: "#3b3c3c",
    scheduleDivider: "#e2e7e2",

    coursesListText: "#3b3c3c",

    sectionsListDivider: "#c0dcb3",
    sectionsListText: "#3b3c3c",

    infoCardBackground: "#ebf2ea",
    infoCardText: "#3b3c3c",
    infoCardDivider: "#d3d9d2",
    infoCardBorder: "#ebf2ea",
    infoCardBorderHighlight: "#afd2a0",

    moreInfoBackground: "#e4edea",
    moreInfoBorder: "#c8cac9",
    moreInfoText: "#3b3c3c",
    moreInfoTextHighlight: "#c5c5c5",

    scheduleCardBackground: "#edf5ef",
    scheduleCardText: "#3b3c3c",

    modalBackground: "#ffffff",
    modalTitle: "#3b3c3c",
    modalText: "#3b3c3c",
    modalTextBox: "#f3f3f3",
  },
};

const darkTheme = {
  colors: {
    background: "#282828",

    containerBorder: "#555555",
    containerBackground: "#282828",

    navBackground: "#282828",
    navBackgroundActive: "#ffffff",

    headerBackground: "#282828",
    headerButton: "#92f190e0",
    searchBar: "#282828",
    searchBarBorder: "#555555",
    searchText: "#ffffff",

    aboutText: "#ffffff",
    aboutButton: "#92f190e0",
    aboutButtonText: "#ffffff",

    scheduleText: "#fbfbfbb5",
    scheduleDivider: "#555555",

    coursesListText: "#ffffff",

    sectionsListDivider: "#555555",
    sectionsListText: "#ffffff",

    infoCardBackground: "#353535",
    infoCardText: "#d8d8d8",
    infoCardDivider: "#555555",
    infoCardBorder: "#555555",
    infoCardBorderHighlight: "#ffffff",

    moreInfoBackground: "#353535",
    moreInfoBorder: "#555555",
    moreInfoText: "#d8d8d8",
    moreInfoTextHighlight: "#949494",

    scheduleCardBackground: "#353535",
    scheduleCardText: "#ffffff",

    modalBackground: "#282828",
    modalTitle: "#656565",
    modalText: "#d8d8d8",
    modalTextBox: "#404040",
  },
};

const Theme = ({ children }) => {
  const themeName = useSelector(getTheme);
  const theme = themeName === "green" ? greenTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
