import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import { ToggleIconProps } from "@/components/types/types";

export const ChatsIcon: React.FC<ToggleIconProps> = (
    { active, activeColor, inactiveColor, ...props}
) => (
    <SvgIcon {...props} style={{ color: active ? activeColor : inactiveColor }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-messages-square">
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
        </svg>
    </SvgIcon>
);