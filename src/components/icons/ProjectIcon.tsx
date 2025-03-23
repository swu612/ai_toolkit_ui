import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import { ToggleIconProps } from "@/components/types/types";

export const ProjectIcon: React.FC<ToggleIconProps> = (
    {active, activeColor, inactiveColor, ...props}
) => (
    <SvgIcon {...props} style={{ color: active ? activeColor : inactiveColor }}>
        {active ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor"
                 strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open">
                <path
                    d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>
            </svg>

        ): (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor"
                 strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder">
                <path
                    d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
            </svg>
        )}
    </SvgIcon>
);


