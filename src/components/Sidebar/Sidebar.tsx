"use client";

import React, { useState } from 'react';
import {Drawer, List, Box, DrawerProps} from "@mui/material";
import { SidebarHeader } from "@/components/Sidebar/SidebarHeader";
import { SidebarItem } from "@/components/Sidebar/SidebarItem";
import { ChatsIcon, ProjectIcon, ConfigurationsIcon, DatastoreIcon, DocumentsIcon } from "@/components/icons";


const items = [
    { id: 'chats', label: 'Chats', icon: ChatsIcon },
    { id: 'projects', label: 'Projects', icon: ProjectIcon },
    { id: 'datastore', label: 'Datastore', icon: DatastoreIcon },
    { id: 'documents', label: 'Documents', icon: DocumentsIcon },
    { id: 'configurations', label: 'Configurations', icon: ConfigurationsIcon }
];

export const Sidebar: React.FC<DrawerProps> = () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<string | null>('chats');

    const logoClick = () => {
        setOpen(!open);
    };

    const buttonClick = (id: string) => {
        setSelected(id);
        console.log(id);
    };

    return (
        <Drawer
            open={open}
            anchor="left"
            variant="permanent"
        >
            <Box
                sx={{
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingTop: '16px',
                    paddingBottom: '8px',
                    width: '20vw'
                }}
            >
                <SidebarHeader onClick={logoClick}/>
                <List
                    style={{ display: 'flex', flexDirection: 'column' }}
                    sx={{ paddingTop: '16px' }}
                >
                    {items.map(item => (
                        <SidebarItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            icon={item.icon}
                            active={selected === item.id}
                            onClick={buttonClick}
                        />
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
