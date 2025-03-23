"use client";

import React, { useState } from "react";
import { Drawer, List, Box, DrawerProps } from "@mui/material";
import { SidebarHeader } from "@/components/Sidebar/SidebarHeader";
import { SidebarItem } from "@/components/Sidebar/SidebarItem";
import {
  ChatsIcon,
  ProjectIcon,
  ConfigurationsIcon,
  DatastoreIcon,
  DocumentsIcon,
} from "@/components/icons";
import { useRouter, usePathname } from "next/navigation";

const items = [
  { id: "chats", label: "Chats", icon: ChatsIcon },
  { id: "projects", label: "Projects", icon: ProjectIcon },
  { id: "datastore", label: "Datastore", icon: DatastoreIcon },
  { id: "documents", label: "Documents", icon: DocumentsIcon },
  { id: "configurations", label: "Configurations", icon: ConfigurationsIcon },
];

export const Sidebar: React.FC<DrawerProps> = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  const logoClick = () => {
    setOpen(!open);
  };

  const buttonClick = (id: string) => {
    console.log(id);
    router.push(`/${id}`);
  };

  return (
    <Drawer
      open={open}
      anchor="left"
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "16px",
          paddingBottom: "8px",
          width: "20vw",
        }}
      >
        <SidebarHeader onClick={logoClick} />
        <List
          sx={{ display: "flex", flexDirection: "column", paddingTop: "16px" }}
        >
          {items.map((item) => {
            const isActive = pathname === `/${item.id}`;
            return (
              <SidebarItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                active={isActive}
                onClick={buttonClick}
              />
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
