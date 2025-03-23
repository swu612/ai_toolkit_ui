import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { LogoIcon } from "@/components/icons/LogoIcon";
import {geistMonoBold} from "@/theme/theme";
import {BoxProps} from "@mui/system";

interface SidebarLogoProps extends BoxProps {
    onClick?: () => void;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ onClick }) => (
    <Button
        disableRipple
        onClick={onClick}
        sx={{
            padding: 0,
            height: "36px",
            minWidth: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: "8px",
            transition: 'transform 0.2s ease-in-out, background-color 0.25s ease-in-out',
            '&:active': { transform: 'scale(1.2)'},
        }}
    >
        <LogoIcon sx={{ color: "white", fontSize: "28px" }} />
    </Button>
);

export const SidebarHeader = ({ onClick } : { onClick?: () => void }) => (
    <Stack
        direction="row"
        alignItems="center"
        spacing="16px"
        justifyContent="flex-start"
        sx={{
            borderRadius: "12px",
            paddingLeft: "12px",
            paddingTop: "8px"
        }}
    >
        <SidebarLogo onClick={onClick}/>
        <Typography
            fontFamily={geistMonoBold.style.fontFamily}
            sx={{ textTransform: "none", fontSize: 24, color: "black", fontWeight: 600 }}
        >
            {"AI Toolkit"}
        </Typography>
    </Stack>
)
