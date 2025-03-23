import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import { ToggleIconProps } from "@/components/types/types";

export const DatastoreIcon: React.FC<ToggleIconProps>= (
    { active, activeColor, inactiveColor, ...props}
) => (
    <SvgIcon {...props} style={{ color: active ? activeColor : inactiveColor }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-database">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
            <path d="M3 12A9 3 0 0 0 21 12"/>
        </svg>
    </SvgIcon>
);