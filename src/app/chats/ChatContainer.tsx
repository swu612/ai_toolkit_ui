"use client";

import React from "react";
import { Box } from "@mui/material";
import userIcon from "@/assets/user.svg";
import botIcon from "@/assets/bot.svg";
import { poppins } from "@/theme/theme";

// Define the shape of a chat message
export interface ChatMessage {
  id: string;
  isAi: boolean;
  content: string;
}

interface ChatContainerProps {
  messages: ChatMessage[];
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => (
  <Box
    id="chat_container"
    sx={{
      flex: 1,
      maxWidth: "100",
      maxHeight: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingBottom: "20px",
      scrollBehavior: "smooth",
      // Hide scrollbar
      "&::-webkit-scrollbar": { display: "none" },
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    {messages.map((msg) => (
      <Box
        key={msg.id}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          border: msg.isAi ? "" : "1px solid #E0E0E0",
          gap: 1,
          p: 2,
          backgroundColor: msg.isAi ? "#transparent" : "#FAF9F6",
          borderRadius: "25px",
          maxWidth: msg.isAi ? "100%" : "80%", // Limits bubble width to 80% of parent
          alignSelf: msg.isAi ? "flex-start" : "flex-end",
        }}
      >
        {/* Avatar */}
        <Box
          sx={{
            minWidth: "36px",
            minHeight: "36px",
            borderRadius: "5px",
            backgroundColor: msg.isAi ? "#10a37f" : "#5436DA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={msg.isAi ? "/bot.svg" : "/user.svg"}
            alt={msg.isAi ? "bot" : "user"}
            sx={{ width: "60%", height: "60%", objectFit: "contain" }}
          />
        </Box>

        {/* Text */}
        <Box
          id={msg.id}
          sx={{
            fontSize: 14,
            color: "black",
            fontWeight: 400,
            fontFamily: poppins.style.fontFamily,
            textTransform: "none",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            overflowX: "hidden",
          }}
        >
          {msg.content}
        </Box>
      </Box>
    ))}
  </Box>
);
