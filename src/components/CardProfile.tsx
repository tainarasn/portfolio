import { Avatar, Box, SxProps } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Project } from "../types/project"

interface CardProfileProps {
    title: string
    folder: string
    style?: SxProps
    sxAvatar?: SxProps
    sxTitle?: React.CSSProperties | undefined
    variant?: boolean
    location: string
}

export const CardProfile: React.FC<CardProfileProps> = ({ title, folder, style, variant, sxAvatar, sxTitle, location }) => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                bgcolor: !variant ? "#2b2b2c" : "",
                borderRadius: "0.5vw",
                flexDirection: "row",
                gap: "0.8vw",
                alignItems: "center",
                ...style,
            }}
            onClick={() => navigate(location)}
        >
            <Avatar
                src={folder}
                variant={"square"}
                sx={{
                    backgroundSize: "cover",
                    width: "20%",
                    height: 1,
                    borderRadius: "0.5vw 0vw 0 0.5vw",
                    ...sxAvatar,
                }}
            />
            <h3 style={{ fontSize: "1.1vw", fontWeight: "800", ...sxTitle }}>{title}</h3>
        </Box>
    )
}
