import * as React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import theme from "../../theme"

import "../../styles/styles.scss"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
