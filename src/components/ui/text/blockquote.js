import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default props => (
  <blockquote
    css={css`
      ${tw`my-6 py-3 border-t border-b border-gray-400 md:my-10 md:py-6 lg:mx-auto lg:py-8 lg:px-4 lg:w-4/5`}
      & p {
        ${tw`m-0 w-full font-sans font-hariline text-2xl lg:text-3xl lg:leading-relaxed`}
      }
    `}
    {...props}
  >
    {props.children}
  </blockquote>
)
