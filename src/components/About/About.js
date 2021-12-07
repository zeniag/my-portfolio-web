import { Paper } from "@mui/material"
import React from "react"

import SkillSet from "../SkillSet/SkillSet"
import Bio from "../Bio/Bio"

const About = () => {
  return (
    <Paper square style={{ paddingBottom: "30px" }}>
      <Bio />
      <SkillSet />
    </Paper>
  )
}

export default About
