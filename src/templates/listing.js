import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import ListItem from "../components/list-item"
import Pagination from "../components/pagination"
import { Heading, Text } from "../components/ui/text"

export default ({ data, pageContext }) => {
  const entries = data.allMdx.edges
  const { pageHeading, pageDescription, filter } = pageContext
  const cleanFilter = filter.replace(/\//g, "")

  return (
    <>
      <SEO title={pageHeading} description={pageDescription} />
      {pageHeading && <Heading level="h2">{pageHeading}</Heading>}

      {pageDescription && <Text type="body">{pageDescription}</Text>}

      <div
        css={css`
          ${tw`my-6 border-b border-gray-300 sm:my-8 lg:my-10 lg:mx-auto lg:w-2/3`}
        `}
      >
        {entries.map(({ node }) => (
          <ListItem key={node.id} entry={node} filter={cleanFilter} />
        ))}
      </div>
      <Pagination
        context={pageContext}
        css={css`
          ${tw`flex items-center justify-between mt-6 text-gray-500 font-semibold tracking-tight uppercase outline-none focus:shadow-outline lg:mt-8 lg:mt-10 hover:text-blue-600 hover:underline`}
        `}
      />
    </>
  )
}

export const pageQuery = graphql`
  query entriesListQuery($skip: Int!, $limit: Int!, $filter: String!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: $filter } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            filter
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            url
            resourcesUrl
          }
        }
      }
    }
  }
`
