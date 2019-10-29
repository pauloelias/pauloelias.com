import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

export default props => (
  <>
    {props.entries.map(({ node }, i) => (
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
                ${tw`mb-1 block text-gray-500 font-sans text-xs font-semibold uppercase md:text-sm md:mb-2`}
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
  </>
)
