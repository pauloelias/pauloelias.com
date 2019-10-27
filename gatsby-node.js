const path = require("path")
const slugify = require("@sindresorhus/slugify")

const POST_PER_PAGE = 7

function generateSlug(folder, path) {
  return `/${folder}/${slugify(path)}`
}

function createJournalPages(createPage, edges) {
  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/journal-detail.js`),
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
  filter
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
              fields {
                slug
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

  // Create Journal Entries
  createJournalPages(createPage, journalEntries)

  // Create paginted journal entries
  createPaginatedPages(
    createPage,
    journalEntries,
    `./src/templates/listing.js`,
    `journal`,
    `/journal/`
  )

  // Create Speakinf Entries List
  createPaginatedPages(
    createPage,
    result.data.speakingEntries.edges,
    `./src/templates/listing.js`,
    `speaking`,
    `/speaking/`
  )

  // Create Interviews Entries List
  createPaginatedPages(
    createPage,
    result.data.interviewEntries.edges,
    `./src/templates/listing.js`,
    `interviews`,
    `/interviews/`
  )
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
