import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link, graphql } from "gatsby"

const Excerpt = tw.h3`
  font-serif text-1xl
`

export default function JoutnalListing({ data, pageContext }) {
  const entries = data.allMdx.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/journal"
      : `/journal/${(currentPage - 1).toString()}`
  const nextPage = `/journal/${(currentPage + 1).toString()}`
  return (
    <div>
      {entries.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <Excerpt>
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </Excerpt>
            <p>{node.frontmatter.description}</p>
          </Link>
        </div>
      ))}
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/journal/${i === 0 ? "" : i + 1}`}
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
  )
}

export const pageQuery = graphql`
  query journalListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/journal/" } }
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
          }
        }
      }
    }
  }
`
