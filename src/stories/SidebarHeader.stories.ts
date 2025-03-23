import type { Meta, StoryObj } from "@storybook/react";
import { SidebarHeader } from "@/components/Sidebar/SidebarHeader";

const meta: Meta<typeof SidebarHeader> = {
    component: SidebarHeader
}

export default meta;

const onClick = () => {
    console.log("clicked!")
}

export const Default: StoryObj = {
    args: {
        onClick: onClick
    },
    parameters: {
        layout: "centered"
    }
}