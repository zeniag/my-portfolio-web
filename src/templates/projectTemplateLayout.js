import * as React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import theme from "../theme"

import "../styles/styles.scss"
import Footer from "../components/Footer/Footer"

const ProjectTemplateLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="wrapper">{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default ProjectTemplateLayout
