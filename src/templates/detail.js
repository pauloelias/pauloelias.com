import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function JoutnalDetail({ data: { mdx } }) {
  return (
    <div
      className="detail-page"
      css={css`
        ${tw`font-serif text-lg lg:text-xl text-gray-700`}
      `}
    >
      <h2
        css={css`
          ${tw`text-blue-900 font-sans font-medium text-xl sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl`}
        `}
      >
        {mdx.frontmatter.title}
      </h2>
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
      }
    }
  }
`
