import { Avatar, Box, SxProps } from "@mui/material"
import React from "react"

interface CardProps {
    title: string
    folder: string
    style?: SxProps
    sxAvatar?: SxProps
    sxTitle?: React.CSSProperties | undefined
    variant?: boolean
}

export const Card: React.FC<CardProps> = ({ title, folder, style, variant, sxAvatar, sxTitle }) => {
    return (
        <Box
            sx={{
                height: "9%",
                width: "100%",
                bgcolor: !variant ? "#2b2b2c" : "",
                borderRadius: "0.5vw",
                flexDirection: "row",
                gap: "0.8vw",
                alignItems: "center",
                ...style,
            }}
        >
            <Avatar
                src={folder}
                variant={"square"}
                sx={{
                    backgroundSize: "cover",
                    width: "15%",
                    height: "100%",
                    borderRadius: "0.5vw 0vw 0 0.5vw",
                    ...sxAvatar,
                }}
            />
            <h3 style={{ fontSize: "1.3vw", fontFamily: "Chau", ...sxTitle }}>{title}</h3>
        </Box>
    )
}
