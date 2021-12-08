import * as React from "react"
import { Link, graphql } from "gatsby"
import GitHubIcon from "@mui/icons-material/GitHub"
import LanguageIcon from "@mui/icons-material/Language"
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material"

import Layout from "../components/Layout/Layout"
import * as projectStyles from "./project.module.scss"

const ProjectTemplate = ({ data }) => {
  const { slug, title, mainImage, body, techStack, websiteLink, githubLink } =
    data.project
  console.log(techStack)
  return (
    <Layout>
      <Paper square className={projectStyles.paper}>
        <Container>
          <Grid
            container
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={projectStyles.header}
          >
            <Grid item>
              <Typography variant="h2">{title}</Typography>
            </Grid>

            <Grid item>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Back
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Card square className={projectStyles.lightCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image={mainImage.asset.url}
                alt={title}
              />
              <CardContent>
                <Typography>
                  {body.map(content => (
                    <p key={slug.current}>{content.children[0].text}</p>
                  ))}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  Tech Stack
                </Typography>
                <Grid
                  container
                  display="flex"
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={3}
                >
                  {techStack.map(stack => (
                    <Grid item key={stack.slug.current} textAlign="center">
                      <div>
                        <img
                          src={stack.image.asset.url}
                          alt={stack.title}
                          height="50px"
                          width="50px"
                        />
                      </div>
                      <div>{stack.title}</div>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
          <Grid
            container
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            <Grid item>
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="primary">
                  <LanguageIcon style={{ marginRight: "5px" }} />
                  <h3>Website</h3>
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="primary">
                  <GitHubIcon style={{ marginRight: "5px" }} />
                  <h3>Github</h3>
                </Button>
              </a>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  )
}

export default ProjectTemplate

export const data = graphql`
  query ProjectQuery($slug: String) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      mainImage {
        asset {
          url
        }
      }
      body {
        children {
          text
        }
      }
      techStack {
        title
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
      }
      websiteLink
      githubLink
    }
  }
`
