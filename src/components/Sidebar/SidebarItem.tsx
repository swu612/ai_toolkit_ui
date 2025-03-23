"use client";

import Link from "next/link";
import React from "react";
import { Button, Typography, Stack, ButtonProps } from "@mui/material";
import { ToggleIconProps } from "@/components/types/types";
import { poppins } from "@/theme/theme";

interface SidebarItemProps extends Omit<ButtonProps, "onClick"> {
  id: string;
  active?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  label?: string;
  activeIconColor?: string;
  inactiveIconColor?: string;
  icon?: React.FC<ToggleIconProps>;
  onClick?: (arg: string) => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  id,
  active,
  activeColor = "#F0F0F0",
  inactiveColor = "#FFFFFF",
  label,
  activeIconColor = "black",
  inactiveIconColor = "black",
  icon: Icon,
  onClick,
  ...props
}) => (
  <Button
    disableRipple
    {...props}
    onClick={() => onClick && onClick(id)}
    sx={{
      height: "40px",
      borderRadius: "12px",
      backgroundColor: active ? activeColor : inactiveColor,
      transition:
        "transform 0.2s ease-in-out, background-color 0.1s ease-in-out",
      "&:active": { transform: "scale(1.1)" },
      paddingLeft: "16px",
      marginTop: "8px",
      marginBottom: "8px",
      justifyContent: "flex-start",
      ...props.sx,
    }}
  >
    <Stack direction="row" spacing={"12px"} alignItems="center">
      {Icon && (
        <Icon
          active={active}
          activeColor={activeIconColor}
          inactiveColor={inactiveIconColor}
        />
      )}
      <Typography
        fontFamily={poppins.style.fontFamily}
        sx={{
          textTransform: "none",
          fontSize: 14,
          color: "black",
          fontWeight: 400,
        }}
      >
        {label}
      </Typography>
    </Stack>
  </Button>
);
