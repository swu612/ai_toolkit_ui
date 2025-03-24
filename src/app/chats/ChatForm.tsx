"use client";

import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { poppins } from "@/theme/theme";

interface ChatFormProps {
  onSubmit: (prompt: string) => void;
}

export const ChatForm: React.FC<ChatFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        margin: "0 auto",
        borderRadius: "20px",
        border: "2px solid rgb(202, 202, 202)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        boxSizing: "border-box",
        p: 1,
        gap: 2,
      }}
    >
      {/* figure out how to resize dynamically as you type */}
      <TextField
        multiline
        rows={1}
        placeholder="Type Your Question Here"
        variant="outlined"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root": {
            fontSize: 14,
            color: "black",
            fontWeight: 400,
            fontFamily: poppins.style.fontFamily,
            textTransform: "none",
            backgroundColor: "transparent",
            borderRadius: "5px",
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
      <Button
        type="submit"
        sx={{
          outline: 0,
          border: 0,
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
      >
        <Box
          component="img"
          src="/send.svg"
          alt="send"
          sx={{ width: "30px", height: "30px" }}
        />
      </Button>
    </Box>
  );
};
