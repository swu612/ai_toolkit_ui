"use client";

import React, { useState, useRef } from "react";
import { Box, BoxProps } from "@mui/material";
import { ChatContainer, ChatMessage } from "./ChatContainer";
import { ChatForm } from "./ChatForm";

export const Page: React.FC<BoxProps> = (props) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const loaderInterval = useRef<NodeJS.Timeout | null>(null);

  const generateUniqueID = (): string => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);
    return `id-${timestamp}-${hexadecimalString}`;
  };

  const startLoader = (id: string) => {
    let dots = "";
    loaderInterval.current = setInterval(() => {
      dots = dots.length === 3 ? "" : dots + ".";
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, content: dots } : msg))
      );
    }, 300);
  };

  const stopLoader = () => {
    if (loaderInterval.current) {
      clearInterval(loaderInterval.current);
      loaderInterval.current = null;
    }
  };

  const typeText = (id: string, text: string) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id
            ? { ...msg, content: text.substring(0, index + 1) }
            : msg
        )
      );
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 20);
  };

  const handleSubmit = async (prompt: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: generateUniqueID(),
      isAi: false,
      content: prompt,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Add bot message placeholder
    const botMessageId = generateUniqueID();
    const botMessage: ChatMessage = {
      id: botMessageId,
      isAi: true,
      content: "",
    };
    setMessages((prev) => [...prev, botMessage]);

    // Start loader
    startLoader(botMessageId);

    // Simulate server fetch (replace with actual fetch logic if needed)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const botResponse =
        "This is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the botThis is a simulated response from the bot.";
      stopLoader();
      typeText(botMessageId, botResponse);
    } catch (err) {
      stopLoader();
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? { ...msg, content: "Something went wrong" }
            : msg
        )
      );
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        m: 0,
        p: 0,
      }}
      {...props}
    >
      <ChatContainer messages={messages} />
      <ChatForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default Page;
