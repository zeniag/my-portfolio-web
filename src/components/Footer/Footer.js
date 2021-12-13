import { Avatar, Paper } from "@mui/material"
import React from "react"

import * as footerStyles from "./Footer.module.scss"
import github from "../../../static/images/avatars/github.svg"
import linkedin from "../../../static/images/avatars/linkedin.svg"
import gmail from "../../../static/images/avatars/gmail.svg"

const Footer = () => {
  return (
    <div className={footerStyles.root}>
      <Paper className={footerStyles.footer} square>
        <a
          href="https://github.com/zeniagist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            variant="square"
            alt="Github"
            src={github}
            className={footerStyles.small}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zeniagist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            variant="square"
            alt="LinkedIn"
            src={linkedin}
            className={footerStyles.small}
          />
        </a>
        <a
          href="mailto:zeniagist@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            variant="square"
            alt="Gmail"
            src={gmail}
            className={footerStyles.small}
          />
        </a>
      </Paper>
    </div>
  )
}

export default Footer
