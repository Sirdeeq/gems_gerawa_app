/* eslint-disable react/prop-types */
import React, { useState } from "react";
import MDInput from "components/MDInput"; // Importing MDInput component
import IconButton from "@mui/material/IconButton";
import ForwardIcon from "@mui/icons-material/Forward"; // Importing forward icon from Material-UI

const ForwardForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(email);
    setEmail(""); // Clear the email input after submission
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <MDInput
        label="Enter email address"
        value={email}
        onChange={handleEmailChange}
        onKeyPress={handleKeyPress} // Trigger handleSubmit on Enter key press
      />
      <IconButton onClick={handleSubmit}>
        <ForwardIcon />
      </IconButton>
    </div>
  );
};

export default ForwardForm;
