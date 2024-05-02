import Skeleton from "@mui/material/Skeleton"
import Box from "@mui/material/Box"
import React, { useState } from "react"
import { MenuDrawer } from "../components/MenuDrawer"
import { BottomMenu } from "../components/BottomMenu"
import { Logo } from "../components/Logo"
import avatar from "../assets/avatar/3.png"
import { Card } from "../components/Card"
import { IconPinned } from "@tabler/icons-react"
import languages from "../assets/languages/languages2.png"

import { Grid } from "@mui/material"
import projetos from "../projects"
import { CardProfile } from "../components/CardProfile"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false) // Aqui você pode fazer o que quiser com o novo estado
    }, 1000)
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
                    <Box
                        sx={{
                            bgcolor: "#1a1a1b",
                            width: "75%",
                            height: "100%",
                            borderRadius: "1vw",
                            p: "3vw",
                            // gap: "1vw",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ width: 1, flexDirection: "row", height: "70%", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: "65%",
                                    height: "100%",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    pt: "1vw",
                                }}
                            >
                                {loading ? (
                                    <Skeleton
                                        animation="wave"
                                        variant="rectangular"
                                        sx={{ width: "80%", height: "25%", bgcolor: "#2b2b2c", borderRadius: "1vw" }}
                                    />
                                ) : (
                                    <Logo />
                                )}
                                <Box sx={{ flexDirection: "column", width: "100%", height: "100%" }}>
                                    {loading ? (
                                        <Skeleton
                                            animation="wave"
                                            variant="rectangular"
                                            sx={{
                                                width: "100%",
                                                height: "13vw",
                                                bgcolor: "#2b2b2c",
                                                borderRadius: "1vw",
                                                mt: "2vw",
                                            }}
                                        />
                                    ) : (
                                        <h2
                                            style={{
                                                fontFamily: "Chau",
                                                textAlign: "start",
                                                letterSpacing: "0.1vw",
                                                lineHeight: "1.7vw",
                                                padding: "0.5vw 2vw",
                                                width: "80%",
                                                height: "65%",
                                            }}
                                        >
                                            Explorando o vasto terreno da programação, vejo cada linha de código como uma
                                            expressão do meu comprometimento com a excelência. Procuro fazer diferença por
                                            onde passo, do jeito{" "}
                                            <span
                                                style={{
                                                    fontWeight: "800",
                                                    background: "linear-gradient(#612f65, #853948, #c14918, #d54f07)",
                                                    WebkitBackgroundClip: "text",
                                                    backgroundPosition: "0% 100%",
                                                    color: "transparent",
                                                }}
                                            >
                                                mulher
                                            </span>
                                            .
                                        </h2>
                                    )}
                                </Box>
                            </Box>
                            <Box sx={{ width: "45%", height: "100%", flexDirection: "column", gap: "0.8vw" }}>
                                <img src={languages} style={{ width: "28vw" }} />
                            </Box>
                        </Box>
                        <Box sx={{ width: 1, gap: "0.8vw" }}>
                            <Box sx={{ width: 1, flexDirection: "row", gap: "0.1vw", alignItems: "center" }}>
                                <IconPinned />
                                <h3>Fixados</h3>
                            </Box>

                            <Box sx={{ width: 1, gap: "0.8vw" }}>
                                <Grid
                                    container
                                    spacing={0}
                                    sx={{ width: "100%", flexDirection: "row", gap: "0.8vw", margin: 0 }}
                                >
                                    {projetos.slice(0, 6).map((project, index) => (
                                        <Grid item xs={3.9} key={index}>
                                            <Card project={project} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            bgcolor: "#1a1a1b",
                            width: "22.4%",
                            height: "100%",
                            borderRadius: "1vw",
                            p: "2vw",
                            gap: "0.8vw",
                        }}
                    >
                        <Box sx={{ flexDirection: "column", gap: "0.5vw" }}>
                            <img src={avatar} style={{ width: "100%", height: "12vw" }} />
                            <p style={{ fontFamily: "Chau", textAlign: "center", fontSize: "2vw" }}>Tainara Silva</p>
                            <p style={{ fontFamily: "Chau", textAlign: "center", fontSize: "1.2vw" }}>Estudante</p>
                        </Box>
                        <p style={{ fontFamily: "Chau", textAlign: "center", fontSize: "1vw" }}>Engenharia de computação</p>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                bgcolor: "#2b2b2c",
                                borderRadius: "1vw",
                                p: "0.8vw",
                                gap: "0.8vw",
                            }}
                        >
                            <CardProfile
                                title="Perfil"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                                location=""
                            />
                            <CardProfile
                                title="Educação"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                                location=""
                            />
                            <CardProfile
                                title="Habilidades"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                                location=""
                            />
                            <CardProfile
                                title="Profissional"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                                location=""
                            />
                            <CardProfile
                                title="Mais informações"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                                location=""
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <BottomMenu />
        </Box>
    )
}
