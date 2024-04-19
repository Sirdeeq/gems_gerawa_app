import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DataTable = ({ columns, data, defaultRowsPerPage }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#my-table" });
    doc.save("table.pdf");
    handleCloseMenu();
  };

  const handleRowSelection = (row) => {
    setSelectedRow(row);
  };

  return (
    <div style={{ position: "relative" }}>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        style={{ position: "absolute", top: 0, right: 0, margin: "8px" }}
      />
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{ position: "absolute", top: 0, right: 0, margin: "8px" }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleExportPDF}>Export to PDF</MenuItem>
        {/* Add more functional options here */}
      </Menu>
      <TableContainer style={{ marginTop: "48px" }}>
        <Table id="my-table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.key}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row) =>
                Object.values(row).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                )
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex} onClick={() => handleRowSelection(row)}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.key}>{row[column.key]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      {/* {selectedRow && (
        <div style={{ marginTop: "20px" }}>
          Selected Row:
          <pre>{JSON.stringify(selectedRow, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultRowsPerPage: PropTypes.number.isRequired,
};

export default DataTable;
