import { useState } from "react"
import { Tooltip, UnstyledButton, Stack, rem } from "@mantine/core"
import image1 from "../assets/cartoons/7aRby8A2gmzW.png"
import image2 from "../assets/cartoons/err.png"
import image3 from "../assets/cartoons/R1b90Krw5WGX.png"
import image4 from "../assets/cartoons/err.png"
import image5 from "../assets/cartoons/R1b90Krw5WGX.png"

import { IconHome2, IconUser, IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react"
import classes from "../styles/menu.module.css"
import { Box } from "@mui/material"
import projetos from "../projects"

interface NavbarLinkProps {
    icon: typeof IconHome2
    label: string
    active?: boolean
    onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    )
}

const mockdata = [
    { icon: IconHome2, label: "Início" },
    { icon: IconUser, label: "Quem sou eu?" },
]
const folders = [
    { icon: image1, label: "Disney" },
    { icon: image2, label: "Pokedéx" },
    { icon: image3, label: "Be the Hero" },
    { icon: image4, label: "Be the Hero" },
    { icon: image5, label: "Be the Hero" },
    // { icon: image5, label: "Be the Hero" },
    // { icon: image1, label: "Be the Hero" },
    // { icon: image1, label: "Be the Hero" },
]

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const [active, setActive] = useState(1)

    const links = mockdata.map((link, index) => (
        <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
    ))
    const projects = projetos.map((link, index) => {
        const uppercaseLetters = link.name
            .split("")
            .filter((char) => char === char.toUpperCase())
            .join("")
        return (
            <Tooltip label={link.name} position="right" key={index}>
                <Box
                    sx={{
                        fontFamily: "Chau",
                        fontSize: "1.5rem",
                        bgcolor: "#2b2b2c",
                        width: 1,
                        height: "8vh",
                        borderRadius: "0.5vw",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {uppercaseLetters}
                </Box>
            </Tooltip>
        )
    })

    return (
        <Box sx={{ gap: "0.8vw", height: "99%", justifyContent: "center" }}>
            <nav className={classes.navbar}>
                <Box className={classes.navbarMain}>
                    <Stack justify="center" gap={0}>
                        {links}
                    </Stack>
                </Box>
            </nav>
            <Box className={classes.navbar2} sx={{ justifyContent: "space-between", height: "100%" }}>
                <Box className={classes.navbarMain} sx={{ height: "100%" }}>
                    <Stack justify="center" gap={0} style={{ height: "23vw", gap: "0.5vw", overflowY: "auto" }}>
                        {projects}
                    </Stack>
                </Box>
                <Stack justify="center" gap={0}>
                    <NavbarLink
                        icon={IconBrandGithubFilled}
                        label="GitHub"
                        onClick={() => window.open("https://github.com/tainarasn", "_blank")}
                    />
                    <NavbarLink
                        icon={IconBrandLinkedin}
                        label="LinkedIn"
                        onClick={() => window.open("https://www.linkedin.com/in/tainarasn", "_blank")}
                    />
                </Stack>
            </Box>
        </Box>
    )
}
