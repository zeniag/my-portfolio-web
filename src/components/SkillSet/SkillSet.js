import { Container, Typography } from "@mui/material"
import React from "react"

import * as skillSetStyles from "./SkillSet.module.scss"

const SkillSet = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" className={skillSetStyles.sectionHeading}>
        Skill Set
      </Typography>
      <Typography variant="body1">
        Here is a quick list of the languages and tools I have acquired over the
        years. Most of these I am currently using in recent projects.
      </Typography>
    </Container>
  )
}

export default SkillSet
