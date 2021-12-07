const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/project.js`)
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
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
