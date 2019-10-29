import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export const Page = ({ children }) => (
  <div
    css={css`
      ${tw`flex flex-col mx-auto max-w-5xl px-2 md:px-8`}
    `}
  >
    {children}
  </div>
)

export const Main = ({ children }) => (
  <main
    css={css`
      ${tw`flex-1 px-4 py-6 md:py-10 lg:py-16`}
    `}
  >
    {children}
  </main>
)
