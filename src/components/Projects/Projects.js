import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import * as projectsStyles from "./Projects.module.scss"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allSanityProjects(filter: { showProject: { eq: true } }) {
        edges {
          node {
            slug {
              current
            }
            mainImage {
              asset {
                url
              }
            }
            title
            excerpt
          }
        }
      }
    }
  `)
  const projectsData = data.projects.edges
  return (
    <div>
      <Paper square className={projectsStyles.lightPaper}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            className={projectsStyles.lightSectionHeading}
          >
            Projects
          </Typography>
          <Grid container>
            {projectsData.map(project => (
              <Grid item xs={12} sm={6} md={4} key={project.node.slug}>
                <Card square>
                  <CardActionArea>
                    <Link to={project.node.slug.current}>
                      <CardMedia
                        image={project.node.mainImage.asset.url}
                        className={projectsStyles.projectImg}
                      >
                        <span className={projectsStyles.forAccessibilityOnly}>
                          {project.node.title}
                        </span>
                      </CardMedia>
                    </Link>
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.node.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      className={projectsStyles.excerpt}
                    >
                      {project.node.excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={project.node.slug.current}>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        aria-label="Explore"
                      >
                        Explore
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}

export default Projects
