import { Paper } from "@mui/material"
import React from "react"

import * as aboutStyles from "./About.module.scss"
import SkillSet from "../SkillSet/SkillSet"
import Bio from "../Bio/Bio"

const About = () => {
  return (
    <Paper square className={aboutStyles.paperContainer}>
      <Bio />
      <SkillSet />
    </Paper>
  )
}

export default About
