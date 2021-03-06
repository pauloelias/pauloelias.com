import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default props => {
  const { children, padding, type } = props

  switch (type) {
    case `intro`:
      return (
        <p
          css={css`
            ${tw`text-gray-700 font-sans text-xl font-medium leading-normal sm:text-2xl sm:font-normal md:font-light md:leading-snug`}
            ${padding && tw`mt-6 sm:mt-8 md:mt-10`}
            a {
              ${tw`outline-none text-blue-600 underline hover:no-underline focus:shadow-outline`}
            }
          `}
        >
          {children}
        </p>
      )
    case `body`:
    default:
      return (
        <p
          css={css`
            ${tw`mt-8 font-serif font-normal text-lg leading-loose md:text-xl lg:mx-auto lg:mt-10 lg:w-2/3 lg:text-lg`}
            a {
              ${tw`outline-none text-blue-600 underline hover:no-underline focus:shadow-outline`}
            }
          `}
          {...props}
        >
          {children}
        </p>
      )
  }
}
