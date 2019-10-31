import tw from "tailwind.macro"
import { css } from "@emotion/core"
import React from "react"

export default ({ children }) => (
  <main
    css={css`
      ${tw`flex-1 px-4 py-6 md:py-10 lg:py-16`}
    `}
  >
    {children}
  </main>
)
