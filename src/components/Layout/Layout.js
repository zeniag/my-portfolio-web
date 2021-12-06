import * as React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import theme from "../../theme"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div style={{ marginTop: 64 }}>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
