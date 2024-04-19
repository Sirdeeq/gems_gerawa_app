import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";
import MessageViewer from "./MessageViewer"; // Import the MessageViewer component

const MessagesList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Dummy function to fetch data from a backend endpoint
  const fetchDataFromBackend = () => {
    // Here you can use Axios or any other method to fetch data from the backend
    const messages = [
      {
        id: 1,
        subject: "Regarding Project Update",
        sender: "Sophie B.",
        dateTime: "22 DEC 7:20 PM",
        content:
          "Hi! I need more information about the recent project update. Can you please provide detailed insights regarding the current status and any pending tasks? Looking forward to your response. Thanks!",
      },
      {
        id: 2,
        subject: "Feedback on Task Completion",
        sender: "Anne Marie",
        dateTime: "21 DEC 11 PM",
        content:
          "Awesome work, can you please share more details about the tasks completed yesterday? I need to provide feedback to the team regarding the progress. Your prompt response would be highly appreciated. Thanks!",
      },
      {
        id: 3,
        subject: "Files for Review",
        sender: "Ivanna",
        dateTime: "21 DEC 9:34 PM",
        content:
          "About files I can share, but before that, I need to review them for any necessary modifications. Kindly let me know your availability for a brief meeting tomorrow to discuss the details. Looking forward to it. Regards, Ivanna.",
      },
    ];

    setProfiles(messages);
  };

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchDataFromBackend();
  }, []);

  const handleClick = (profile) => {
    setSelectedMessage(profile);
  };

  const handleClose = () => {
    setSelectedMessage(null);
  };

  return (
    <Grid spacing={2}>
      <Grid item xs={12}>
        {!selectedMessage && (
          <TimelineList title="Recent Messages">
            {profiles.map((profile) => (
              <TimelineItem
                key={profile.id}
                color="primary"
                icon="email"
                title={profile.sender}
                dateTime={profile.dateTime}
                description={`${profile.content.split(" ").slice(0, 5).join(" ")}...`} // Display only the first five words
                onClick={() => handleClick(profile)} // Pass onClick handler
              />
            ))}
          </TimelineList>
        )}
      </Grid>

      {/* Render MessageViewer for the selected message */}
      {selectedMessage && (
        <Grid item xs={12}>
          <MessageViewer
            message={{
              subject: selectedMessage.subject,
              sender: selectedMessage.sender,
              date: selectedMessage.dateTime,
              content: selectedMessage.content,
            }}
            onClose={handleClose}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default MessagesList;
