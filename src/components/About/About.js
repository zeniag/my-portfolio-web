import { Avatar, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"

import * as aboutStyles from "./About.module.scss"
import aboutImage from "../../images/about.jpg"
import SkillSet from "../Skillset/SkillSet"

const About = () => {
  return (
    <Paper square className={aboutStyles.paperContainer}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={aboutStyles.sectionHeading}>
          About Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Avatar src={aboutImage} className={aboutStyles.profile} />
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <Typography variant="h5">
              Hi, I’m Zenia. An avid gamer, adventurous traveler, and dog-lover.
            </Typography>
            <Typography variant="body1">
              <br />I also go by Full Stack Developer, Front-End Developer, or
              Back-End Developer.
              <br />
              <br />
              With all that said, I don’t like to just define myself by the work
              I’ve done. My inspiration is boundless, it fuels me in the pursuit
              of cultivating new skills. My ability to juggle different projects
              and roles with relative ease is the key to my success.
              <br />
              <br />
              Over the course of my life and career I have developed expertise
              in several areas of web development and design. I am seeking to
              continue this growth by opening myself for opportunities which are
              guaranteed to challenge me.
              <br />
              <br />
              You can review my latest work in my Portfolio and read more about
              my biography, experience, skills, education and much more in my
              Resume.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <SkillSet />
    </Paper>
  )
}

export default About
