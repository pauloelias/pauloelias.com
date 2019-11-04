import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { MdPlayCircleOutline, MdFilterNone } from "react-icons/md"

const ResourceLink = styled.a`
  ${tw`flex items-center mr-4 text-blue-700 hover:text-gray-700 md:mr-6 lg:justify-center lg:mr-8`}
  span {
    ${tw`block ml-2 text-base md:ml-3 lg:text-lg`}
  }
`

export default ({ slides, media, filter, listing }) => {
  const icon = tw`w-6 h-6 lg:w-8 lg:h-8`
  return (
    <div
      css={css`
        ${tw`flex items-center mt-4`}
        ${!listing && tw`lg:mx-auto lg:mt-8 lg:w-2/3`}
      `}
    >
      {slides && (
        <ResourceLink
          href={slides}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Slides Icon`}
          title="View Slides"
        >
          <MdFilterNone
            css={css`
              ${icon}
            `}
          />{" "}
          <span>View Slides</span>
        </ResourceLink>
      )}
      {media && (
        <ResourceLink
          href={media}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Play Media Icon`}
          title="Watch Video"
        >
          <MdPlayCircleOutline
            css={css`
              ${icon}
            `}
          />{" "}
          <span>{filter === "/speaking/" ? `Watch Video` : `Listen`}</span>
        </ResourceLink>
      )}
    </div>
  )
}
