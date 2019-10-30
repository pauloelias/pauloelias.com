import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Heading } from "../components/ui/text"

export default function JoutnalDetail({ data: { mdx } }) {
  return (
    <div className="detail-page">
      <Global
        styles={css`
          .gatsby-highlight,
          .gatsby-resp-image-wrapper {
            ${tw`mt-4 mb-4 lg:mt-10 lg:mb-10`}
          }
          .gatsby-highlight {
            ${tw`lg:mx-auto lg:w-4/5`}
          }
        `}
      />
      <Heading level="h2">{mdx.frontmatter.title}</Heading>
      <div
        css={css`
          ${tw`mt-4 lg:mt-10`}
        `}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        url
        resourcesUrl
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
