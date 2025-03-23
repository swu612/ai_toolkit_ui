"use client";

import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Box, TextField, Button, BoxProps } from "@mui/material";
import { poppins } from "@/theme/theme";

interface PageProps extends BoxProps {
  onSubmit?: () => void;
}

export const Page: React.FC<PageProps> = ({ onSubmit, ...rest }) => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Chat container */}
      <Box
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
        {/* 
          Chat messages would go here, each message could be a separate Box 
          or component styled similarly to your .wrapper / .chat / .message, etc.
        */}
      </Box>

      {/* Form area */}
      <Box
        component="form"
        onSubmit={onSubmit}
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
        <TextField
          multiline
          rows={1}
          placeholder="Type Your Question Here"
          variant="outlined"
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
            src="../../public/send.svg"
            sx={{ width: "30px", height: "30px" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
