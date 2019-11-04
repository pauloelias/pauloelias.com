import _ from "lodash"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

import ResourcesListing from "../components/resources"

export default props => {
  const { entries, filter } = props

  return (
    <div {...props}>
      {entries.map(({ node }) => {
        const hasResources =
          !_.isEmpty(node.frontmatter.url) ||
          !_.isEmpty(node.frontmatter.resourcesUrl)
        return (
          <div
            key={node.id}
            css={css`
              ${tw`flex flex-col pt-4 pb-3 border-t border-gray-300 sm:pt-8 sm:pb-6 md:pt-12 md:pb-8`}
            `}
          >
            <Link
              to={node.fields.slug}
              css={css`
                ${tw`no-underline outline-none focus:shadow-outline`}
              `}
            >
              <h3
                css={css`
                  ${tw`mb-2 text-gray-900 font-sans text-xl font-medium tracking-tight leading-tight sm:mb-0 sm:leading-relaxed md:text-2xl`}
                `}
              >
                <span
                  css={css`
                    ${tw`block mb-2 text-gray-600 font-serif text-sm uppercase tracking-tight leading-none sm:text-base sm:mb-1`}
                  `}
                >
                  {node.frontmatter.date}
                </span>
                {node.frontmatter.title}
              </h3>
              <p
                css={css`
                  ${tw`text-base text-gray-700 leading-snug sm:text-lg md:leading-relaxed md:text-xl`}
                `}
              >
                {node.frontmatter.description}
              </p>
            </Link>
            <div>
              {hasResources && (
                <ResourcesListing
                  media={node.frontmatter.url || null}
                  slides={node.frontmatter.resourcesUrl || null}
                  filter={filter}
                  listing={true}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
