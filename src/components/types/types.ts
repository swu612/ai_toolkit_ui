import { SvgIconProps } from "@mui/material/SvgIcon";

export interface ToggleIconProps extends SvgIconProps {
    active?: boolean,
    activeColor?: string,
    inactiveColor?: string
}

export interface ChatMessage {
    id: string;
    isAi: boolean;
    content: string;
  }