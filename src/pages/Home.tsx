import Skeleton from "@mui/material/Skeleton"
import Box from "@mui/material/Box"
import React, { useState } from "react"
import { MenuDrawer } from "../components/MenuDrawer"
import { BottomMenu } from "../components/BottomMenu"
import { Logo } from "../components/Logo"
import avatar from "../assets/avatar/1.png"
import { Card } from "../components/Card"
import { IconPinned } from "@tabler/icons-react"

import age from "../assets/folders/age.jpg"
import card from "../assets/folders/card.jpg"
import mini from "../assets/folders/mini.png"
import hero from "../assets/folders/hero.png"
import pokedex from "../assets/folders/pokedex.png"

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
                        }}
                    >
                        <Box sx={{ flexDirection: "row", height: "70%", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: "80%",
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
                            <Box sx={{ width: "35%", height: "100%", flexDirection: "column", gap: "0.8vw" }}></Box>
                        </Box>
                        <Box sx={{ height: "70%", gap: "0.8vw" }}>
                            <Box sx={{ flexDirection: "row", gap: "0.1vw", alignItems: "center" }}>
                                <IconPinned />
                                <h3>Pinned</h3>
                            </Box>
                            <Box sx={{ width: "100%", height: "40%", flexDirection: "row", gap: "0.8vw", margin: 0 }}>
                                <Card
                                    title="Password generator app"
                                    folder={mini}
                                    style={{ width: "33%", height: "100%" }}
                                />
                                <Card title="Be The Hero" folder={hero} style={{ width: "33%", height: "100%" }} />
                                <Card title="Pokedéx" folder={pokedex} style={{ width: "33%", height: "100%" }} />
                            </Box>
                            <Box sx={{ width: "100%", height: "40%", flexDirection: "row", gap: "0.8vw" }}>
                                <Card title="Calculator Age" folder={age} style={{ width: "33%", height: "100%" }} />
                                <Card title="Mini Portfólio" folder={mini} style={{ width: "33%", height: "100%" }} />
                                <Card title="Interactive card form" folder={card} style={{ width: "33%", height: "100%" }} />
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
                            <p style={{ fontFamily: "Lucidity", textAlign: "center", fontSize: "2vw" }}>Tainara Silva</p>
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
                            <Card
                                title="Perfil"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                            />
                            <Card
                                title="Educação"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                            />
                            <Card
                                title="Habilidades"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                            />
                            <Card
                                title="Profissional"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                            />
                            <Card
                                title="Mais informações"
                                folder={""}
                                variant
                                style={{ height: "15%" }}
                                sxTitle={{ fontSize: "1.1vw" }}
                                sxAvatar={{ borderRadius: "0.5vw" }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <BottomMenu />
        </Box>
    )
}
