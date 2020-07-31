import React from "react";
import { useSelector } from "react-redux";
import { getScheduledSections } from "./../../store/slices/schedule";
import { exportSchedule2CSV } from "./../../utils/exportUtils";
import { CSVLink } from "react-csv";

const ExportButton = () => {
  const scheduled = useSelector(getScheduledSections);
  const csvData = exportSchedule2CSV(scheduled);

  return (
    <CSVLink
      className="btn btn-success ml-3"
      title="Export Schedule to CSV"
      data={csvData}
      filename="nu_schedule.csv"
    >
      Export
    </CSVLink>
  );
};

export default ExportButton;
