import { Avatar, Box, SxProps } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Project } from "../types/project"

interface CardProps {
    style?: SxProps
    sxAvatar?: SxProps
    sxTitle?: React.CSSProperties | undefined
    variant?: boolean
    project: Project
}

export const Card: React.FC<CardProps> = ({ title, folder, style, variant, sxAvatar, sxTitle, location, project }) => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                height: "4vw",
                width: "100%",
                bgcolor: !variant ? "#2b2b2c" : "",
                borderRadius: "0.5vw",
                flexDirection: "row",
                gap: "0.8vw",
                alignItems: "center",
                ...style,
                cursor: "pointer",
            }}
            onClick={() => window.open(project.location, "_blank")}
        >
            <Avatar
                src={project.cover}
                variant={"square"}
                sx={{
                    backgroundSize: "cover",
                    width: "4vw",
                    height: 1,
                    borderRadius: "0.5vw 0vw 0 0.5vw",
                    ...sxAvatar,
                }}
            />
            <Box sx={{ width: 0.9, flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "800", ...sxTitle }}>{project.name}</h3>
                <p
                    style={{
                        fontSize: "0.8rem",
                        ...sxTitle,
                        overflowX: "hidden",
                        whiteSpace: "nowrap",
                        maxWidth: "80%",
                        textOverflow: "ellipsis",
                    }}
                >
                    {project.description}
                </p>
            </Box>
        </Box>
    )
}
