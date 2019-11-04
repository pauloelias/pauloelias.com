import { isEmpty } from "lodash"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Heading } from "../components/ui/text"
import ResourcesListing from "../components/resources"

export default ({ data: { mdx } }) => {
  const { title, resourcesUrl, url } = mdx.frontmatter
  const hasResources = !isEmpty(url) || !isEmpty(resourcesUrl)
  return (
    <section>
      <Heading level="h2">{title}</Heading>
      {hasResources && (
        <ResourcesListing media={url || null} slides={resourcesUrl || null} />
      )}
      <article
        css={css`
          ${tw`mt-4 lg:mt-10`}
        `}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {hasResources && (
          <ResourcesListing media={url || null} slides={resourcesUrl || null} />
        )}
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
