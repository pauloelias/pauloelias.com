import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"
import { IoIosQuote } from "react-icons/io"

export const Heading = props => {
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
            ${tw`text-gray-900 font-sans font-medium text-2xl leading-tight sm:font-normal sm:text-2xl md:text-3xl lg:mx-auto lg:w-2/3 lg:text-4xl`}
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
            ${tw`text-gray-900 font-sans font-semibold text-xl leading-tight uppercase sm:text-xl sm:font-normal md:text-2xl md:font-thin lg:mx-auto lg:w-2/3 lg:text-3xl`}
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
            ${tw`text-gray-600 font-sans font-semibold text-lg leading-tight uppercase lg:mx-auto lg:w-2/3 lg:text-xl`}
          `}
          {...props}
        >
          {children}
        </h4>
      )
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

export const Blockquote = props => (
  <blockquote
    css={css`
      ${tw`relative z-10 my-6 py-3 border-t border-b border-gray-400 md:my-10 md:py-6 lg:mx-auto lg:py-8 lg:px-4 lg:w-4/5`}
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

export const Ul = props => (
  <ul
    css={css`
      ${tw`mt-8 list-disc list-inside lg:mx-auto lg:mt-10 lg:w-2/3`}
      ul {
        ${tw`my-1 mx-0 pl-4 lg:my-2 lg:pl-6 lg:w-auto`}
      }
    `}
    {...props}
  >
    {props.children}
  </ul>
)

export const Li = props => (
  <li
    css={css`
      ${tw`font-serif font-normal text-lg leading-relaxed md:text-xl lg:text-lg`}
    `}
    {...props}
  >
    {props.children}
  </li>
)
