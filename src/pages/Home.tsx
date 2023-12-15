import { Box, Skeleton } from "@mui/material"
import React from "react"
import { MenuDrawer } from "../components/MenuDrawer"
import { BottomMenu } from "../components/BottomMenu"
import { Logo } from "../components/Logo"
import avatar from "../assets/avatar/1.png"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box sx={{ height: "100%", width: "100%" }}>
            <Box sx={{ flexDirection: "row", width: "100vw", height: "100%", gap: "0.8vw" }}>
                <MenuDrawer />
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "row",
                        gap: "0.8vw",
                        pb: "0.4vw",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ bgcolor: "#1a1a1b", width: "75%", height: "100%", borderRadius: "1vw", p: "3vw" }}>
                        {/* <Skeleton
                            animation="wave"
                            variant="rectangular"
                            sx={{ width: "100%", height: "100%", bgcolor: "#1a1a1b", borderRadius: "1vw" }}
                        /> */}
                        <Logo />
                        <Box sx={{ flexDirection: "column", p: "4vw" }}>
                            <p style={{ fontFamily: "Verdana", textAlign: "start" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Amet porttitor eget dolor morbi non. Fermentum iaculis eu non
                                diam phasellus. Gravida quis blandit turpis cursus. Etiam sit amet nisl purus in mollis.
                                Aliquet risus feugiat in ante metus dictum. In hendrerit gravida rutrum quisque. Fermentum
                                dui faucibus in ornare quam viverra orci sagittis. Neque sodales ut etiam sit amet. Sit amet
                                aliquam id diam maecenas ultricies mi eget. In eu mi bibendum neque egestas congue quisque
                                egestas. Urna condimentum mattis pellentesque id nibh tortor id. Vel eros donec ac odio
                                tempor. Convallis aenean et tortor at risus viverra adipiscing at. Massa ultricies mi quis
                                hendrerit dolor magna eget.
                            </p>
                        </Box>
                    </Box>
                    <Box sx={{ bgcolor: "#1a1a1b", width: "22.4%", height: "100%", borderRadius: "1vw", p: "2vw" }}>
                        <img src={avatar} style={{ width: "100%", height: "15vw" }} />
                        <p style={{ fontFamily: "Lucidity", textAlign: "center", fontSize: "2vw" }}>Tainara Silva</p>
                        <p style={{ fontFamily: "Verdana", textAlign: "center", fontSize: "1vw" }}>Estudante</p>
                        <p style={{ fontFamily: "Verdana", textAlign: "center", fontSize: "0.8vw" }}>
                            Engenharia de computação
                        </p>
                    </Box>
                </Box>
            </Box>
            <BottomMenu />
        </Box>
    )
}
