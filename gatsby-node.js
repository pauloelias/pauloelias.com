const path = require("path")
const slugify = require("@sindresorhus/slugify")

const POST_PER_PAGE = 7

function generateSlug(folder, path) {
  return `/${folder}/${slugify(path)}`
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        journalEntries: allMdx(
          filter: { fileAbsolutePath: { regex: "/journal/" } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
            }
          }
        }
        speakingEntries: allMdx(
          filter: { fileAbsolutePath: { regex: "/speaking/" } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 100
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
            }
          }
        }
        interviewEntries: allMdx(
          filter: { fileAbsolutePath: { regex: "/interviews/" } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 100
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const journalEntries = result.data.journalEntries.edges
  const numPages = Math.ceil(journalEntries.length / POST_PER_PAGE)

  const speakingEntries = result.data.speakingEntries.edges
  const speakingnumPages = Math.ceil(speakingEntries.length / POST_PER_PAGE)

  const interviewsEntries = result.data.interviewEntries.edges
  const interviewsnumPages = Math.ceil(interviewsEntries.length / POST_PER_PAGE)

  // Create Journal Entries
  journalEntries.forEach(({ node }) => {
    createPage({
      path: generateSlug("journal", node.frontmatter.title),
      component: path.resolve(`./src/templates/journal-detail.js`),
      context: {
        id: node.id,
      },
    })
  })

  // Create Journal Entries List
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/journal` : `/journal/${i + 1}`,
      component: path.resolve("./src/templates/journal-listing.js"),
      context: {
        limit: POST_PER_PAGE,
        skip: i * POST_PER_PAGE,
        numPages,
        currentPage: i + 1,
        filter: `/jounral/`,
      },
    })
  })

  // Create Speakinf Entries List
  Array.from({ length: speakingnumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/speaking` : `/speaking/${i + 1}`,
      component: path.resolve("./src/templates/listing.js"),
      context: {
        limit: POST_PER_PAGE,
        skip: i * POST_PER_PAGE,
        numPages: speakingnumPages,
        currentPage: i + 1,
        filter: `/speaking/`,
      },
    })
  })

  // Create Interviews Entries List
  Array.from({ length: interviewsnumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/interviews` : `/interviews/${i + 1}`,
      component: path.resolve("./src/templates/listing.js"),
      context: {
        limit: POST_PER_PAGE,
        skip: i * POST_PER_PAGE,
        numPages: interviewsnumPages,
        currentPage: i + 1,
        filter: `/interviews/`,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    let slug =
      slugify(node.frontmatter.title) || createFilePath({ node, getNode })

    if (node.fileAbsolutePath.includes("content/journal/")) {
      slug =
        generateSlug("journal", node.frontmatter.title) || slugify(parent.name)
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}
