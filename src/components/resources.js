import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { MdPlayCircleOutline, MdFilterNone } from "react-icons/md"

const ResourceLink = styled.a`
  ${tw`flex items-center text-blue-700 hover:text-gray-700`}
  span {
    ${tw`block ml-2 text-base uppercase font-semibold md:ml-3`}
  }
`

export default ({ slides, media }) => (
  <div
    css={css`
      ${tw`flex items-center justify-between mt-4 lg:mx-auto lg:mt-8 lg:w-2/3`}
    `}
  >
    {slides && (
      <ResourceLink
        href={slides}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Resources Icon`}
        title="View Slides"
      >
        <MdFilterNone
          css={css`
            ${tw`w-8 h-8`}
          `}
        />{" "}
        <span>Slides</span>
      </ResourceLink>
    )}
    {media && (
      <ResourceLink
        href={media}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Play Media Icon`}
        title="View Media"
      >
        <MdPlayCircleOutline
          css={css`
            ${tw`w-8 h-8`}
          `}
        />{" "}
        <span>Media</span>
      </ResourceLink>
    )}
  </div>
)
