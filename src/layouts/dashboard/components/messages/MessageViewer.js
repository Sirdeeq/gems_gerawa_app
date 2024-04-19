/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Icon } from "@mui/material";
import QuillEditor from "./components/QuillEditor";
import ForwardForm from "./components/ForwardForm";
import MDBox from "components/MDBox"; // Import MDBox component
import MDButton from "components/MDButton";

const MessageViewer = ({ message, onClose }) => {
  const [replyMode, setReplyMode] = useState(false);
  const [forwardMode, setForwardMode] = useState(false);
  const [forwardEmail, setForwardEmail] = useState("");

  const toggleReplyMode = () => {
    setReplyMode(!replyMode);
    setForwardMode(false);
  };

  const toggleForwardMode = () => {
    setForwardMode(!forwardMode);
    setReplyMode(false);
  };

  const handleReplySubmit = (replyContent) => {
    // Implement reply functionality here, such as sending the reply content to the server
    console.log("Reply content:", replyContent);
    // Clear reply content and exit reply mode
    setReplyMode(false);
  };

  const handleForwardSubmit = () => {
    // Implement forward functionality here, such as sending the message to the specified email
    console.log("Forward email:", forwardEmail);
    // Clear forward email and exit forward mode
    setForwardEmail("");
    setForwardMode(false);
  };

  return (
    <MDBox variant="gradient" borderRadius="lg" shadow="lg" opacity={1} p={2}>
      {/* Back button */}
      {onClose && (
        <MDButton onClick={onClose} variant="outlined" color="info">
          Back
        </MDButton>
      )}

      {/* Title */}
      <h4>{message.subject}</h4>
      <MDBox>
        {/* Sender and Date */}
        <MDBox display="flex" justifyContent="space-between">
          <h6>{message.sender}</h6>
          <h6>{message.date}</h6>
        </MDBox>
      </MDBox>

      {/* Message Content Card */}
      <MDBox
        p={2}
        mt={2}
        borderRadius="md"
        shadow="md"
        bgcolor="background.paper"
        fontSize="small"
        color="text.secondary"
      >
        <p>{message.content}</p>
      </MDBox>

      {/* Action buttons */}
      <Button onClick={toggleReplyMode}>Reply</Button>
      <Button onClick={toggleForwardMode}>Forward</Button>

      {/* Reply editor */}
      {replyMode && <QuillEditor onSubmit={handleReplySubmit} />}

      {/* Forward form */}
      {forwardMode && <ForwardForm onSubmit={handleForwardSubmit} />}
    </MDBox>
  );
};

export default MessageViewer;
