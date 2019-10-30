import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import Listing from "../components/listing"
import Pagination from "../components/pagination"
import { Heading, Text } from "../components/ui/text"

export default function SpeakingListing({ data, pageContext }) {
  const entries = data.allMdx.edges
  const { pageHeading, pageDescription } = pageContext

  return (
    <>
      {pageHeading && <Heading level="h2">{pageHeading}</Heading>}

      {pageDescription && <Text type="body">{pageDescription}</Text>}

      <div
        css={css`
          ${tw`my-6 border-b border-gray-300 sm:my-8 lg:my-10 lg:mx-auto lg:w-2/3`}
        `}
      >
        <Listing entries={entries} />
      </div>
      <Pagination
        context={pageContext}
        css={css`
          ${tw`flex items-center justify-center mt-6 text-gray-600 font-bold tracking-tight outline-none focus:shadow-outline lg:mt-8 lg:mt-10 hover:underline`}
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
