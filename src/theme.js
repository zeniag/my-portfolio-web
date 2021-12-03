import { createTheme, ThemeProvider } from "@mui/material/styles"
import { red, grey } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      light: red[300],
      main: "#ff3f3f",
      dark: red[700],
    },
    secondary: {
      light: grey["A50"],
      main: grey["A200"],
      dark: grey["A400"],
    },
    mode: "dark",
  },
  typography: {},
  // overrides
  components: {},
})

export default theme
