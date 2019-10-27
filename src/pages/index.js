import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const Container = tw.div`
  mx-auto
`

const Heading = tw.h1`
  font-sans font-semibold text-2xl
`

const Excerpt = tw.h3`
  font-serif text-1xl
`

export default ({ data }) => (
  <Container className="container">
    <SEO title="Hi, I'm Paulo Elias!" />
    <Heading>Hello, world!</Heading>
    <h4>{data.allMdx.totalCount} Posts</h4>
    {data.allMdx.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={`/post/${node.frontmatter.slug}`}
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
  </Container>
)

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
        }
      }
    }
  }
`
