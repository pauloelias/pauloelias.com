import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

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
    <h4>{data.allPosts.totalCount} Posts</h4>
    <Img
      fluid={data.logoImage.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      alt=""
    />
    {data.allPosts.edges.map(({ node }) => (
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
    logoImage: file(relativePath: { eq: "head-shot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_noBase64
          presentationWidth
        }
      }
    }
    allPosts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
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
