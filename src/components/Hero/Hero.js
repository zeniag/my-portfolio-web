import * as React from "react"
import { Card, CardMedia, Typography } from "@mui/material"

import * as heroStyles from "./Hero.module.scss"

export default function Hero() {
  return (
    <Card className={heroStyles.root}>
      <CardMedia
        // image="/images/hero.png"
        alt="Web Design"
        className={heroStyles.media}
      >
        <h1 className={heroStyles.heading}>Zenia Gist</h1>
        <h2 className={heroStyles.content}>Web Designer & Developer</h2>
      </CardMedia>
    </Card>
  )
}
