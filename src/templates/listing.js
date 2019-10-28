import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link, graphql } from "gatsby"

export default function SpeakingListing({ data, pageContext }) {
  console.log(data, pageContext)
  const entries = data.allMdx.edges
  // TODO: Move pagination into its own component
  const {
    currentPage,
    numPages,
    pathPrefix,
    pageHeading,
    pageDescription,
  } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? `/${pathPrefix}`
      : `/${pathPrefix}/${(currentPage - 1).toString()}`
  const nextPage = `/${pathPrefix}/${(currentPage + 1).toString()}`

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
            ${tw`mt-3 lg:mt-6 text-lg sm:text-xl lg:text-2xl text-gray-700`}
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
        {entries.map(({ node }) => (
          <div
            key={node.id}
            css={css`
              ${tw`border-t border-gray-400 py-6 sm:py-8 lg:py-10`}
            `}
          >
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  ${tw`text-gray-900 font-serif text-lg lg:text-xl`}
                `}
              >
                <span
                  css={css`
                    ${tw`mb-1 block text-gray-500 font-sans text-sm font-semibold uppercase md:text-base lg:text-lg md:mb-2`}
                  `}
                >
                  {node.frontmatter.date}
                </span>
                {node.frontmatter.title}
              </h3>
              <p
                css={css`
                  ${tw`mt-2 text-gray-700 text-sm sm:text-base lg:text-lg md:mt-3`}
                `}
              >
                {node.frontmatter.description}
              </p>
            </Link>
          </div>
        ))}
        <div>
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isFirst &&
            !isLast &&
            Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/speaking/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
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
