/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";

const ReceivedReleasedComponent = () => {
  const receivedData = {
    columns: [
      { accessor: "id", Header: "ID" },
      { accessor: "title", Header: "Title" },
      { accessor: "description", Header: "Description" },
      { accessor: "qty", Header: "Quantity" },
      { accessor: "date", Header: "Date" },
      { accessor: "time", Header: "Time" },
    ],
    rows: [
      {
        id: 1,
        title: "Received Item 1",
        description: "Description 1",
        qty: 5,
        date: "2024-04-15",
        time: "09:00",
      },
    ],
  };
  // Sample received data
  const releasedData = {
    columns: [
      { accessor: "id", Header: "ID" },
      { accessor: "title", Header: "Title" },
      { accessor: "description", Header: "Description" },
      { accessor: "qty", Header: "Quantity" },
      { accessor: "date", Header: "Date" },
      { accessor: "time", Header: "Time" },
    ],
    rows: [
      {
        id: 1,
        title: "Released Item 1",
        description: "Description 1",
        qty: 3,
        date: "2024-04-15",
        time: "10:00",
      },
    ],
  };

  const handleRowClick = (rowData) => {
    console.log("Row clicked:", rowData);
  };

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MDBox variant="gradient" borderRadius="lg" shadow="lg" opacity={1} p={2} height="100%">
            <Typography variant="h5" gutterBottom>
              Daily Received
            </Typography>
            <DataTable
              entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20, 25] }}
              canSearch={true}
              showTotalEntries={true}
              table={receivedData}
              pagination={{ variant: "gradient", color: "info" }}
              isSorted={true}
              noEndBorder={false}
              // Pass the handleRowClick function as the onRowClick prop
              onRowClick={handleRowClick}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <MDBox variant="gradient" borderRadius="lg" shadow="lg" opacity={1} p={2} height="100%">
            <Typography variant="h5" gutterBottom>
              Daily Released
            </Typography>
            <DataTable
              entriesPerPage={{ defaultValue: 5, entries: [5, 10, 15, 20, 25] }}
              canSearch={true}
              showTotalEntries={true}
              table={releasedData}
              pagination={{ variant: "gradient", color: "info" }}
              isSorted={true}
              noEndBorder={false}
              // Pass the handleRowClick function as the onRowClick prop
              onRowClick={handleRowClick}
            />
          </MDBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReceivedReleasedComponent;
