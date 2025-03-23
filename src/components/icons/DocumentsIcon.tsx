import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import { ToggleIconProps } from "@/components/types/types";

export const DocumentsIcon: React.FC<ToggleIconProps> = (
    { active, activeColor, inactiveColor, ...props }
) => (
    <SvgIcon {...props} style={{ color: active ? activeColor : inactiveColor }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-search">
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/>
            <path d="m9 18-1.5-1.5"/>
            <circle cx="5" cy="14" r="3"/>
        </svg>
    </SvgIcon>
);






