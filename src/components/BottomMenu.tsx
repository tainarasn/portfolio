import { Avatar, Box } from "@mui/material"
import React from "react"
import image1 from "../assets/cartoons/7aRby8A2gmzW.png"

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
            <Avatar src={image1} variant="rounded" sx={{ width: "4.5vw", height: "4.5vw" }} />
            <Box sx={{ flexDirection: "column" }}>
                <p
                    style={{
                        fontSize: "1.2vw",
                        letterSpacing: "0.1vw",
                        fontWeight: "800",
                        fontFamily: "Lucidity",
                        textTransform: "none",
                    }}
                >
                    Pokedéx
                </p>
                <p style={{ fontSize: "0.9vw", fontWeight: "400", fontFamily: "Chau" }}>Dev em Dobro 2022</p>
            </Box>
        </Box>
    )
}
