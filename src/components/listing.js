import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

export default props => (
  <div {...props}>
    {props.entries.map(({ node }, i) => (
      <div
        key={node.id}
        css={css`
          ${tw`py-6 border-t border-gray-300 sm:py-8 lg:py-10`}
        `}
      >
        <Link
          to={node.fields.slug}
          css={css`
            ${tw`flex flex-col no-underline outline-none focus:shadow-outline`}
          `}
        >
          <h3
            css={css`
              ${tw`mb-1 text-gray-900 font-serif text-lg leading-relaxed lg:text-xl`}
            `}
          >
            <span
              css={css`
                ${tw`block mb-1 text-gray-500 font-sans text-xs font-semibold uppercase leading-none`}
              `}
            >
              {node.frontmatter.date}
            </span>
            {node.frontmatter.title}
          </h3>
          <p
            css={css`
              ${tw`text-base text-gray-600 leading-snug md:leading-relaxed`}
            `}
          >
            {node.frontmatter.description}
          </p>
        </Link>
      </div>
    ))}
  </div>
)
