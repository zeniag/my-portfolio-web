import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import logo from "../../images/favicon.png"
import * as navbarStyles from "./Navbar.module.scss"

export default function Header() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const url = window.location.pathname

  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      metadata: allSite {
        edges {
          node {
            siteMetadata {
              title
            }
          }
        }
      }
    }
  `)
  const metadata = data.metadata.edges[0].node.siteMetadata

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography variant="body1">
          <Link to="/" className={navbarStyles.linkForMobile}>
            Home
          </Link>
        </Typography>
      </MenuItem>
      {url === "/" && (
        <>
          <MenuItem>
            <Typography variant="body1">
              <Link to="#portfolio" className={navbarStyles.linkForMobile}>
                Projects
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="body1">
              <Link to="#about" className={navbarStyles.linkForMobile}>
                About
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="body1">
              <Link to="#contact" className={navbarStyles.linkForMobile}>
                Contact
              </Link>
            </Typography>
          </MenuItem>
        </>
      )}
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            className={navbarStyles.link}
          >
            <Link to="/">
              <Avatar title={metadata.title} src={logo} alt={metadata.title} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography variant="body1" className={navbarStyles.link}>
              <Link to="/">Home</Link>
            </Typography>
            {url === "/" && (
              <>
                <Typography variant="body1" className={navbarStyles.link}>
                  <Link to="#portfolio">Projects</Link>
                </Typography>
                <Typography variant="body1" className={navbarStyles.link}>
                  <Link to="#about">About</Link>
                </Typography>
                <Typography variant="body1" className={navbarStyles.link}>
                  <Link to="#contact">Contact</Link>
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  )
}
