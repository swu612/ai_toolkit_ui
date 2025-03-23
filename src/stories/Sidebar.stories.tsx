import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const meta: Meta<typeof Sidebar> = {
    component: Sidebar
}

export default meta;

export const Default: StoryObj = {
    parameters: {
        layout: "centered"
    }
}