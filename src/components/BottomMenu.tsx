import { Avatar, Box } from "@mui/material"
import React from "react"
import image1 from "../assets/folders/easyUni.png"

interface BottomMenuProps {}

export const BottomMenu: React.FC<BottomMenuProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "",
                height: "fit-content",
                p: "0.3vw",
                flexDirection: "row",
                gap: "0.8vw",
                alignItems: "center",
            }}
        >
            <Avatar src={image1} variant="rounded" sx={{ width: "4.5vw", height: "4.0vw" }} />
            <Box sx={{ flexDirection: "column" }}>
                <p
                    style={{
                        fontSize: "1rem",

                        fontWeight: "800",

                        textTransform: "none",
                    }}
                >
                    EasyUni
                </p>
                <p style={{ fontSize: "0.9rem", fontWeight: "400" }}>Em andamento</p>
            </Box>
        </Box>
    )
}
