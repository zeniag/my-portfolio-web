const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const result = await graphql(`
    query {
      allSanityProjects {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)
  result.data.allSanityProjects.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug.current}`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
