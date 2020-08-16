import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getScheduledSections } from "./../../store/slices/schedule";
import { exportSchedule2CSV } from "./../../utils/exportUtils";
import { CSVLink } from "react-csv";

const Button = styled.div`
  background-color: ${({ theme }) => `${theme.colors.headerButton}`};

  & a {
    text-decoration: none;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => `${theme.colors.headerBackground}`};
`;

const ExportButton = () => {
  const scheduled = useSelector(getScheduledSections);
  const csvData = exportSchedule2CSV(scheduled);

  return (
    <Button className="btn">
      <CSVLink
        title="Export Schedule to CSV (click About for more info)"
        data={csvData}
        filename="nu_schedule.csv"
        data-testid="export-button"
      >
        <Text>Export</Text>
      </CSVLink>
    </Button>
  );
};

export default ExportButton;
