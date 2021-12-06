import { Avatar, Paper } from "@mui/material"
import React from "react"

import * as footerStyles from "./Footer.module.scss"
import gatsby from "../../images/avatars/gatsby.svg"
import graphql from "../../images/avatars/graphql.svg"
import sanity from "../../images/avatars/sanity.svg"
import materialUI from "../../images/avatars/materialUI.svg"
import react from "../../images/avatars/react.svg"

const Footer = () => {
  return (
    <div className={footerStyles.root}>
      <Paper className={footerStyles.footer} square>
        <Avatar
          variant="square"
          alt="Gatsby"
          src={gatsby}
          className={footerStyles.small}
        />
        <Avatar
          variant="square"
          alt="GraphQL"
          src={graphql}
          className={footerStyles.small}
        />
        <Avatar
          variant="square"
          alt="Sanity"
          src={sanity}
          className={footerStyles.small}
        />
        <Avatar
          variant="square"
          alt="Material UI"
          src={materialUI}
          className={footerStyles.small}
        />
        <Avatar
          variant="square"
          alt="React"
          src={react}
          className={footerStyles.small}
        />
      </Paper>
    </div>
  )
}

export default Footer
