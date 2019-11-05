import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default props => {
  const { children, level } = props

  switch (level) {
    case `h1`:
      return (
        <h1
          css={css`
            ${tw`text-gray-900 font-sans font-hairline text-3xl sm:font-normal sm:text-3xl md:text-4xl lg:mx-auto lg:w-2/3 lg:text-5xl`}
          `}
          {...props}
        >
          {children}
        </h1>
      )
    case `h2`:
    default:
      return (
        <h2
          css={css`
            ${tw`mt-10 text-gray-900 font-sans font-medium text-2xl leading-tight sm:font-normal sm:text-2xl md:text-3xl lg:mt-12 lg:mx-auto lg:w-2/3 lg:text-4xl`}
          `}
          {...props}
        >
          {children}
        </h2>
      )
    case `h3`:
      return (
        <h3
          css={css`
            ${tw`mt-8 text-gray-900 font-sans font-semibold text-xl leading-tight uppercase sm:text-xl sm:font-normal md:text-2xl md:font-thin lg:mt-10 lg:mx-auto lg:w-2/3 lg:text-3xl`}
          `}
          {...props}
        >
          {children}
        </h3>
      )
    case `h4`:
    case `h5`:
    case `h6`:
      return (
        <h4
          css={css`
            ${tw`mt-6 text-gray-600 font-sans font-semibold text-lg leading-tight uppercase lg:mt-8 lg:mx-auto lg:w-2/3 lg:text-xl`}
          `}
          {...props}
        >
          {children}
        </h4>
      )
  }
}
