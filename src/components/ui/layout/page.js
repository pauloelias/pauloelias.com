import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default ({ children }) => (
  <div
    css={css`
      ${tw`flex flex-col mx-auto max-w-5xl px-2 md:px-8`}
    `}
  >
    {children}
  </div>
)
