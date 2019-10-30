import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Heading } from "../components/ui/text"

export default function JoutnalDetail({ data: { mdx } }) {
  return (
    <div className="detail-page">
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
