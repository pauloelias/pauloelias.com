import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { IoIosAlbums, IoMdPlay } from "react-icons/io"

const ResourceLink = styled.a`
  ${tw`flex items-center text-xl text-blue-700 hover:text-gray-700 lg:text-2xl`}
  span {
    ${tw`block ml-1 text-xl uppercase font-semibold md:ml-2 md:text-lg`}
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
        <IoIosAlbums /> <span>Slides</span>
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
        <IoMdPlay /> <span>Media</span>
      </ResourceLink>
    )}
  </div>
)
