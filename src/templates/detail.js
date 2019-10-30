import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Heading } from "../components/ui/text"

export default function JoutnalDetail({ data: { mdx } }) {
  return (
    <section>
      <Heading level="h2">{mdx.frontmatter.title}</Heading>
      <article
        css={css`
          ${tw`mt-4 lg:mt-10`}
        `}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </section>
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
