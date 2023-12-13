import "./App.css"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { Snackbar, ThemeProvider } from "@mui/material"
import { Routes } from "./Routes"
import { Providers } from "./Providers"
import "@mantine/core/styles.css"
import { ConfirmDialog } from "burgos-confirm"
function App() {
    return (
        <Providers>
            <Routes />
            <Snackbar />
            <ConfirmDialog />
        </Providers>
    )
}

export default App
