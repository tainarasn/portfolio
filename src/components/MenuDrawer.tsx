import { useState } from "react"
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core"
import image1 from "../assets/cartoons/7aRby8A2gmzW.png"
import image2 from "../assets/cartoons/DALL·E 2023-11-15 20.50.19 - Create multiple drawings of a young woman with long reddish-brown hair and a few freckles in the style of the graphic shown. The illustrations should .png"
import image3 from "../assets/cartoons/R1b90Krw5WGX.png"

import { IconHome2, IconUser, IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react"
import classes from "../styles/menu.module.css"
import { Box } from "@mui/material"

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
    { icon: image1, label: "Analytics" },
    { icon: image2, label: "Analytics" },
    { icon: image3, label: "Analytics" },
]

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const [active, setActive] = useState(1)

    const links = mockdata.map((link, index) => (
        <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
    ))
    const projects = folders.map((link, index) => (
        <Box sx={{ gap: "2vw" }}>
            <img src={link.icon} key={index} style={{ borderRadius: "0.5vw" }} />
        </Box>
    ))

    return (
        <Box sx={{ gap: "0.8vw", height: "99%", justifyContent: "center" }}>
            <nav className={classes.navbar}>
                <Box className={classes.navbarMain}>
                    <Stack justify="center" gap={0}>
                        {links}
                    </Stack>
                </Box>
            </nav>
            <Box className={classes.navbar2} sx={{ justifyContent: "space-between", height: "82%" }}>
                <Box className={classes.navbarMain}>
                    <Stack justify="center" gap={0}>
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
