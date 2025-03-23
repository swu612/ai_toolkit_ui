import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { SidebarItem } from "@/components/Sidebar/SidebarItem";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { ToggleIconProps } from "@/components/types/types";

const meta: Meta<typeof SidebarItem> = {
    component: SidebarItem
}

export default meta;

const ActiveProjectIconWrapper: React.FC<ToggleIconProps> = ({
    active = false,
    activeColor = "#F0F0F0",
    inactiveColor = "#FFFFFF"
}) => (
    <ProjectIcon active={active} activeColor={activeColor} inactiveColor={inactiveColor}></ProjectIcon>
);

const onClick = () => {
    console.log("clicked!")
}

export const Default: StoryObj = {
    args: {
        active: true,
        activeColor: "#F0F0F0",
        inactiveColor: "#FFFFFF",
        label: "Projects",
        activeIconColor: "black",
        inactiveIconColor: "black",
        icon: ActiveProjectIconWrapper,
        onClick: onClick,
        sx: { width: "200px"}
    },
    parameters: {
        layout: "centered"
    }
}