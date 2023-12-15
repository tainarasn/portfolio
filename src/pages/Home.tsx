import { Box, Skeleton } from "@mui/material"
import React from "react"
import { MenuDrawer } from "../components/MenuDrawer"
import { BottomMenu } from "../components/BottomMenu"
import { colors } from "../styles/colors"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box sx={{ height: "100%", width: "100%" }}>
            <Box sx={{ flexDirection: "row", width: "100vw", height: "100%", gap: "0.8vw" }}>
                <MenuDrawer />
                <Box sx={{ width: "100%", height: "100%", flexDirection: "row", gap: "0.8vw", pb: "0.4vw" }}>
                    <Box sx={{ bgcolor: "", width: "75%", height: "100%", borderRadius: "1vw" }}>
                        <Skeleton
                            animation="wave"
                            variant="rectangular"
                            sx={{ width: "100%", height: "100%", bgcolor: "#1a1a1b", borderRadius: "1vw" }}
                        />
                    </Box>
                    <Box sx={{ bgcolor: "#1a1a1b", width: "22.4%", height: "100%", borderRadius: "1vw" }}></Box>
                </Box>
            </Box>
            <BottomMenu />
        </Box>
    )
}
