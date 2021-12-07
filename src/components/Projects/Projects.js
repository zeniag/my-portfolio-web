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
      projects: allSanityProjects(
        filter: { showProject: { eq: true } }
        sort: { fields: publishedAt, order: DESC }
      ) {
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
    <div id="portfolio">
      <Paper square className={projectsStyles.lightPaper}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            className={projectsStyles.lightSectionHeading}
          >
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projectsData.map(project => (
              <Grid item xs={12} sm={6} md={4} key={project.node.slug}>
                <Card square>
                  <CardActionArea>
                    <Link to={project.node.slug.current}>
                      <CardMedia
                        image={project.node.mainImage.asset.url}
                        className={projectsStyles.media}
                      >
                        <span className={projectsStyles.forAccessibilityOnly}>
                          {project.node.title}
                        </span>
                      </CardMedia>
                    </Link>
                  </CardActionArea>
                  <CardContent>
                    <Link
                      to={project.node.slug.current}
                      className={projectsStyles.projectTitle}
                    >
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.node.title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      className={projectsStyles.excerpt}
                    >
                      {project.node.excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions className={projectsStyles.btnContainer}>
                    <Link
                      to={project.node.slug.current}
                      className={projectsStyles.btn}
                    >
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
