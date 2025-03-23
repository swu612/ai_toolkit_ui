import React from 'react';
import SvgIcon, {SvgIconProps} from "@mui/material/SvgIcon";

export const LogoIcon: React.FC<SvgIconProps> = ({...props}) => (
    <SvgIcon {...props} >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
            <rect width="16" height="16" x="4" y="4" rx="2"/>
            <rect width="6" height="6" x="9" y="9" rx="1"/>
            <path d="M15 2v2"/>
            <path d="M15 20v2"/>
            <path d="M2 15h2"/>
            <path d="M2 9h2"/>
            <path d="M20 15h2"/>
            <path d="M20 9h2"/>
            <path d="M9 2v2"/>
            <path d="M9 20v2"/>
        </svg>
    </SvgIcon>
);


