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
  typography: {
    fontFamily: ["Barlow", "Oswald", "Anton", "san-serif"].join(","),
    h1: { fontWeight: 500, fontSize: 60 },
    h2: { fontWeight: 500, fontSize: 60 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: grey["A200"],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#ff3f3f",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          minHeight: 64,
        },
      },
    },
  },
})

export default theme
