const path = require("path")
const slugify = require("@sindresorhus/slugify")

const POST_PER_PAGE = 7

function generateSlug(folder, path) {
  return `/${folder}/${slugify(path)}`
}

function createEntryPages(createPage, edges) {
  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/detail.js`),
      context: {
        id: node.id,
      },
    })
  })
}

function createPaginatedPages(
  createPage,
  entries,
  paginationTemplate,
  pathPrefix,
  filter,
  pageHeading,
  pageDescription
) {
  const numPages = Math.ceil(entries.length / POST_PER_PAGE)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${pathPrefix}` : `/${pathPrefix}/${i + 1}`,
      component: path.resolve(paginationTemplate),
      context: {
        limit: POST_PER_PAGE,
        skip: i * POST_PER_PAGE,
        numPages,
        currentPage: i + 1,
        filter,
        pathPrefix,
        pageHeading,
        pageDescription,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      fragment BaseMdxFields on Mdx {
        id
        fields {
          slug
          filter
        }
        frontmatter {
          title
        }
      }
      query {
        journalEntries: allMdx(
          filter: { fileAbsolutePath: { regex: "/journal/" } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              ...BaseMdxFields
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
              ...BaseMdxFields
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
              ...BaseMdxFields
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

  // Grab all journal entries
  const journalEntries = result.data.journalEntries.edges
  const speakingEntries = result.data.speakingEntries.edges
  const interviewEntries = result.data.interviewEntries.edges

  // Create Journal Entries
  createEntryPages(createPage, journalEntries)
  // Create paginted journal entries
  createPaginatedPages(
    createPage,
    journalEntries,
    `./src/templates/listing.js`,
    `journal`,
    `/journal/`,
    `Journal`,
    `Ut ipsum euismod ridiculus varius aliquam lorem, neque scelerisque mattis vulputate pulvinar dapibus, litora fringilla justo lectus interdum.`
  )

  // Create Speaking Entries
  createEntryPages(createPage, speakingEntries)
  // Create Speakinf Entries List
  createPaginatedPages(
    createPage,
    speakingEntries,
    `./src/templates/listing.js`,
    `speaking`,
    `/speaking/`,
    `Public Speaking`,
    `Ut ipsum euismod ridiculus varius aliquam lorem, neque scelerisque mattis vulputate pulvinar dapibus, litora fringilla justo lectus interdum.`
  )

  // Create Interview Entries
  createEntryPages(createPage, interviewEntries)
  // Create Interviews Entries List
  createPaginatedPages(
    createPage,
    interviewEntries,
    `./src/templates/listing.js`,
    `interviews`,
    `/interviews/`,
    `Interviews`,
    `Ut ipsum euismod ridiculus varius aliquam lorem, neque scelerisque mattis vulputate pulvinar dapibus, litora fringilla justo lectus interdum.`
  )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    let slug =
      slugify(node.frontmatter.title) ||
      createFilePath({ node, getNode, basePath: `pages` })

    if (node.fileAbsolutePath.includes("content/journal/")) {
      slug =
        generateSlug("journal", node.frontmatter.title) || slugify(parent.name)
      filter = `/journal/`
    }

    if (node.fileAbsolutePath.includes("content/speaking/")) {
      slug =
        generateSlug("speaking", node.frontmatter.title) || slugify(parent.name)
      filter = `/speaking/`
    }

    if (node.fileAbsolutePath.includes("content/interviews/")) {
      slug =
        generateSlug("interviews", node.frontmatter.title) ||
        slugify(parent.name)
      filter = `/interviews/`
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    createNodeField({
      name: `filter`,
      node,
      value: filter,
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
