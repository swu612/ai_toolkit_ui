import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import { ToggleIconProps } from "@/components/types/types";

export const ConfigurationsIcon: React.FC<ToggleIconProps> = (
    {active, activeColor, inactiveColor, ...props}
) => (
    <SvgIcon {...props} style={{ color: active ? activeColor : inactiveColor }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-network">
            <path d="m13.11 7.664 1.78 2.672"/>
            <path d="m14.162 12.788-3.324 1.424"/>
            <path d="m20 4-6.06 1.515"/>
            <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
            <circle cx="12" cy="6" r="2"/>
            <circle cx="16" cy="12" r="2"/>
            <circle cx="9" cy="15" r="2"/>
        </svg>
    </SvgIcon>
);





