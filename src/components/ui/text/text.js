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
            ${tw`text-blue-800 font-sans text-xl sm:text-2xl md:text-3xl md:font-light lg:text-4xl text-blue-800`}
            ${padding && tw`mt-6 sm:mt-8 md:mt-10`}
          `}
          {...props}
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
          `}
          {...props}
        >
          {props.children}
        </p>
      )
  }
}