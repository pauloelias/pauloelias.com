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
          ${tw`border-t border-gray-300`}
        `}
      >
        <Link
          to={node.fields.slug}
          css={css`
            ${tw`flex flex-col pt-4 pb-3 px-3 no-underline outline-none hover:bg-gray-100 focus:shadow-outline sm:pt-7 sm:pb-5 sm:px-4 md:pt-8 md:pb-6 md:px-5`}
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
