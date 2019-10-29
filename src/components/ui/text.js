import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export const Heading = props => {
  const { children, level } = props

  switch (level) {
    case `h1`:
    default:
      return <h1>{children}</h1>
    case `h2`:
      return (
        <h2
          css={css`
            ${tw`text-blue-900 font-sans font-medium text-2xl leading-tight sm:font-normal md:text-3xl lg:text-4xl`}
          `}
        >
          {children}
        </h2>
      )
    case `h3`:
      return <h3>{children}</h3>
    case `h4`:
      return <h4>{children}</h4>
    case `h5`:
      return <h5>{children}</h5>
    case `h6`:
      return <h6>{children}</h6>
  }
}

export const Text = props => {
  const { children, padding, type } = props

  switch (type) {
    case `intro`:
      return (
        <p
          css={css`
            ${tw`text-blue-800 font-sans text-xl sm:text-2xl md:text-3xl md:font-light lg:text-4xl text-blue-800`}
            ${padding && tw`mt-6 sm:mt-8 md:mt-10`}
          `}
        >
          {children}
        </p>
      )
    case `body`:
    default:
      return <p>{children}</p>
  }
}
