import _ from "lodash"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

import ResourceLinks from "./resources"

const linkStyles = css`
  ${tw`no-underline outline-none focus:shadow-outline`}
`

export const ExtLink = ({ link, children }) => (
  <a href={link} css={linkStyles}>
    {children}
  </a>
)
export const IntLink = ({ link, children }) => (
  <Link to={link} css={linkStyles}>
    {children}
  </Link>
)

export const LinkContent = ({ entry }) => (
  <>
    <h3
      css={css`
        ${tw`text-gray-900 font-sans text-xl font-medium tracking-tight leading-snug sm:leading-snug sm:tracking-tight sm:text-2xl`}
      `}
    >
      <span
        css={css`
          ${tw`block mb-1 text-gray-600 font-serif text-sm uppercase tracking-tight leading-none sm:text-base`}
        `}
      >
        {entry.frontmatter.date}
      </span>
      {entry.frontmatter.title}
    </h3>
    <p
      css={css`
        ${tw`mt-1 text-base text-gray-700 leading-snug sm:text-lg md:leading-relaxed md:text-xl`}
      `}
    >
      {entry.frontmatter.description}
    </p>
  </>
)

export default ({ entry, filter }) => {
  const isInterviews = filter === "interviews"
  const hasResources =
    !_.isEmpty(entry.frontmatter.url) ||
    !_.isEmpty(entry.frontmatter.resourcesUrl)

  return (
    <div
      css={css`
        ${tw`flex flex-col pt-4 pb-3 border-t border-gray-300 sm:pt-8 sm:pb-6 md:pt-12 md:pb-8`}
      `}
    >
      {isInterviews ? (
        <ExtLink link={entry.frontmatter.url}>
          <LinkContent entry={entry} />
        </ExtLink>
      ) : (
        <IntLink link={entry.fields.slug}>
          <LinkContent entry={entry} />
        </IntLink>
      )}
      {hasResources && (
        <div>
          {hasResources && (
            <ResourceLinks
              media={entry.frontmatter.url || null}
              slides={entry.frontmatter.resourcesUrl || null}
              filter={filter}
              listing={true}
            />
          )}
        </div>
      )}
    </div>
  )
}
