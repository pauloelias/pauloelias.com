import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { IoIosQuote } from "react-icons/io"

export default props => (
  <blockquote
    css={css`
      ${tw`relative my-6 py-3 border-t border-b border-gray-400 md:my-10 md:py-6 lg:mx-auto lg:py-8 lg:px-4 lg:w-4/5`}
      & p {
        ${tw`m-0 w-full font-sans font-hariline text-2xl lg:text-3xl lg:leading-relaxed`}
      }
    `}
    {...props}
  >
    <IoIosQuote
      css={css`
        ${tw`absolute top-0 left-0 mt-1 -ml-6 md:mt-3 lg:mt-3 lg:-ml-3 opacity-25`}
      `}
      size="3em"
    />
    {props.children}
  </blockquote>
)
