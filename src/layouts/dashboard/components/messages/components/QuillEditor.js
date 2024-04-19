/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";
import MDBox from "components/MDBox";

const QuillEditor = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleInputChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    onSubmit(content);
    setContent(""); // Clear the editor after submission
  };

  return (
    <MDBox p={2}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleInputChange}
        placeholder="Compose your reply..."
      />
      {/* <MDButton onClick={handleSubmit}>Send</MDButton> */}
      <br />
      <MDButton onClick={handleSubmit} variant="gradient" color="info" iconOnly>
        <Icon>forward</Icon>
      </MDButton>
    </MDBox>
  );
};

export default QuillEditor;
