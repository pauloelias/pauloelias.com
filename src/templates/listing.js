import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import Listing from "../components/listing"
import Pagination from "../components/pagination"

export default function SpeakingListing({ data, pageContext }) {
  const entries = data.allMdx.edges
  const { pageHeading, pageDescription } = pageContext

  return (
    <>
      {pageHeading && (
        <h2
          css={css`
            ${tw`text-blue-900 font-sans font-medium text-xl sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl`}
          `}
        >
          {pageHeading}
        </h2>
      )}

      {pageDescription && (
        <p
          css={css`
            ${tw`mt-3 text-lg text-gray-700 sm:text-xl lg:mt-6 lg:text-2xl`}
          `}
        >
          {pageDescription}
        </p>
      )}

      <div
        css={css`
          ${tw`mt-6 text-lg text-gray-700 lg:mt-8 lg:mt-10 sm:text-xl lg:text-2xl`}
        `}
      >
        <Listing entries={entries} />
        <Pagination
          context={pageContext}
          css={css`
            ${tw`mt-6 lg:mt-8 lg:mt-10`}
          `}
        />
      </div>
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
            date(formatString: "DD MMMM, YYYY")
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
