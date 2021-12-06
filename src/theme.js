import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff6d80",
      main: "#E33654",
      dark: "#aa002c",
    },
    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
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
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: grey["A200"],
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#E33654",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          minHeight: 64,
          backgroundColor: "#E33654",
        },
      },
    },
  },
})

export default theme
