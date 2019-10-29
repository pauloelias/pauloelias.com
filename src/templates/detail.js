import tw from "tailwind.macro"
import { Global, css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Heading } from "../components/ui/text"

export default function JoutnalDetail({ data: { mdx } }) {
  return (
    <div
      className="detail-page"
      css={css`
        ${tw`font-serif text-lg lg:text-xl text-gray-700`}
      `}
    >
      <Global
        styles={css`
          html,
          body {
            ${tw`h-screen antialiased`}
          }
          .detail-page {
            p {
              ${tw`mt-6 text-base leading-loose sm:leading-relaxed`}
            }
          }
        `}
      />
      <Heading level="h2">{mdx.frontmatter.title}</Heading>
      <div
        css={css`
          ${tw`mt-4 lg:mt-6`}
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
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
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
