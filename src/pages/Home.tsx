import { Box } from "@mui/material"
import React from "react"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box className="Home-Component">
            <Box sx={{ bgcolor: " #1a1a1b", width: "10%", height: "100%" }}> <p style={{ color: "#F52280" }}>opaaa</p> </Box>
           
        </Box>
    )
}
